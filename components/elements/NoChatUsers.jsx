import React from 'react';
import UI_ELEMENTS from "components/shared/UI";

const NoChatUsers = props => {
    return (
        <div className="no-chat-users">
            <p style={{textAlign: 'center'}}>You haven't any chat yet</p>
            <UI_ELEMENTS.Button
                type="button"
                text="Start Chat"
                width={150}
                onClick={props.goToCommonRoom()}
                size="sm"/>
        </div>
    )
}

export default NoChatUsers;
