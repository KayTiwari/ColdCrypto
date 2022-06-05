import { Navbar, Welcome, Loader, Services, Transactions, Footer } from './components';
import { useState } from 'react'
import "tailwindcss/tailwind.css"

const App = () => {

  return (
    <div className="min-h-screen">
     <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
     </div>
     <Services />
     <Transactions />
     <Footer />
    </div>
  )
}

export default App
