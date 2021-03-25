import React from 'react'
import CodeDemo from '../CodeDemo'


export default function Forms() {
    
    const simpleFormCode = 
    `<div class="displayGrid md:gridCols2 gridGap4 mt4 mb8">
        <!-- form 1 -->
        <div class="displayFlex flexCol mb8">
            <label for="" class="mb4">Simple stacked form</label>
            <div class="border borderGray3 p4 rounded">
                <div class="form-group displayFlex flexCol mt3 mb3">
                    <label for="" class="textXs textGray4 mb1">Email</label>
                    <input type="email" name="" id="" placeholder="abc@company.com" class="p2 rounded border borderGray3">
                </div>

                <div class="form-group displayFlex flexCol mt3 mb3">
                    <label for="" class="textXs textGray4 mb1">Password</label>
                    <input type="password" name="" id="" placeholder="Enter password" class="p2 rounded border borderGray3">
                </div>

                <button class="textWhite bgBlue5 hover:bgBlue6 border borderBlue5 rounded wFull textCenter pt2 pb2 mt4 mb4">Submit</button>
            </div>
        </div>

        <!-- form 2 -->
        <div class="displayFlex flexCol mb8">
            <label for="" class="mb4">Inline form</label>
            <div class="border borderGray3 p4 rounded">
                <div class="inline-form displayFlex flexWrap itemsCenter wFull mt2 mb2">
                    <!-- <label for="" class="textXs textGray4 mr1">Email</label> -->
                    <input type="email" name="" id="" placeholder="abc@company.com" class="flexGrow p2 rounded border borderGray3">
                    <button class="textWhite bgBlue4 hover:bgBlue6 border borderBlue5 rounded textCenter p2 ml2">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    `;
    
    const formGridCode = 
    `<div class="displayGrid md:gridCols2 mb4">
        
        <!-- form grid below -->
        <div class="form-grid border borderGray3 rounded p2">
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

            <div class="displayGrid gridCols3 gridGap4">
                <div class="form-group displayFlex flexCol mt3 mb3">
                    <label for="" class="textXs textGray4 mb1">City</label>
                    <input type="text" name="" id="" placeholder="Your city" class="p2 rounded border borderGray3">
                </div>
                <div class="form-group displayFlex flexCol mt3 mb3">
                    <label for="" class="textXs textGray4 mb1">Education</label>
                    <select name="" id="" class="p2 rounded border borderGray3">
                        <option value="">B.E</option>
                        <option value="">M.S</option>
                        <option value="">High school</option>
                    </select>
                </div>
                <div class="form-group displayFlex flexCol mt3 mb3">
                    <label for="" class="textXs textGray4 mb1">Age</label>
                    <select name="" id="" class="p2 rounded border borderGray3">
                        <option value="">18</option>
                        <option value="">18</option>
                        <option value="">18</option>
                    </select>
                </div>
            </div>

            <div class="displayGrid gridCols2 gridGap4">
                <div class="form-group displayFlex flexCol mt3 mb3">
                    <label for="" class="textXs textGray4 mb1">Stream</label>
                    <input type="text" name="" id="" placeholder="Your stream" class="p2 rounded border borderGray3">
                </div>
                <div class="form-group displayFlex flexCol mt3 mb3">
                    <label for="" class="textXs textGray4 mb1">Interests</label>
                    <select name="" id="" class="p2 rounded border borderGray3">
                        <option value="">Reading</option>
                        <option value="">Singing</option>
                        <option value="">Rock climbing</option>
                    </select>
                </div>
            </div>


            <div class="mt4 mb4 textRight">
                <button class="textBlue4 border borderBlue4 hover:bgWhite rounded textCenter pt2 pb2 pl4 pr4 mr4">
                    <i class="fas fa-backspace"></i>&nbsp; Reset
                </button>
                <button class="textWhite bgBlue4 hover:bgBlue6 border borderBlue4 rounded textCenter pt2 pb2 pl4 pr4">
                    <i class="fas fa-save"></i>&nbsp; Submit
                </button>
            </div>
        </div>


    </div>
    `;

    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="inputSection textGray4">
                <h2 className="textXl textGray5 mb2">Forms</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb8">

                </p>
            </div>

            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Simple Form</h4>
                {/* <p className="mb4">Wrap your input and label insida a parent div and give it a class of <span className="bgGray1 p1">displayFlex</span> & <span className="bgGray1 p1">flexCol</span>. This will stack the child elements vertically.</p> */}
                <CodeDemo code={simpleFormCode} codeTitle={'Stacked form and inline form'} codeActions={true}/>
            </div>
            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Form using grids</h4>
                {/* <p className="">To turn images into a circle, you need image of equal height and width. Give it a class <span className="bgGray1 p1">roundedFull</span></p> */}
                <CodeDemo code={formGridCode} codeTitle={'Form using grids'} codeActions={true}/>
            </div>
            
        </div>
    )
}
