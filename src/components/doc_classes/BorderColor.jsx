import React from 'react'
import ClassTable from './ClassTable';

export default function BorderColor() {
    const classes = [
        {
            classNames: 'borderNone',
            description: 'Removes border from an element'
        },
        {
            classNames: 'borderWhite',
            description: 'Applies white border-color to an element'
        },
        {
            classNames: 'borderBlack',
            description: 'Applies black border-color to an element'
        },
        {
            classNames: 'borderGray1, borderGray2, borderGray3, borderGray4, borderGray5, borderGray6',
            description: 'Applies a variant of Gray border-color to an element'
        },
        {
            classNames: 'borderGreen1, borderGreen2, borderGreen3, borderGreen4, borderGreen5, borderGreen6',
            description: 'Applies a variant of Green border-color to an element'
        },
        {
            classNames: 'borderTeal1, borderTeal2, borderTeal3, borderTeal4, borderTeal5, borderTeal6',
            description: 'Applies a variant of Teal border-color to an element'
        },
        {
            classNames: 'borderBlue1, borderBlue2, borderBlue3, borderBlue4, borderBlue5, borderBlue6',
            description: 'Applies a variant of Blue border-color to an element'
        },
        {
            classNames: 'borderPurple1, borderPurple2, borderPurple3, borderPurple4, borderPurple5, borderPurple6',
            description: 'Applies a variant of Purple border-color to an element'
        },
        {
            classNames: 'borderViolet1, borderViolet2, borderViolet3, borderViolet4, borderViolet5, borderViolet6',
            description: 'Applies a variant of Violet border-color to an element'
        },
        {
            classNames: 'borderYellow1, borderYellow2, borderYellow3, borderYellow4, borderYellow5, borderYellow6',
            description: 'Applies a variant of Yellow border-color to an element'
        },
        {
            classNames: 'borderOrange1, borderOrange2, borderOrange3, borderOrange4, borderOrange5, borderOrange6',
            description: 'Applies a variant of Orange border-color to an element'
        },
        {
            classNames: 'borderRed1, borderRed2, borderRed3, borderRed4, borderRed5, borderRed6',
            description: 'Applies a variant of Red border-color to an element'
        },
        {
            classNames: 'borderPink1, borderPink2, borderPink3, borderPink4, borderPink5, borderPink6',
            description: 'Applies a variant of Pink border-color to an element'
        },
        {
            classNames: 'borderRose1, borderRose2, borderRose3, borderRose4, borderRose5, borderRose6',
            description: 'Applies a variant of Rose border-color to an element'
        }
    ]

    return (
        <div className="mb8 p4 md:pl8 md:pr8">
            <div className="background-section textGray4">
                <h2 className="textXl textGray5 mb4">Border Colors</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    If you want to change existing border color, use the borderColor class directly. If you want a border with some specific color then use <strong>border</strong> class along with borderColor class.
                </p>
            </div>
            <ClassTable classes={classes}></ClassTable>
        </div>
    )
}
