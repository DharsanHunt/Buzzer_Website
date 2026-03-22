import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import BuzzerPage from './pages/BuzzerPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/buzzer" element={<BuzzerPage />} />
    </Routes>
  )
}

export default App
