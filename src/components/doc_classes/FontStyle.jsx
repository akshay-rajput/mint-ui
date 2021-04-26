import React from 'react'
import ClassTable from './ClassTable';

export default function FontStyle() {
    const classes = [
        {
            classNames: 'fontLight',
            description: 'font-weight: 300'
        },
        {
            classNames: 'fontNormal',
            description: 'font-weight: 400'
        },
        {
            classNames: 'fontMedium',
            description: 'font-weight: 500'
        },
        {
            classNames: 'fontSemiBold',
            description: 'font-weight: 600'
        },
        {
            classNames: 'fontBold',
            description: 'font-weight: 700'
        },
        {
            classNames: 'fontExtraBold',
            description: 'font-weight: 900'
        },
        {
            classNames: 'lineHeightXs',
            description: 'line-height: 1 rem'
        },
        {
            classNames: 'lineHeightSm',
            description: 'line-height: 1.25 rem'
        },
        {
            classNames: 'lineHeightMd',
            description: 'line-height: 1.5 rem'
        },
        {
            classNames: 'lineHeightLg',
            description: 'line-height: 1.75 rem'
        },
        {
            classNames: 'lineHeightXl',
            description: 'line-height: 2 rem'
        },
    ]

    return (
        <div className="mb8 p4 md:pl8 md:pr8">
            <div className="background-section textGray4">
                <h2 className="textXl textGray5 mb4">Font Style</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    Classes to specify the font-style of element and line-height of text.
                </p>
            </div>
            <ClassTable classes={classes}></ClassTable>
        </div>
    )
}
