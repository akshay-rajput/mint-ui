import React from 'react'
import CodeDemo from '../CodeDemo'


export default function Alerts() {
    
    const successAlertCode = 
    `<div class="alerts-list mb4">
        <!-- Alert Success -->
        <div class="displayFlex justifyBetween itemsCenter bgGreen2 textGreen6 p2 mb4 rounded">
            <div class="displayFlex itemsCenter">
                <i class="fas fa-check-circle textSm mr1"></i>
                This is a success alert!
            </div>
            <i class="fas fa-times cursorPointer"></i>
        </div>
    </div>`;
    
    const failureAlertCode = 
    `<!-- Alert Danger -->
    <div class="displayFlex justifyBetween itemsCenter bgRed2 textRed6 p2 mb4 rounded">
        <div class="displayFlex itemsCenter">
            <i class="fas fa-skull textSm mr1"></i>
            This is a failure alert!
        </div>
        <i class="fas fa-times cursorPointer"></i>
    </div>`;

    const warningAlertCode = 
    `<!-- Alert Warning -->
    <div class="displayFlex justifyBetween itemsCenter bgYellow2 textYellow6 p2 mb4 rounded">
        <div class="displayFlex itemsCenter">
            <i class="fas fa-exclamation-circle textSm mr1"></i>
            This is a warning alert!
        </div>
        <i class="fas fa-times cursorPointer"></i>
    </div>`;

    const infoAlertCode = 
    `<!-- Alert Info -->
    <div class="displayFlex justifyBetween itemsCenter bgBlue2 textBlue6 p2 mb4 rounded">
        <div class="displayFlex itemsCenter">
            <i class="fas fa-info textSm mr1"></i>
            This is a information alert!
        </div>
        <i class="fas fa-times cursorPointer"></i>
    </div>`;

    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="alertSection textGray4">
                <h2 className="textXl textGray5 mb2">Alerts</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb8">
                    An Alert is used to convey information and acknowledgments that require minimal user interaction.
                </p>
            </div>

            <div className="success-alert mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Success Alert</h4>
                <p className="mb4">Success messages let people know they have completed an action. For these messages, it's best to confirm the outcome and let people continue.</p>
                <CodeDemo code={successAlertCode} codeTitle={'Success Alert'} codeActions={true}/>
            </div>
            <div className="failure-alert mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Failure Alert</h4>
                <p className="">Failure messages let the user know that something has gone wrong after they've tried to do something or if there are connectivity issues.</p>
                <CodeDemo code={failureAlertCode} codeTitle={'Failure/Danger Alert'} codeActions={true}/>
            </div>
            <div className="warning-alert mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Warning Alert</h4>
                <p className="">Warning messages appear before we request the user to take action. This is usually in anticipation of a significant change. Have empathy for the user. Inform, but don't alarm.</p>
                <CodeDemo code={warningAlertCode} codeTitle={'Warning Alert'} codeActions={true}/>
            </div>
            <div className="info-alert mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Information Alert</h4>
                <p className="">Information messages alert the user to additional information without requiring an action. Inform the user about something that might help or impact them.</p>
                <CodeDemo code={infoAlertCode} codeTitle={'Information Alert'} codeActions={true}/>
            </div>
            
        </div>
    )
}
