import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <header>
        <Navbar user={undefined}/>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default Layout
