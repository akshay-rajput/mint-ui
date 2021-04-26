import React from 'react'
import ClassTable from './ClassTable';

export default function TextColor() {
    const classes = [
        {
            classNames: 'textWhite',
            description: 'Applies white text-color to an element'
        },
        {
            classNames: 'textBlack',
            description: 'Applies black text-color to an element'
        },
        {
            classNames: 'textGray1, textGray2, textGray3, textGray4, textGray5, textGray6',
            description: 'Applies a variant of Gray text-color to an element'
        },
        {
            classNames: 'textGreen1, textGreen2, textGreen3, textGreen4, textGreen5, textGreen6',
            description: 'Applies a variant of Green text-color to an element'
        },
        {
            classNames: 'textTeal1, textTeal2, textTeal3, textTeal4, textTeal5, textTeal6',
            description: 'Applies a variant of Teal text-color to an element'
        },
        {
            classNames: 'textBlue1, textBlue2, textBlue3, textBlue4, textBlue5, textBlue6',
            description: 'Applies a variant of Blue text-color to an element'
        },
        {
            classNames: 'textPurple1, textPurple2, textPurple3, textPurple4, textPurple5, textPurple6',
            description: 'Applies a variant of Purple text-color to an element'
        },
        {
            classNames: 'textViolet1, textViolet2, textViolet3, textViolet4, textViolet5, textViolet6',
            description: 'Applies a variant of Violet text-color to an element'
        },
        {
            classNames: 'textYellow1, textYellow2, textYellow3, textYellow4, textYellow5, textYellow6',
            description: 'Applies a variant of Yellow text-color to an element'
        },
        {
            classNames: 'textOrange1, textOrange2, textOrange3, textOrange4, textOrange5, textOrange6',
            description: 'Applies a variant of Orange text-color to an element'
        },
        {
            classNames: 'textRed1, textRed2, textRed3, textRed4, textRed5, textRed6',
            description: 'Applies a variant of Red text-color to an element'
        },
        {
            classNames: 'textPink1, textPink2, textPink3, textPink4, textPink5, textPink6',
            description: 'Applies a variant of Pink text-color to an element'
        },
        {
            classNames: 'textRose1, textRose2, textRose3, textRose4, textRose5, textRose6',
            description: 'Applies a variant of Rose text-color to an element'
        }
    ]

    return (
        <div className="mb8 p4 md:pl8 md:pr8">
            <div className="text-color-section textGray4">
                <h2 className="textXl textGray5 mb4">Text Colors</h2>
                {/* <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    An avatar acts as a proxy for a user or entity (such as a project, repository, or space), in a product. They're often combined with status or presence indicators to give more context. Users generally upload their own image, otherwise, a default image is displayed.
                </p> */}
            </div>
            <ClassTable classes={classes}></ClassTable>
        </div>
    )
}
