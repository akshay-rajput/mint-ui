import React, {useState, useEffect} from 'react'
import CodeSnippet from './codeSnippet'
import CodePreview from './CodePreview'

export default function CodeDemo({code, codeTitle, codeActions}) {

    const [previewEnabled, setPreview] = useState(true);

    useEffect(() => {
        if(!codeActions){
            setPreview(false)
        }
    }, [codeActions])

    function showPreview(isPreviewSelected){
        setPreview(isPreviewSelected)
    }
    function copyText(){
        navigator.clipboard.writeText(code).then(function() {
            console.log('copied');
        })
    }

    return (
        
        <div className="code-demo mt2 mb2 border borderGray3">
            <div className="code-actions displayGrid gridCols2 itemsCenter p2 pb1">
                <h4 className="textGray4">{codeTitle}</h4>
                <div className="displayFlex flexWrap" style={{justifySelf: 'flex-end'}}>
                    {
                        codeActions ? (
                            <div className="btn-actions">
                                <button onClick={()=> showPreview(true)} style={{background: previewEnabled?'': 'transparent'}} 
                                        className="pl4 pr4 pt2 pb2 borderNone hover:bgGray3">
                                    <i className="far fa-eye mr1 textRg"></i>
                                    {/* Preview */}
                                </button>
                                <button onClick={()=> showPreview(false)} style={{background: !previewEnabled?'': 'transparent'}} 
                                        className="pl4 pr4 pt2 pb2 borderNone hover:bgGray3">
                                    <i className="fas fa-code mr1 textRg"></i>
                                    {/* Code */}
                                </button>
                            </div>
                        ): null
                    }
                    <button onClick={copyText}  
                            className="pl4 pr4 pt2 pb2 borderNone bgTransparent hover:bgGray3">
                        <i className="far fa-copy mr1 textRg"></i>
                        {/* Code */}
                    </button>
                </div>                

            </div>

            {
                previewEnabled && <CodePreview code={code} ></CodePreview>
            }

            {
                !previewEnabled && <CodeSnippet code={code} language="html"></CodeSnippet>
            }

        </div>
    )
}
