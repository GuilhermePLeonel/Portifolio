import React from 'react'
// import { useNavigate } from 'react-router-dom';
import './styles/NavBar.css'

function NavBar() {
    // const handleClick = (event) => {
    //     console.log(event.target.href)
    // }
    return (
        <nav className="navBar">
            <div className="container">
                <a
                    className="link"
                    style={{ paddingLeft: 13, textDecoration: 'none' }}
                    href="#infos"
                >
                    SOBRE
                </a>
                <a
                    className="link"
                    style={{ paddingLeft: 13, textDecoration: 'none' }}
                    href="#projects"
                >
                    PROJETOS
                </a>
                <a
                    className="link"
                    style={{ paddingLeft: 13, textDecoration: 'none' }}
                    href="#stacks"
                >
                    STACKS
                </a>
                <a
                    className="link"
                    style={{ paddingLeft: 13, textDecoration: 'none' }}
                    href="#conexoes"
                >
                    CONEXÕES
                </a>
            </div>
        </nav>
    )
}

export default NavBar
