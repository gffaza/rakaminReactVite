// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx';
import Menubar from './components/Menubar.jsx';


export default function App() {
  return (
    <>

      <div className='bg-gray-100 min-h-screen'>
        <Navbar />
        <Menubar/>

      </div>

    </>
  )
}


