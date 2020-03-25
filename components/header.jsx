import React from 'react';
import fire from "config/fire";
import Router from "next/router";
import Icon from 'components/Icons/icon';
import UI_ELEMENTS from 'components/shared/UI';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
    }
    componentDidMount() {
        const db = fire.firestore();
        db.collection('users').where("email", "==", fire.auth().currentUser.email)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.setState({
                        user: doc.data()
                    })
                })
            })
    }

    logOut () {
        fire.auth().signOut().then(_ => {
            window.location = '/login';
        })
    }

    render () {
        return (
            <header>
                <a>
                    <img src="./assets/images/logo.png" alt="encrypt"/>
                    encrypt
                </a>
                {this.state.user && <div className="user-wrapper">
                    <UI_ELEMENTS.UserImage
                        firstName={this.state.user.fullName.split(' ')[0]}
                        lastName={this.state.user.fullName.split(' ')[1] || ''}
                        fill={this.state.user.color}
                    />
                    <span onClick={() => this.logOut()}>
                        <Icon name="logout"/>
                    </span>
                </div>}
                <style global jsx>{`
                    header {
                        background-color: #262626;
                        padding: 5px 5vw;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
                    }
                    header > a {
                        display: flex;
                        align-items: center;
                        color: #fff;
                        text-decoration: none;
                        font-family: fantasy;
                    }
                    header > a img {
                        max-width: 35px;
                        margin-right: 5px;
                    }
                    .user-wrapper {
                        display: flex;
                        align-items: center;
                    } 
                    .user-wrapper svg {
                        margin-left: 10px;
                        width: 20px;
                        fill: #fff;
                        cursor: pointer;
                    }
                `}</style>
            </header>
        )
    }
}
export default React.memo(Header);