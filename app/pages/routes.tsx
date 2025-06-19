import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import { About } from './About'
import { Layout } from './Layout'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
