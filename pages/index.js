import Head from 'next/head'
import React from 'react';
import withAuth from 'utils/auth';
import Header from 'components/header';
import ChatContent from 'components/Chat-Content';
import {
    __SET_MY_DATA
} from 'store/actions';
import { connect } from 'react-redux';
import fire from "config/fire";

class Home extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            user: null
        };
        this.__bodyClass('add');
    }
    __bodyClass (type) {
      if (typeof window !== 'undefined') {
          const _body = document.body;
          if (_body) {
              _body.classList[type]('bg-none')
          }
      }
    }

    componentWillUnmount() {
        this.__bodyClass('remove');
    }
    componentDidMount() {
        const db = fire.firestore();
        db.collection('users').where("email", "==", fire.auth().currentUser.email)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.props.__SET_MY_DATA({
                        id: doc.data().id,
                        color: doc.data().color,
                        fullName: doc.data().fullName,
                    });
                    this.setState({
                        user: doc.data()
                    })
                })
            })
    }

    render () {
          return (
              <div className="container">
                <Head>
                  <title>Home</title>
                </Head>

                <main>
                    <Header user={this.state.user}/>
                    <ChatContent />
                </main>

                <style jsx>{`
              `}</style>
              </div>
          )
    }
}

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged
});

const mapDispatchToProps = {
    __SET_MY_DATA
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withAuth(Home));
