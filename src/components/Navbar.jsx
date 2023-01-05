import React from 'react'
import {BsCart} from 'react-icons/bs'
import {Link, Outlet} from 'react-router-dom';

function Navbar() {
    const links = [
        {
            id:1,
            title: "Home",
            link: '/Home'
        },
        {
            id:2,
            title: "Products",
            link: '/Products'
        },
        {
            id:3,
            title: "About",
            link: '/About'
        },
        {
            id:4,
            title: "Contact",
            link: '/Contact'
        }
    ]

  return (
    <div>
    <div className="bg-[#e3dfe7e8] fixed z-20 top-0 left-0 w-full">
        <nav className="flex flex-row justify-between w-full h-16">
            <div className="py-4 px-6">
            <Link to="/"><h2 className="text-2xl font-semibold cursor-pointer">Olosko Mall</h2></Link>
            </div>
            <div className="">
                <ul className="text-lg flex flex-row justify-evenly gap-10 py-4 font-semibold">
                    {
                        links.map(({id,title,link}) => (
                            <Link to={link} key={id} className="cursor-pointer">{title}</Link>
                        ))
                    }
                </ul>
            </div>
            <div className="flex flex-row gap-5 justify-evenly py-4 px-6 font-semibold">
                <button className="">Login</button>
                <button className="">Register</button>
                <button className="flex flex-row justify-between gap-2 mt-1"> <span><BsCart className="pt-1" size={20}/></span>Cart (0) </button>
            </div>
        </nav>
    </div>
    <Outlet/>

    </div>
  )
}

export default Navbar