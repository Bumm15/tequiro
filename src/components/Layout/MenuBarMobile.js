import React from 'react'
import { FiMenu as Icon } from 'react-icons/fi'

import logo from '../Register/ot.webp'

export default function MenuBarMobile({ setter }) {
    return (
        <nav className="md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] bg-menuBar flex [&>*]:my-auto px-2">
            <button
                className="text-4xl flex text-white"
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
            >
                <Icon />
            </button>
            <a href="/" className="mx-auto">
                {/*eslint-disable-next-line*/}
                <img
                    src={logo}
                    alt="Otík"
                    width={50}
                    height={50}
                />
            </a>

        </nav>
    )
}