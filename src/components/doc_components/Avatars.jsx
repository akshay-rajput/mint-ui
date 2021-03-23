import React from 'react'
import CodeDemo from '../CodeDemo'


export default function Avatars() {
    
    const avatarCode = 
    `<div class="displayGrid gridCols2 md:gridCols4 gridGap8 itemsCenter mb4">
        
        <!-- avatar 01 image only -->
        <img src="https://avatars.dicebear.com/api/bottts/x3.svg" class="h20 w20 roundedFull border borderGray4 mr4 p2" alt="">
        
        <!-- avatar 02 using Text -->
        <div class="h20 w20 roundedFull bgPurple5 textLg border borderGray2 displayFlex justifyCenter itemsCenter mr4">AR</div>
        
        <!-- avatar 03 image inside anchor tag -->
        <a href="" class="h20 w20 roundedFull bgBlue4 mr4">
            <img class="wFull roundedFull border borderGray2" src="https://static.wikia.nocookie.net/amazing-movietv-kisses/images/4/45/Stark.jpg" alt="avatar image">
        </a>

        <!-- avatar 04 -->
        <div class="w20 h20">
            <img src="https://avatars.dicebear.com/api/bottts/x34.svg" class="wFull border borderGray2 p2" alt="">
        </div>

    </div>`;
    
    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="avatarSection textGray4">
                <h2 className="textXl textGray5 mb4">Avatars</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    An avatar acts as a proxy for a user or entity (such as a project, repository, or space), in a product. They're often combined with status or presence indicators to give more context. Users generally upload their own image, otherwise, a default image is displayed.
                </p>
            </div>

            <CodeDemo code={avatarCode} codeTitle={'Avatar examples'} codeActions={true}/>
            
            <p className="note p2 border borderBlue3 bgBlue1 textBlue6 rounded lineHeightMd mt8 mb4">
                <i className="far fa-lightbulb textSm mr1"></i>
                <strong>Tip: </strong> These are just guidelines for avatar, if you wish you can change the size, shape, colors of your avatar using the wide range of utility classes provided.
            </p>
            
            <p className="note p2 border borderOrange3 bgOrange1 textOrange6 rounded lineHeightMd mt8 mb4">
                <i className="fas fa-exclamation-circle textSm mr1"></i>
                <strong>Note: </strong> For round avatars, make sure your image has equal dimensions i.e. it should be a square image to be displayed as proper circle. If height and width of image is different it will look more like an ellipse instead of a circle.
            </p>
            
        </div>
    )
}
