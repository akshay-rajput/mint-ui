import React from 'react'
import CodeDemo from '../CodeDemo'

export default function Cards() {
    
    const textCardCode = 
    `<div class="displayGrid md:gridCols3 mb4">

        <!-- card below -->
        <div class="bgWhite textGray5 border borderGray2 rounded shadowMdGray2 p4">
            <small class="textXs textGray4 p1 rounded bgBlue1">Word of the day</small>
            <h3 class="fontSemiBold textLg mt2 mb2">Serendipity</h3>
            <small class="textGray4">
                <span class="mr2">ser•en•dip•i•ty</span>
                <span class="">/sɛr(ə)nˈdɪpɪti/</span>
            </small>
            <p class="textSm mt2 mb2">
                the occurrence and development of events by chance in a happy or beneficial way. <br>
                <em>"a fortunate stroke of serendipity"</em>
            </p>
            <div class="textXs textGray4 mb4">
                Synonyms: <span class="textSm textBlue4">happy chance, fortuity, providence, fluke, luck</span>
            </div>
            <div class="">
                <a href="javascript:void(0);" class="textBlue5 hover:textBlue4 textSm fontBold">LEARN MORE <i class="fas fa-angle-right"></i></a>
            </div>
        </div>
    
    </div>
    `;
    
    const imageCardCode = 
    `<div class="displayGrid md:gridCols2 mb4">
        
        <!-- actual card below -->
        <div class="bgWhite textGray5 border borderGray3 rounded shadowSmGray2">
            <div class="user-info displayFlex p2 itemsCenter">
                <img src="https://ih1.redbubble.net/image.1020791592.6662/st,small,507x507-pad,600x600,f8f8f8.jpg" class="w12 h12 roundedFull border borderGray3" alt="User Image">
                <div class="ml2 p1">
                    <strong class="displayBlock textSm">Michael Scott</strong>
                    <small class="textGray4">Regional Manager</small>
                </div>
            </div>
            <div class="user-post bgGray1 p2">
                <img src="https://i.imgflip.com/4o8b9b.jpg" alt="user post image" class="wFull">
            </div>
            <div class="user-actions displayFlex justifyBetween itemsCenter p2">
                <div>
                    <i class="fas fa-heart textRed4 textMd mr2"></i>
                    <i class="far fa-comment textGray4 textMd mr2"></i>
                    <i class="fas fa-share textGray4 textMd"></i>
                </div>
                <i class="fas fa-ellipsis-v textGray4 textMd"></i>
            </div>
        </div>

    </div>
    `;

    const horizontalCardCode = 
    `<div class="displayGrid md:gridCols2 mb4">
        <div class="displayGrid gridCols6 bgWhite textGray5 border borderGray3 rounded shadowSmGray2">
            <img class="gridColSpan2 wFull" src="https://edmfull.com/wp-content/uploads/2018/11/UzxoOgzXAhw.jpg" alt="User Image">
            <div class="user-info gridColSpan4 displayFlex flexCol p1">
                <div class="p1 flexGrow">
                    <strong class="displayBlock textSm mb1">Summerlove</strong>
                    <small class="displayBlock textGray4 mb1">
                        <i class="fas fa-user-astronaut textXs"></i>
                        Rudimental ft. Rita Ora
                    </small>
                    <small class="displayBlock textGray4 mb1">
                        <i class="fas fa-record-vinyl textXs"></i> A toast to our differences
                    </small>
                </div>
                <div class="pt2 pb2 pr2 textRight">
                    <button class="bgPurple5 hover:bgPurple6 border borderPurple5 textGray1 p2 roundedFull">
                        <i class="fas fa-play ml1"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>`;

    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="inputSection textGray4">
                <h2 className="textXl textGray5 mb2">Cards</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb8">
                    Cards are widely used on the web. Chances are you'll need at least two variants - vertical and horizontal card in your site.
                </p>
            </div>

            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Text only card</h4>
                {/* <p className="mb4">Wrap your input and label insida a parent div and give it a class of <span className="bgGray1 p1">displayFlex</span> & <span className="bgGray1 p1">flexCol</span>. This will stack the child elements vertically.</p> */}
                <CodeDemo code={textCardCode} codeTitle={'Text only card with link'} codeActions={true}/>
            </div>
            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Card with image</h4>
                {/* <p className="">To turn images into a circle, you need image of equal height and width. Give it a class <span className="bgGray1 p1">roundedFull</span></p> */}
                <CodeDemo code={imageCardCode} codeTitle={'Card with image and buttons'} codeActions={true}/>
            </div>

            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Horizontal Card</h4>
                {/* <p className="">To turn images into a circle, you need image of equal height and width. Give it a class <span className="bgGray1 p1">roundedFull</span></p> */}
                <CodeDemo code={horizontalCardCode} codeTitle={'Horizontal card'} codeActions={true}/>
            </div>
            
        </div>
    )
}
