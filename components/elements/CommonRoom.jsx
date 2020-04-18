import React, {useEffect} from 'react';
import UI_ELEMENTS from "../shared/UI";
import fire from "../../config/fire";
import Skeleton from "../Skeleton";
import {
    __GET_ALL_USERS
} from "store/saga";
import {connect} from "react-redux";
import { Bus } from 'components/shared/helpers/Bus';

function EveryUser (props) {
    return (
        <div className="user-messages-container">
            <UI_ELEMENTS.UserImage
                firstName={props.dataMSG.fullName.split(' ')[0]}
                lastName={props.dataMSG.fullName.split(' ')[1] || ''}
                fill={props.dataMSG.color}
            />
            <div className="user-chat-btn">
                <div className="user-message-info_left">
                    <h4>{props.dataMSG.fullName}</h4>
                </div>
                <a
                    onClick={()=> Bus.dispatch('startChat', {
                        id: props.dataMSG.id,
                        color: props.dataMSG.color,
                        isSeen: true,
                        isTyping: false,
                        countMessagesDelivered: 0,
                        fullName: props.dataMSG.fullName,
                        isSender: true,
                        letters: {
                            message: '',
                            time: null
                        }
                    })}
                    className={fire.auth().currentUser.email === props.dataMSG.email ? 'disable-btn common-room-btn' : 'common-room-btn'}>{
                    fire.auth().currentUser.email === props.dataMSG.email ? <span className="you">You</span> : <span className="lnr lnr-envelope"></span>
                }</a>
            </div>
        </div>
    )
}

const CommonRoom = props => {


    useEffect(() => {
        if (props.allChatUsers == null) {
            __GET_ALL_USERS().next();
        }
        return () => {
            __GET_ALL_USERS({}).next();
        }
    }, []);

    return (
        <>
            {props.usersList === null && new Array(8).fill('').map((_, i) => {
                return (
                    <div className="skeleton-container" key={i + Math.random().toString(16).slice(2, 6)} style={{opacity: (8 - i) * 0.09}}>
                        <Skeleton
                            width="35px"
                            height="35px"
                            margin={['5px', '10px', '0px', '10px']}
                            radius="50%"
                        />
                        <div className="line-wrap">
                            <Skeleton
                                width="100%"
                                height="12px"
                                margin={['5px', '0px', '10px', '0px']}
                                radius="0%"
                            />
                            <Skeleton
                                width="100%"
                                height="12px"
                                margin={['5px', '0px', '10px', '0px']}
                                radius="0%"
                            />
                        </div>
                    </div>
                )
            })}
            {props.usersList !== null && props.usersList.map(user => <EveryUser
                dataMSG={user}
                key={user.id}
            />)}
            <style jsx global>{`
                .user-messages-container {
                    display: flex;
                    padding: 10px;
                    border-bottom: 1px solid #e3dede;
                }
                .user-messages-container .user-chat-btn{
                    padding-left: 10px;
                    display: flex;
                    justify-content: space-between;
                    width: calc(100% - 45px);
                    align-items: center;
                }
                .common-room-btn {
                    cursor:pointer;
                    font-size: 18px;
                    margin-top: 0px;
                    display: inline-block;
                }
                .common-room-btn > span.you{
                    font-size: 14px;
                }
                .common-room-btn > span:not(.you):hover{
                    font-weight: 900;
                }
                .user-messages-container .user-chat-btn .user-message-info_left h4{
                    margin: 0;
                    max-height: 40px;
                    overflow: hidden;
                }
            `}</style>
        </>
    )
};
const mapStateToProps = state => ({
    usersList: state.chat.allChatUsers
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommonRoom);