import React from 'react'
import CodeDemo from '../CodeDemo'


export default function Alerts() {
    
    const badgeCode = 
    ` <div class="badges-list displayGrid gridCols2 md:gridCols4 mb8">

        <div class="mb4 p2 displayFlex flexCol itemsCenter justifyCenter">
            <label class="textXs mb2">Badge Round</label>

            <!-- Badge Round -->
            <span class="textSm roundedPill bgGray2 textGray6 pl2 pr2 pt1 pb1">18</span>                

        </div>

        <div class="mb4 p2 displayFlex flexCol itemsCenter justifyCenter">
            <label class="textXs mb2">Badge Positive Action</label>

            <!-- Badge positive -->
            <span class="textSm roundedPill bgGreen2 textGreen6 pt1 pb1 pl2 pr2">+8 changes</span>                
        
        </div>

        <div class="mb4 p2 displayFlex flexCol itemsCenter justifyCenter">
            <label class="textXs mb2">Badge Negative Action</label>

            <!-- Badge Negative -->
            <span class="textSm roundedPill bgRed2 textRed6 pt1 pb1 pl2 pr2">-12 changes</span>                
        </div>

        <div class="mb4 p2 displayFlex flexCol itemsCenter justifyCenter">
            <label class="textXs mb2">Badge with icon</label>
            
            <!-- Badge with icon -->
            <span class="textSm bgBlue2 textBlue6 pt1 pb1 pl2 pr2 roundedPill">
                <i class="fas fa-tags textXs textBlue4"></i> css, javascript, html
            </span>
        </div>

        <div class="mb4 p2 displayFlex flexCol itemsCenter justifyCenter">
            <label class="textXs mb2">Badge Indicator</label>

            <!-- Badge Indicator -->
            <span class="displayFlex justifyCenter itemsCenter textSm roundedPill bgGreen3 h6 w6">
                <span class="roundedPill bgGreen4 h4 w4"></span>
            </span>
        </div>
    </div>`;

    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="alertSection textGray4">
                <h2 className="textXl textGray5 mb2">Badges</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb8">
                    A badge is a visual indicator for numeric values such as tallies and scores.
                </p>
            </div>

            <CodeDemo code={badgeCode} codeTitle={'Badge examples'} codeActions={true}/>
            
        </div>
    )
}
