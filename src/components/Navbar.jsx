import React from 'react'

export default function Navbar() {
    return (
        <nav className="app-navbar pl4 pr4 md:pl8 md:pr8 pt3 pb3 bgGray6 textGray1">
            <div className=" displayFlex justifyBetween itemsCenter">
                <a href="/" className="navbar-brand textTeal2 hover:textTeal4 textMd fontSemiBold h12 w12 p1 mr4">
                    {/* <img src="https://www.pngitem.com/pimgs/m/359-3592112_icons-mint-linux-mint-start-menu-icons-hd.png" className="" alt="Mint Logo"/>  */}
                    Mint
                </a>

                <ul className="nav-links displayFlex itemsCenter">
                    <li className="textMd fontSemiBold textGray4 listNoStyle p2 mr4">
                        v 0.1.0
                    </li>
                    <li className="textMd fontSemiBold textGray4 listNoStyle p2 mr4">
                        <a href="https://github.com/akshay-rajput" className="">
                            <i className="fab fa-github-alt textTeal2 hover:textTeal4"></i>
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
