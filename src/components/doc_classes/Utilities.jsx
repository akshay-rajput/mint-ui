import React from 'react'
import ClassTable from './ClassTable';

export default function Utilities() {
    const classes = [
        {
            classNames: 'displayBlock',
            description: 'display: block'
        },
        {
            classNames: 'displayNone',
            description: 'display: none'
        },
        {
            classNames: 'containerMid',
            description: 
            `( width: 90%;
            max-width: 1200px;
            margin: auto; ) 
            container with equal margin from left and right`
        },
        {
            classNames: 'wFull',
            description: 'width: 100%'
        },
        {
            classNames: 'hFull',
            description: 'height: 100%'
        },
        {
            classNames: 'textCenter',
            description: 'text-align: center'
        },
        {
            classNames: 'textRight',
            description: 'text-align: right'
        },
        {
            classNames: 'listNoStyle',
            description: 'list-style-type: none (use when you want lists without bullets or numbers)'
        },
        {
            classNames: 'underline',
            description: 'text-decoration: underline'
        },
        {
            classNames: 'border',
            description: 'border: 1px solid'
        },
        {
            classNames: 'borderNone',
            description: 'border: none'
        },
        {
            classNames: 'rounded',
            description: 'border-radius: 5px'
        },
        {
            classNames: 'roundedPill',
            description: 'border-radius: 1.5rem'
        },
        {
            classNames: 'roundedFull',
            description: 'border-radius: 50%'
        },
        {
            classNames: 'cursorPointer',
            description: 'cursor: pointer'
        },
    ]

    return (
        <div className="mb8 p4 md:pl8 md:pr8">
            <div className="background-section textGray4">
                <h2 className="textXl textGray5 mb4">Other Utility classes</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    Classes which can be helpful in certain cases
                </p>
            </div>
            <ClassTable classes={classes}></ClassTable>
        </div>
    )
}
