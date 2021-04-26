import React from 'react'
import ClassTable from './ClassTable';

export default function BackgroundColor() {
    const classes = [
        {
            classNames: 'bgTransparent',
            description: 'Applies background-color: transparent property to element.'
        },
        {
            classNames: 'bgWhite',
            description: 'Applies white background to an element'
        },
        {
            classNames: 'bgBlack',
            description: 'Applies black background to an element'
        },
        {
            classNames: 'bgGray1, bgGray2, bgGray3, bgGray4, bgGray5, bgGray6',
            description: 'Applies a variant of Gray background to an element'
        },
        {
            classNames: 'bgGreen1, bgGreen2, bgGreen3, bgGreen4, bgGreen5, bgGreen6',
            description: 'Applies a variant of Green background to an element'
        },
        {
            classNames: 'bgTeal1, bgTeal2, bgTeal3, bgTeal4, bgTeal5, bgTeal6',
            description: 'Applies a variant of Teal background to an element'
        },
        {
            classNames: 'bgBlue1, bgBlue2, bgBlue3, bgBlue4, bgBlue5, bgBlue6',
            description: 'Applies a variant of Blue background to an element'
        },
        {
            classNames: 'bgPurple1, bgPurple2, bgPurple3, bgPurple4, bgPurple5, bgPurple6',
            description: 'Applies a variant of Purple background to an element'
        },
        {
            classNames: 'bgViolet1, bgViolet2, bgViolet3, bgViolet4, bgViolet5, bgViolet6',
            description: 'Applies a variant of Violet background to an element'
        },
        {
            classNames: 'bgYellow1, bgYellow2, bgYellow3, bgYellow4, bgYellow5, bgYellow6',
            description: 'Applies a variant of Yellow background to an element'
        },
        {
            classNames: 'bgOrange1, bgOrange2, bgOrange3, bgOrange4, bgOrange5, bgOrange6',
            description: 'Applies a variant of Orange background to an element'
        },
        {
            classNames: 'bgRed1, bgRed2, bgRed3, bgRed4, bgRed5, bgRed6',
            description: 'Applies a variant of Red background to an element'
        },
        {
            classNames: 'bgPink1, bgPink2, bgPink3, bgPink4, bgPink5, bgPink6',
            description: 'Applies a variant of Pink background to an element'
        },
        {
            classNames: 'bgRose1, bgRose2, bgRose3, bgRose4, bgRose5, bgRose6',
            description: 'Applies a variant of Rose background to an element'
        }
    ]

    return (
        <div className="mb8 p4 md:pl8 md:pr8">
            <div className="background-section textGray4">
                <h2 className="textXl textGray5 mb4">Background Colors</h2>
                {/* <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    An avatar acts as a proxy for a user or entity (such as a project, repository, or space), in a product. They're often combined with status or presence indicators to give more context. Users generally upload their own image, otherwise, a default image is displayed.
                </p> */}
            </div>
            <ClassTable classes={classes}></ClassTable>
        </div>
    )
}
