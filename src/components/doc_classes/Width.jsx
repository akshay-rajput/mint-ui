import React, {useEffect, useState} from 'react'
import ClassTable from './ClassTable';

export default function Width() {
    const [units, setunits] = useState([])
    
    useEffect(() => {

        let unitList = []
        for (let index = 1; index < 25; index++) {
            let unitData = {
                classNames: 'w'+index,
                description: `width: ${index/4} rem`
            }
            unitList.push(unitData)
        }

        setunits(unitList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (
        <div className="mb8 p4 md:pl8 md:pr8">
            <div className="background-section textGray4">
                <h2 className="textXl textGray5 mb4">Width</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    Use <strong>h</strong> class with scale number to quickly set width of an element. <br/>
                    Width utility classes use a scale from 1 to 24 where each subsequent unit increases by 0.25rem i.e. 1 = 0.25rem, 2 = 0.5rem,..., 24 = 6rem
                </p>
            </div>
            
            <div className="displayGrid md:gridCols12 gridGap4">
                <div className="gridColSpan12 md:gridColSpan8 mt7">
                    <ClassTable classes={units}></ClassTable>
                </div>
            </div>
        </div>
    )
}
