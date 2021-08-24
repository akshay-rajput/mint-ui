import React from 'react'
import ClassTable from './ClassTable';

export default function TextSize() {
    const classes = [
        {
            classNames: 'textXs',
            description: 'font-size: 0.75rem'
        },
        {
            classNames: 'textSm',
            description: 'font-size: 0.9rem'
        },
        {
            classNames: 'textRg',
            description: 'font-size: 1rem'
        },
        {
            classNames: 'textMd',
            description: 'font-size: 1.25rem'
        },
        {
            classNames: 'textLg',
            description: 'font-size: 1.5rem'
        },
        {
            classNames: 'textXl',
            description: 'font-size: 2rem'
        },
        {
            classNames: 'text2Xl',
            description: 'font-size: 3rem'
        },
        {
            classNames: 'text3Xl',
            description: 'font-size: 4rem'
        },
    ]

    return (
        <div className="mb8 p4 md:pl8 md:pr8">
            <div className="background-section textGray4">
                <h2 className="textXl textGray5 mb4">Text Size</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    Classes to specify the font-size of element.
                </p>
            </div>
            <ClassTable classes={classes}></ClassTable>
        </div>
    )
}
