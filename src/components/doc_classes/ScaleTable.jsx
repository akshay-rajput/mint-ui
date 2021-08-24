import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

export default function ScaleTable({classes}) {
    const [units, setunits] = useState([])
    
    useEffect(() => {

        let unitList = []
        for (let index = 1; index < 25; index++) {
            let unitData = {
                unit: index,
                value: `${index/4} rem`
            }
            unitList.push(unitData)
        }

        setunits(unitList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='border borderGray3 rounded shadowMdGray2' style={{overflowX: 'auto'}}>
            <div className="displayGrid gridCols12 gridGap2 bgOrange2 p2 rounded" style={{textAlign: 'left'}}>
                <span className='gridColSpan4 fontBold textGray5 textSm '>Unit</span>
                <span className='gridColSpan8 fontBold textGray5 textSm '>Value in rem</span>
            </div>
            <div className=''>
                {
                    units.map(unitData => {
                        return(
                            <div key={uuidv4()} className={'displayGrid gridCols12 gridGap4 hover:bgOrange1 p2 textSm ' + (units.indexOf(unitData) % 2 === 0 ? 'bgTeal1': '')}>
                                <span className='gridColSpan4 textGray5'>{unitData.unit}</span>
                                <span className='gridColSpan8 '>{unitData.value}</span>
                            </div>
                        )
                    })
                }
            </div>
        
        </div>
    )
}
