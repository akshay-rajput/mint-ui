import React from 'react'
import CodeDemo from '../CodeDemo'


export default function Buttons() {
    
    const primaryBtn = 
    `<button class="textWhite bgBlue4 border borderBlue4 hover:bgBlue5 rounded pl4 pr4 pt2 pb2">Primary Button</button>`;

    const dangerBtn =
    `<button class="textWhite bgRed4 border borderRed4 hover:bgRed5 rounded pl4 pr4 pt2 pb2">Danger Button</button>`
    
    const successBtn = 
    `<button class="textWhite bgGreen4 border borderGreen4 hover:bgGreen5 rounded pl4 pr4 pt2 pb2">Success Button</button>`
    
    const warningBtn =
    `<button class="textGray6 bgYellow3 border borderYellow3 hover:bgYellow4 hover:textWhite rounded pl4 pr4 pt2 pb2">Warning Button</button>`
    
    const borderBtn = 
    `<button class="textBlue5 bgTransparent border borderBlue5 hover:bgBlue5 hover:textWhite rounded pl4 pr4 pt2 pb2">Border only Button</button>`
    
    const iconBtn =
    `<button class="textWhite bgPurple4 border borderPurple5 hover:bgPurple5 rounded pl4 pr4 pt2 pb2">
        <i class="fas fa-download"></i> Icon Button
    </button>`
    
    const otherBtn = 
    `<div class="displayGrid gridCols1 md:gridCols3 gridGap8 mb4">
        <div class="mb2">
            
            <!-- Floating button -->
            <button class="bgTeal5 border borderGreen4 hover:bgTeal6 roundedFull displayFlex justifyCenter itemsCenter p2">
                <i class="fas fa-plus textGreen1 textSm"></i>
            </button>
        
        </div>

        <div className="mb2">
            
            <!-- Small button -->
            <button class="textXs textGray6 bgGray2 border borderGray3 hover:bgGray3 rounded pl2 pr2 pt1 pb1">Small Button</button>
        
        </div>

        <div class="mb2">
        
            <!-- Block button -->
            <button class="displayBlock wFull pt2 pb2 textWhite bgPurple4 border borderPurple6 hover:bgPurple5 rounded">Block Button</button>
        
        </div>
    </div>`;

    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="alertSection textGray4">
                <h2 className="textXl textGray5 mb2">Buttons</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb8">
                    A button triggers an event or action. They let users know what will happen next. They’re commonly used as part of larger components or patterns such as forms or modal dialogs.
                </p>
            </div>

            <div className="">
                {/* <h4 className="mb1 fontSemiBold">Buttons</h4> */}
                <p className="mb8">
                    Buttons
                    <ul className="pl6 textGray4">
                        <li className="">
                            move users through a sequence of screens
                        </li>
                        <li className="">
                            act as calls to action (CTAs)
                        </li>
                        <li className="">
                            with an icon to convey meaning quicker
                        </li>
                        <li className="">
                            with a badge indicate a value
                        </li>
                    </ul>
                </p>
                
            </div>
            
            <div className="mb8">
                <CodeDemo code={primaryBtn} codeTitle={'Primary Button'} codeActions={true}/>
            </div>
            <div className="mb8">
                <CodeDemo code={dangerBtn} codeTitle={'Danger Button'} codeActions={true}/>
            </div>
            <div className="mb8">
                <CodeDemo code={successBtn} codeTitle={'Success Button'} codeActions={true}/>
            </div>
            <div className="mb8">
                <CodeDemo code={warningBtn} codeTitle={'Warning Button'} codeActions={true}/>
            </div>
            <div className="mb8">
                <CodeDemo code={borderBtn} codeTitle={'Border only button'} codeActions={true}/>
            </div>
            <div className="mb8">
                <CodeDemo code={iconBtn} codeTitle={'Icon in button'} codeActions={true}/>
            </div>
            <div className="mb8">
                <CodeDemo code={otherBtn} codeTitle={'Other buttons'} codeActions={true}/>
            </div>
        </div>
    )
}
