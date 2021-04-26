import React from 'react'
import CodeDemo from '../CodeDemo'


export default function Navbars() {
    
    const navbarLeftCode = 
    `<nav class="displayFlex justifyBetween itemsCenter bgRose1 rounded pt2 pb2 pl4 pr4" id="navbar_example1">
        <div class="displayFlex itemsCenter">
            <a href="#" class="h12 w12 p1 mr4">
                <img src="https://www.pngitem.com/pimgs/m/359-3592112_icons-mint-linux-mint-start-menu-icons-hd.png" alt="" class="wFull">
            </a>

            <ul class="displayFlex">
                <li class="listNoStyle p1">
                    <a href="" class="textBlue5 hover:textBlue6">Home</a>
                </li>
                <li class="listNoStyle p1 ml1">
                    <a href="" class="textBlue5 hover:textBlue6">About</a>
                </li>
                <li class="listNoStyle p1 ml1">
                    <a href="" class="textBlue5 hover:textBlue6">Contact</a>
                </li>
                <li class="listNoStyle p1 ml1">
                    <a href="" class="textBlue5 hover:textBlue6">Blog</a>
                </li>
            </ul>
        </div>
        <div class="displayFlex">
            <button class="textSm textBlue5 border borderBlue3 rounded mr2 p2">Login</button>
            <button class="textSm textWhite bgBlue5 rounded border borderBlue3 p2">Signup</button>
        </div>
    </nav>`;
    
    const navbarCenterCode = 
    `<nav class="displayFlex justifyBetween itemsCenter bgRose1 rounded pt2 pb2 pl4 pr4" id="navbar_example2">
        <a href="#" class="h12 w12 p1">
            <img src="https://www.pngitem.com/pimgs/m/359-3592112_icons-mint-linux-mint-start-menu-icons-hd.png" alt="Logo" class="wFull">
        </a>

        <ul class="displayFlex">
            <li class="listNoStyle p1">
                <a href="" class="textBlue5 hover:textBlue6">Home</a>
            </li>
            <li class="listNoStyle p1 ml1">
                <a href="" class="textBlue5 hover:textBlue6">About</a>
            </li>
            <li class="listNoStyle p1 ml1">
                <a href="" class="textBlue5 hover:textBlue6">Contact</a>
            </li>
            <li class="listNoStyle p1 ml1">
                <a href="" class="textBlue5 hover:textBlue6">Blog</a>
            </li>
        </ul>
        <div class="displayFlex">
            <button class="textSm textBlue5 border borderBlue3 rounded mr2 p2">Login</button>
            <button class="textSm textWhite bgBlue5 rounded border borderBlue3 p2">Signup</button>
        </div>
    </nav>`;

    const navbarRightCode =
    `<nav class="displayFlex justifyBetween itemsCenter bgRose1 rounded pt2 pb2 pl4 pr4" id="navbar_example3">
        <a href="#" class="h12 w12 p1 mr4">
            <img src="https://www.pngitem.com/pimgs/m/359-3592112_icons-mint-linux-mint-start-menu-icons-hd.png" alt="" class="wFull">
        </a>
        <div class="displayFlex itemsCenter">
            <ul class="displayFlex">
                <li class="listNoStyle p1">
                    <a href="" class="textBlue5 hover:textBlue6">Home</a>
                </li>
                <li class="listNoStyle p1 ml1">
                    <a href="" class="textBlue5 hover:textBlue6">About</a>
                </li>
                <li class="listNoStyle p1 ml1">
                    <a href="" class="textBlue5 hover:textBlue6">Contact</a>
                </li>
                <li class="listNoStyle p1 ml1">
                    <a href="" class="textBlue5 hover:textBlue6">Blog</a>
                </li>
            </ul>

            <div class="displayFlex ml8">
                <button class="textSm textBlue5 border borderBlue3 rounded mr2 p2">Login</button>
                <button class="textSm textWhite bgBlue5 rounded border borderBlue3 p2">Signup</button>
            </div>
        </div>
        
    </nav>`;

    return (
        <div className="p4 md:pl8 md:pr8">
            <div className=" textGray4">
                <h2 className="textXl textGray5 mb2">Navbars</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb8">
                    Navbars usually have a logo which also acts as a link to homepage, a group of other navigation links and sometimes a button or two.
                </p>
            </div>

            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Navbar v1</h4>
                {/* <p className="mb4">To make an image responsive give it a class <span className="bgGray1 p1">wFull</span>, so that it will take full width of parent.</p> */}
                <CodeDemo code={navbarLeftCode} codeTitle={'Navbar with links on left'} codeActions={true}/>
            </div>
            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Navbar v2</h4>
                {/* <p className="">To turn images into a circle, you need image of equal height and width. Give it a class <span className="bgGray1 p1">roundedFull</span></p> */}
                <CodeDemo code={navbarCenterCode} codeTitle={'Navbar with centered links'} codeActions={true}/>
            </div>

            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Navbar v3</h4>
                {/* <p className="">To turn images into a circle, you need image of equal height and width. Give it a class <span className="bgGray1 p1">roundedFull</span></p> */}
                <CodeDemo code={navbarRightCode} codeTitle={'Navbar with links on right'} codeActions={true}/>
            </div>
            
        </div>
    )
}
