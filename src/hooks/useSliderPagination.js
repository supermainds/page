import { useEffect, useState } from 'react'

export function useSliderPagination(trackRef, cardSelector, itemCount) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [pageIndexes, setPageIndexes] = useState([0])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const updatePages = () => {
      const card = track.querySelector(cardSelector)
      if (!card) return

      const gap = Number.parseFloat(getComputedStyle(track).columnGap || 0)
      const step = card.offsetWidth + gap
      const visibleCards = Math.max(1, Math.floor((track.clientWidth + gap) / step))
      const pageCount = Math.max(1, Math.ceil(itemCount / visibleCards))
      const indexes = Array.from({ length: pageCount }, (_, index) =>
        Math.min(index * visibleCards, itemCount - 1),
      )

      setPageIndexes(indexes)
      setActiveIndex((current) => Math.min(current, indexes[indexes.length - 1]))
    }

    updatePages()
    const observer = new ResizeObserver(updatePages)
    observer.observe(track)
    return () => observer.disconnect()
  }, [cardSelector, itemCount, trackRef])

  const goToSlide = (index) => {
    const track = trackRef.current
    const card = track?.querySelector(cardSelector)
    if (!track || !card) return

    const gap = Number.parseFloat(getComputedStyle(track).columnGap || 0)
    track.scrollTo({
      left: index * (card.offsetWidth + gap),
      behavior: 'smooth',
    })
    setActiveIndex(index)
  }

  const activePageIndex = pageIndexes.reduce((closest, pageIndex, index) => {
    const currentDistance = Math.abs(pageIndex - activeIndex)
    const closestDistance = Math.abs(pageIndexes[closest] - activeIndex)
    return currentDistance < closestDistance ? index : closest
  }, 0)

  const goToPrevious = () => {
    const previousPage = Math.max(activePageIndex - 1, 0)
    goToSlide(pageIndexes[previousPage])
  }

  const goToNext = () => {
    const nextPage = Math.min(activePageIndex + 1, pageIndexes.length - 1)
    goToSlide(pageIndexes[nextPage])
  }

  return {
    activeIndex,
    activePageIndex,
    goToNext,
    goToPrevious,
    goToSlide,
    pageIndexes,
  }
}
