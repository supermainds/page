import { useId } from 'react'

export default function ComparisonIconCheck() {
  const clipId = useId()

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M6.24999 9.99996L8.74999 12.5L13.75 7.49996M18.3333 9.99996C18.3333 14.6023 14.6024 18.3333 9.99999 18.3333C5.39762 18.3333 1.66666 14.6023 1.66666 9.99996C1.66666 5.39759 5.39762 1.66663 9.99999 1.66663C14.6024 1.66663 18.3333 5.39759 18.3333 9.99996Z"
          stroke="#F9F7F3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
