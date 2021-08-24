import React from 'react'
import ClassTable from './ClassTable';

export default function Grid() {
    const classes = [
        {
            classNames: 'displayGrid',
            description: '(display: grid)'
        },
        {
            classNames: 'autoColsMax',
            description: '(grid-auto-columns: max-content) sets size of column to accomodate max-content'
        },
        {
            classNames: 'gridCols1',
            description: '(grid-template-columns: repeat(1, minmax(0, 1fr))) gives one column grid'
        },
        {
            classNames: 'gridCols2',
            description: '(grid-template-columns: repeat(2, minmax(0, 1fr))) gives two column grid'
        },
        {
            classNames: 'gridCols3',
            description: '(grid-template-columns: repeat(3, minmax(0, 1fr))) gives three column grid'
        },
        {
            classNames: 'gridCols4, gridCols5, gridCols6, gridCols7, gridCols8, gridCols9, gridCols10, gridCols11, gridCols12',
            description: 'creates grids with 4, 5, 6...12 columns respectively'
        },
        {
            classNames: 'gridColSpan2',
            description: '(grid-column-start: span 2) spans a column to take width of 2 columns'
        },
        {
            classNames: 'gridColSpan3',
            description: '(grid-column-start: span 3) spans a column to take width of 3 columns'
        },
        {
            classNames: 'gridColSpan4, gridColSpan5, gridColSpan6, gridColSpan7, gridColSpan8, gridColSpan9, gridColSpan10, gridColSpan11, gridColSpan12',
            description: 'spans a column to take width of 4,5,6,...,12 columns respectively'
        },
        {
            classNames: 'gridGap1',
            description: '(grid-gap: 0.25 rem)'
        },
        {
            classNames: 'gridGap2',
            description: '(grid-gap: 0.5 rem)'
        },
        {
            classNames: 'gridGap3',
            description: '(grid-gap: 0.75 rem)'
        },
        {
            classNames: 'gridGap4',
            description: '(grid-gap: 1 rem)'
        },
        {
            classNames: 'gridGap5',
            description: '(grid-gap: 1.25 rem)'
        },
        {
            classNames: 'gridGap6',
            description: '(grid-gap: 1.5 rem)'
        },
        {
            classNames: 'gridGap7',
            description: '(grid-gap: 1.75 rem)'
        },
        {
            classNames: 'gridGap8',
            description: '(grid-gap: 2 rem)'
        },
    ]

    return (
        <div className="mb8 p4 md:pl8 md:pr8">
            <div className="background-section textGray4">
                <h2 className="textXl textGray5 mb4">Grid</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    Grid system here uses 12 columns. Use <strong>gridCols(1-12)</strong> range of classes to specify columns in grid. Use <strong>gridColSpan(1-12)</strong> range of classes to specify column span for an element within grid. Lastly you can use <strong>gridGap(1-8)</strong> to specify the gap between columns and rows. 
                </p>
            </div>
            <ClassTable classes={classes}></ClassTable>
        </div>
    )
}
