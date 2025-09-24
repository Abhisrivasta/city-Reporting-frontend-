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
      <footer className='fixed inset-x-0 bottom-0'>
      <Footer/>
      </footer>
    </>
  )
}

export default Layout
