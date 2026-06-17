import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Soluciones from './pages/Soluciones'
import TheLab from './pages/TheLab'
import Nosotros from './pages/Nosotros'
import Blog from './pages/Blog'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="soluciones" element={<Soluciones />} />
          <Route path="the-lab" element={<TheLab />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
