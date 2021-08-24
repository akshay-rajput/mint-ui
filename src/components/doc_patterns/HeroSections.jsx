import React from 'react'
import CodeDemo from '../CodeDemo'

export default function HeroSections() {
    
    const heroSectionForm = 
    `<header class="bgGreen1 textGray5 rounded p2">
        <nav class="displayFlex flexWrap itemsCenter justifyBetween rounded pt2 pb2 pl4 pr4">
            <div class="displayFlex itemsCenter">
                <a href="#" class="h12 w12 p1 mr4">
                    <img src="https://www.pngitem.com/pimgs/m/359-3592112_icons-mint-linux-mint-start-menu-icons-hd.png" alt="" class="wFull">
                </a>
                <!-- other links -->
                <div class="displayFlex itemsCenter">
                    <ul class="displayFlex">
                        <li class="listNoStyle p1">
                            <a href="" class="textGreen5 hover:textGreen4">Home</a>
                        </li>
                        <li class="listNoStyle p1 ml2">
                            <a href="" class="textGreen5 hover:textGreen4">About</a>
                        </li>
                        <li class="listNoStyle p1 ml2">
                            <a href="" class="textGreen5 hover:textGreen4">Documentation</a>
                        </li>
                        <li class="listNoStyle p1 ml2">
                            <a href="" class="textGreen5 hover:textGreen4">Blog</a>
                        </li>
                    </ul>

                </div>
            </div>
            <button class="bgTeal2 rounded p2 pr8 pl8 textSm textTeal6">Login</button>
        </nav>
        <hr class="border borderTeal2">
        <div class="displayGrid md:gridCols8 gridGap4 itemsCenter mt4 mb4 pl4 pr4">
            <!-- text on left -->
            <div class="hero-text gridColSpan4 pt6 pb6">
                <span class="p1 pl2 pr2 textTeal5 roundedPill bgTeal2">Currently in beta!</span>
                <h1 class="textGray5 textXl fontExtraBold mt2 mb2">
                    Disrupting the gaming ecosystem, level at a time.
                </h1>
                <p class="textGray4 textRg mb8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dolores sint nulla accusamus, repellendus perferendis commodi!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </p>
                
            </div>

            <!-- empty div that takes space 1fr -->
            <div class=""></div>

            <!-- div with form -->
            <div class="hero-form gridColSpan3 rounded p4">
                <h3 class="textMd mb4 mt4 textGray4">Signup</h3>
                <div class="form-grid">
                    <div class="displayGrid gridCols2 gridGap4">
                        <div class="form-group displayFlex flexCol mt3 mb3">
                            <label for="" class="textXs textGray4 mb1">First Name</label>
                            <input type="text" name="" id="" placeholder="Your first name" class="p2 rounded border borderGray3">
                        </div>
                        <div class="form-group displayFlex flexCol mt3 mb3">
                            <label for="" class="textXs textGray4 mb1">Last Name</label>
                            <input type="text" name="" id="" placeholder="Your last name" class="p2 rounded border borderGray3">
                        </div>
                    </div>

                    <div class="form-group displayFlex flexCol mt3 mb3">
                        <label for="" class="textXs textGray4 mr1">Email</label>
                        <input type="email" name="" id="" placeholder="abc@company.com" class=" p2 rounded border borderGray3">
                    </div>
                
                    <div class="form-group displayFlex flexCol mt3 mb3">
                        <label for="" class="textXs textGray4 mb1">Password</label>
                        <input type="password" name="" id="" placeholder="Enter password" class="p2 rounded border borderGray3">
                    </div>

                    <div class="displayGrid gridCols8 gridGap4">
                        <div class="form-group gridColSpan3 displayFlex flexCol mt3 mb3">
                            <label for="" class="textXs textGray4 mb1">Username</label>
                            <input type="text" name="" id="" placeholder="Pick a Username" class="p2 rounded border borderGray3">
                        </div>
                        <div class="form-group gridColSpan3 displayFlex flexCol mt3 mb3">
                            <label for="" class="textXs textGray4 mb1">Country</label>
                            <select name="" id="" class="p2 rounded border borderGray3">
                                <option value="">India</option>
                                <option value="">USA</option>
                                <option value="">Canada</option>
                            </select>
                        </div>
                        <div class="form-group gridColSpan2 displayFlex flexCol mt3 mb3">
                            <label for="" class="textXs textGray4 mb1">Age</label>
                            <select name="" id="" class="p2 rounded border borderGray3">
                                <option value="">18</option>
                                <option value="">18</option>
                                <option value="">18</option>
                            </select>
                        </div>
                    </div>

                    <div class="mt8 mb4 textRight">
                        <button class="textTeal5 border borderTeal4 rounded textCenter pt2 pb2 pl4 pr4 mr4">
                            <i class="fas fa-sync"></i>&nbsp; Reset
                        </button>
                        <button class="textWhite bgTeal5 hover:bgTeal6 border borderBlue4 rounded textCenter pt2 pb2 pl4 pr4">
                            <i class="fas fa-save"></i>&nbsp; Signup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>`;
    
    const heroSectionImage = 
    `<header class="bgGreen1 textGray5 rounded p2">
        <nav class="navResponsive navResponsiveLight displayFlex justifyBetween itemsCenter rounded pt2 pb2 pl4 pr4">
            <a href="#" class="h12 w12 p1 mr4">
                <img src="https://www.pngitem.com/pimgs/m/359-3592112_icons-mint-linux-mint-start-menu-icons-hd.png" alt="" class="wFull">
            </a>

            <input type="checkbox" id="menuToggleCheckbox" class="menuToggleCheckbox">
            <label for="menuToggleCheckbox" id="menuToggleButton" class="menuToggleIcon">
                <i class="fas fa-bars textLg"></i>
            </label>

            <!-- other links -->
            <ul class="displayFlex flexWrap itemsCenter navResponsiveLinks">
                <li class="listNoStyle navResponsiveLink p1">
                    <a href="" class="textLg md:textRg textGreen5 hover:textGreen4">Home</a>
                </li>
                <li class="listNoStyle navResponsiveLink p1 ml2">
                    <a href="" class="textLg md:textRg textGreen5 hover:textGreen4">About</a>
                </li>
                <li class="listNoStyle navResponsiveLink p1 ml2">
                    <a href="" class="textLg md:textRg textGreen5 hover:textGreen4">Documentation</a>
                </li>
                <li class="listNoStyle navResponsiveLink p1 ml2">
                    <a href="" class="textLg md:textRg textGreen5 hover:textGreen4">Blog</a>
                </li>
                
            </ul>

        </nav>
        <div class="displayGrid md:gridCols2 gridGap4 itemsCenter mt4 mb4 pl4 pr4">
            <!-- text on left -->
            <div class="hero-text pt6 pb6">
                <span class="p1 pl2 pr2 textTeal5 roundedPill bgTeal2">Currently in beta!</span>
                <h1 class="textGray5 textXl fontExtraBold mt2 mb2">
                    Disrupting the gaming ecosystem, level at a time.
                </h1>
                <p class="textGray4 textRg mb8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dolores sint nulla accusamus, repellendus perferendis commodi!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </p>
                <div class="inline-form displayFlex flexWrap itemsCenter mb2">
                    <!-- <label for="" class="textXs textGray4 mr1">Email</label> -->
                    <input type="email" name="" id="" placeholder="Subscribe to enter the program" class="flexGrow textRg p3 rounded border borderGray3">
                    <button class="textWhite bgTeal4 hover:bgTeal6 borderNone rounded textRg textCenter p3 ml2">Subscribe</button>
                </div>
            </div>
            <!-- illustration -->
            <div class="hero-image p8">
                <img src="./game.png" alt="hero image" class="wFull">
            </div>
        </div>
    </header>
    `;

    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="inputSection textGray4">
                <h2 className="textXl textGray5 mb2">Hero Sections</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb8">
                    {/* Cards are widely used on the web. Chances are you'll need at least two variants - vertical and horizontal card in your site. */}
                </p>
            </div>

            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Hero section with image</h4>
                {/* <p className="mb4">Wrap your input and label insida a parent div and give it a class of <span className="bgGray1 p1">displayFlex</span> & <span className="bgGray1 p1">flexCol</span>. This will stack the child elements vertically.</p> */}
                <CodeDemo code={heroSectionImage} codeTitle={'Hero Section with image'} codeActions={true}/>
            </div>
            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Hero section with form</h4>
                {/* <p className="">To turn images into a circle, you need image of equal height and width. Give it a class <span className="bgGray1 p1">roundedFull</span></p> */}
                <CodeDemo code={heroSectionForm} codeTitle={'Hero section with form'} codeActions={true}/>
            </div>
            
        </div>
    )
}
