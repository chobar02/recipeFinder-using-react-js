import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='mt-10 py-20 text-textColor bg-bgColor flex justify-between'>
            <div className="overall flex flex-col md:flex-row gap-5 items-center justify-between w-4/5 mx-auto">
            <div className="navfooter">
                    <ul className='flex flex-col'>
                        <li className='list-none'>
                            <Link to="/" className='text-textColor no-underline hover:underline'>
                                Home
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link to="/about" className='text-textColor no-underline hover:underline'>
                                About
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link to="/category" className="text-textColor no-underline hover:underline">
                                Categories
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footmiddle flex gap-3">
                    <div className='flex flex-col'>
                        <span className='hover:underline cursor-pointer'>Terms of Use</span>
                        <span className='hover:underline cursor-pointer'>Queries</span>
                        <span className='hover:underline cursor-pointer'>Info</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='hover:underline cursor-pointer'>Support</span>
                        <span className='hover:underline cursor-pointer'>Privacy Policy</span>
                        <span className='hover:underline cursor-pointer'>Contact Us</span>
                    </div>

                </div>
                
                <div className='flex flex-col'>
                    <span>All Rights Reserved</span>
                    <span>©️Copyright</span>
                    <span>recipeFinder.com</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
