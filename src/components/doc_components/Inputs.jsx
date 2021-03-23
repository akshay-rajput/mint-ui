import React from 'react'
import CodeDemo from '../CodeDemo'


export default function Inputs() {
    
    const inputCode = 
    `<div class="displayGrid gridCols1 md:gridCols3 mb4">
        <div class="displayFlex flexCol">
            <label for="" class="textXs textGray4 mb1">Email *</label>
            <input type="email" name="" id="" placeholder="schruteFarms" class="textSm border borderRed3 rounded wFull p2">
            <small class="textXs mt1 mb1 textRed4">Please enter a valid email id.</small>
        </div>
     </div>`;
    
    const textareaCode = 
    `<div class="displayGrid md:gridCols3 mb4">
        <div class="displayFlex flexCol">
            <label for="" class="textXs textGray4 mb1">Textarea</label>
            <textarea name="" id="" rows="3" placeholder="Enter your message here... " class="textRg border borderGray3 rounded wFull p2"></textarea>
        </div>
    </div>
    `;

    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="inputSection textGray4">
                <h2 className="textXl textGray5 mb2">Inputs</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb8">
                    Input elements are used in Forms. Depending on type of input, the ability to style it varies. You should always use a label for your input elements for accessibility reasons.
                </p>
            </div>

            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Input element</h4>
                <p className="mb4">Wrap your input and label insida a parent div and give it a class of <span className="bgGray1 p1">displayFlex</span> & <span className="bgGray1 p1">flexCol</span>. This will stack the child elements vertically.</p>
                <CodeDemo code={inputCode} codeTitle={'Input element with error state'} codeActions={true}/>
            </div>
            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Textarea element</h4>
                {/* <p className="">To turn images into a circle, you need image of equal height and width. Give it a class <span className="bgGray1 p1">roundedFull</span></p> */}
                <CodeDemo code={textareaCode} codeTitle={'Textarea element'} codeActions={true}/>
            </div>
            
        </div>
    )
}
