import React from 'react'
import CodeDemo from '../CodeDemo'

export default function Introduction() {

    const importCss = `<link rel="stylesheet" href="https://mint-css.netlify.app/styles/mint.css">`;
    const featureCard = 
    `<div class="displayFlex p2 bgWhite rounded border borderGray2 shadowMdGray2">
        <img src="./joey.jpg" class="w24 roundedFull mr3" alt="user"/>
        <div class="displayFlex flexCol">
            <p class='fontBold lineHeightMd'>Joey Tribbiani</p>
            <small class='mb1 fontSemiBold'>Actor</small>
            <em class="mb2 textXs textGray5">Previously: Cologne sampler, Acting Teacher, Waiter</em>
            <small class=''>Email: joeytribbiani@joey.com</small>
        </div>
    </div>`;

    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="intro textGray4">
                <h1 className="textXl textGray5 mb4">Introduction</h1>
                <h2 className="textMd fontSemiBold lineHeightLg mb4">
                    A CSS framework inspired by <a href="https://tailwindcss.com/" target='_blank' rel="noreferrer noopener" className="textTeal4">TailwindCSS</a> 
                    &nbsp;which allows you to rapidly build modern websites without ever leaving your HTML.
                </h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    <span className="textBlue4">Mint-UI</span> is utility-first CSS framework packed with classes like <span className=" lineHeightMd fontSemiBold">displayFlex, pt4, textCenter, gridColSpan6</span> etc that can be composed to build any design, directly in your markup.
                     Even with the same color palette and sizing scale, it's easy to build the same component with a completely different look in the next project.
                </p>
            </div>
            <div className="installation mt8 md:mt12 mb4">
                <h3 className="textLg fontSemiBold mb2">Installation</h3>
                {/* <small className="textRg textGray4">Learn how to get Mint-UI up and running in your project.</small> */}

                <p className="mt4 mb4">You can directly import the css file in your html using the following link tag.</p>

                <CodeDemo code={importCss} codeTitle={'Add mint.css'} codeActions={false}/>

                <p className="note p2 border borderOrange3 bgOrange1 textOrange6 rounded mt4 mb4">
                    <i className="fas fa-exclamation-circle mr1"></i>
                    <strong>Note:</strong> Import your own css styles after you import mint-ui, so when you want you can override mint-ui classes.
                </p>
            </div>

            <div className="how-it-works mt8 md:mt12 mb4">
                <h3 className="textLg fontSemiBold mb2">Core Concept</h3>
                <small className="textRg textGray4">Learn how utitlity first css works.</small>

                <p className="mt4 mb4 textRg lineHeightMd fontNormal textGray5 mb4">
                    With Mint, you style elements by applying pre-existing classes directly in your HTML. <br/>
                    This approach allows us to implement a completely custom component design without writing a single line of custom CSS. <br/>
                    Aside from that maintaining a utility-first CSS project turns out to be a lot easier than maintaining a large CSS codebase, simply because HTML is so much easier to maintain than CSS.
                </p>
                <p className='fontMedium textGray5'>MintUI follows camelCase to name its classes.</p>
                <p className="mt4 mb2 textRg lineHeightMd fontNormal textGray5 mb4">
                    Let's see how it works, consider following example of a card.
                </p>

                <div className="feature-preview displayGrid gridCols6 justifyCenter p4 bgTeal1 border borderGray3 rounded">
                    <div className="gridCols1"></div>
                    {/* actual div */}
                    <div className="displayFlex p2 bgWhite rounded border borderGray2 shadowMdGray2 gridColSpan6 md:gridColSpan4">
                        <img src="./joey.jpg" className="w24 roundedFull mr3 border borderGray2" alt="user"/>
                        <div className="displayFlex flexCol">
                            <p className='fontBold lineHeightMd'>Joey Tribbiani</p>
                            <small className='mb1 fontSemiBold'>Actor</small>
                            <em className="mb2 textXs textGray5">Previously: Cologne sampler, Acting Teacher, Waiter</em>
                            <small className=''>Email: joeytribbiani@joey.com</small>
                        </div>
                    </div>
                </div>
                <CodeDemo code={featureCard} codeTitle={'User information card'} codeActions={false}/>
                <div className="feature-explaination">
                    In the above example we've used:
                    <ul className='listNoStyle mt2 mb2'>
                        <li className="displayFlex mb2">
                            <i className="fas fa-angle-right mr2 pt1"></i>
                            <p className="">
                                <strong className='fontSemiBold'>flexbox</strong> and <strong className='fontSemiBold'>padding</strong> utilities ('<span className='textGreen5'>displayFlex</span>' and '<span className='textGreen5'>p2</span>') to control the card layout.
                            </p>
                        </li>
                        <li className="displayFlex mb2">
                            <i className="fas fa-angle-right mr2 pt1"></i>
                            <p className="">
                                <strong className='fontSemiBold'>border</strong>, <strong className='fontSemiBold'>background-color</strong> and <strong className='fontSemiBold'>shadow</strong> utilities ('<span className='textGreen5'>border, borderGray2, rounded</span>', '<span className='textGreen5'>bgWhite</span>' and '<span className='textGreen5'>shadowMdGray2</span>') to control the look of card.
                            </p>
                        </li>
                        <li className="displayFlex mb2">
                            <i className="fas fa-angle-right mr2 pt1"></i>
                            <p className="">
                                <strong className='fontSemiBold'>width</strong>, <strong className='fontSemiBold'>border-radius</strong> and <strong className='fontSemiBold'>margin</strong> utilities ('<span className='textGreen5'>w24</span>', '<span className='textGreen5'>roundedFull</span>' and '<span className='textGreen5'>mr3</span>') to give width to image, make it round and give some right margin.
                            </p>
                        </li>
                        <li className="displayFlex mb2">
                            <i className="fas fa-angle-right mr2 pt1"></i>
                            <p className="">
                                <strong className='fontSemiBold'>text</strong> and <strong className='fontSemiBold'>font</strong> utilities ('<span className='textGreen5'>textXs, textGray5</span>' and '<span className='textGreen5'>fontBold, fontSemiBold</span>') to control font-size, text-color and font-weight of text.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="mt8 mb12">
                    <h4 className="mt2 mb2 textGray5">Concerns?</h4>
                    <p className="concerns textRg lineHeightMd fontNormal textGray5 mb4">
                        The biggest maintainability concern when using a utility-first approach is managing commonly repeated utility combinations.

                        This is easily solved by extracting components, usually as template partials or components. <br/>
                    </p>
                </div>
                
            </div>
        </div>
    )
}
