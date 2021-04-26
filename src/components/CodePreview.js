import React, {useRef, useEffect} from 'react'

export default function CodePreview({code}) {
    const previewBox = useRef(null)
    useEffect(() => {
        previewBox.current.innerHTML = code 
        // return () => {
        //     previewBox.innerHTML = ''
        // }
    }, [code])

    return (
        <div className="preview-box p2 pb1"  style={{borderTop: '1px solid #ddd', overflowX: 'auto'}} 
            ref={previewBox}>
            
        </div>
    )
}
