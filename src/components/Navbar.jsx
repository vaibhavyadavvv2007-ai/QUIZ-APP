import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quiz App</h1>
        <ul className="flex space-x-4">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar
