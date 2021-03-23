import React from 'react'
import CodeDemo from '../CodeDemo'

export default function Introduction() {

    const importCss = `<link rel="stylesheet" href="https://mint-css.netlify.app/styles/mint.css">`;
    // const h2 = 
    // `<div class="mb8">
    //     <div class="bgWhite textGray5 border borderGray2 rounded shadowMdGray2 p4">
    //         <small class="textXs textGray4 p1 rounded bgBlue1">Word of the day</small>
    //         <h3 class="fontSemiBold textLg mt2 mb2">Serendipity</h3>
    //         <small class="textGray4">
    //             <span class="mr2">ser•en•dip•i•ty</span>
    //             <span class="">/sɛr(ə)nˈdɪpɪti/</span>
    //         </small>
    //         <p class="textSm mt2 mb2">
    //             the occurrence and development of events by chance in a happy or beneficial way. <br>
    //             <em>"a fortunate stroke of serendipity"</em>
    //         </p>
    //         <div class="textXs textGray4 mb4">
    //             Synonyms: <span class="textSm textBlue4">happy chance, fortuity, providence, fluke, luck</span>
    //         </div>
    //         <div class="">
    //             <a href="javascript:void(0);" class="textBlue5 hover:textBlue4 textSm fontBold">LEARN MORE <i class="fas fa-angle-right"></i></a>
    //         </div>
    //     </div>
    // </div>`;


    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="intro textGray4">
                <h1 className="textXl textGray5 mb4">Introduction</h1>
                <h2 className="textMd fontSemiBold lineHeightLg mb4">
                    A CSS framework inspired by <a href="https://tailwindcss.com/" target='_blank' rel="noreferrer" className="textTeal4">TailwindCSS</a> 
                    &nbsp;which allows you to rapidly build modern websites without ever leaving your HTML.
                </h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    <span className="textBlue4">Mint-UI</span> is utility-first CSS framework packed with classes like <span className=" lineHeightMd fontSemiBold">displayFlex, pt4, textCenter, gridColSpan6</span> etc that can be composed to build any design, directly in your markup.
                     Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.
                </p>
            </div>
            <div className="installation mt8 mb4">
                <h3 className="textLg fontSemiBold mb2">Installation</h3>
                {/* <small className="textRg textGray4">Learn how to get Mint-UI up and running in your project.</small> */}

                <p className="mt4 mb4">You can directly import the css file in your html using the following link tag.</p>

                <CodeDemo code={importCss} codeTitle={'Add mint.css'} codeActions={false}/>
                {/* <CodeDemo code={h2} codeTitle={'Text Card Example'} codeActions={true}/> */}

                <p className="note p2 border borderOrange3 bgOrange1 textOrange6 rounded mt8 mb4">
                    <i className="fas fa-note"></i>
                    <strong>Note:</strong> Import your own css styles after you import mint-ui, so when you want you can override mint-ui classes.
                </p>
            </div>
        </div>
    )
}
