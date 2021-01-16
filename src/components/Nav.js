import React from 'react'

function Nav() {
    return (
        <nav className='flex justify-between h-32 shadow items-center'>
            <a href="/" className="pl-8 font-extrabold">chibli gallery.</a>
            <div className="px-4 md:hidden cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <div className="pr-8 md:block hidden">
                <a href="#" className="p-4">Home</a>
                <a href="#about" className="p-4">About</a>
                <a href="#gallery" className="p-4">Images</a>
                <a href="#contact" className="p-4">Contact</a>
            </div>
        </nav>
    )
}

export default Nav
