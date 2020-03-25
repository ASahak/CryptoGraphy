import React from 'react';
import {connect} from "react-redux";
import {
    __GET_ACTIVE_USERS_MESSAGES
} from 'store/saga';

class Messages extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: {}
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.activeUser !== this.props.activeUser) {
            const genMessages = await __GET_ACTIVE_USERS_MESSAGES(this.props.activeUser).next();
            console.log(genMessages, 99);
            this.setState({
                messages: {
                    1: genMessages.value
                }
            })
        }
    }

    render () {
        // console.log(this.props.activeUser, this.state.messages);
        return (
            <div></div>
        )
    }
}

const mapStateToProps = state => ({
    activeUser: state.chat.activeUser
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Messages);
