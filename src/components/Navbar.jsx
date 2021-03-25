import React from 'react'

export default function Navbar() {
    return (
        <nav className="app-navbar pl4 pr4 md:pl8 md:pr8 pt3 pb3 bgGray5 textWhite">
            <div className=" displayFlex justifyBetween itemsCenter">
                <a href="/" className="navbar-brand textGreen3 hover:textGreen5 textMd displayFlex itemsCenter fontSemiBold p1 mr4">
                    <img src="./mint.png" className="w8" alt="Mint Logo"/> 
                    <span className="ml1">Mint</span>
                </a>

                <ul className="nav-links displayFlex itemsCenter">
                    <li className="textMd fontSemiBold textTeal4 listNoStyle p2 mr4">
                        v 0.1.0
                    </li>
                    <li className="fontSemiBold textTeal4 listNoStyle p2 mr4">
                        <a href="https://github.com/akshay-rajput" className="">
                            <i className="fab fa-github-alt textTeal4 textLg hover:textTeal2"></i>
                        </a>
                    </li>
                    {/* <li className="textMd fontSemiBold textGray4 listNoStyle p2">
                        <button className="p1 roundedPill bgTeal2 hover:bgTeal4 borderNone">
                            <i className="fas fa-moon"></i>
                        </button>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}
