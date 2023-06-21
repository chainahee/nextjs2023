"use client"
import Link from 'next/link'
import React from 'react'

function Navbar() {

const navigation = [
  {id: 1, name:"Dashboard", rout: "/"},
  {id: 2, name:"Device", rout: "/device"},
  {id: 3, name:"Employee", rout: "/employee"},
  {id: 4, name:"About", rout: "/about"},
  {id: 5, name:"Settings", rout: "/settings"},
]

  return (
    <div className='flex justify-between h-24 items-center'>
      <Link href="/" className='text-xl font-bold'>Borrow & Return System</Link>
      <div className="flex items-center gap-3">
        {navigation.map((item) => (
          <Link key={item.id} href={item.rout}>
            {item.name}
          </Link>
        ))}
        <button className='p-2 bg-purple-400 text-white cursor-pointer rounded-md' onClick={() => {
          console.log("Logged out")
        }}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar