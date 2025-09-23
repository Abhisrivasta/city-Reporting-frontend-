import { Route, Routes } from 'react-router'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Layout from './layout/Layout'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
    </Routes>
    </>
  )
}

export default App
