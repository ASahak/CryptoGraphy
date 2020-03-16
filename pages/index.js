import Head from 'next/head'
import React from 'react';
import withAuth from 'utils/auth';
import Header from 'components/header';
import ChatContent from 'components/Chat-Content';

class Home extends React.Component{
  constructor () {
    super();
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

    render () {
    return (
      <div className="container">
        <Head>
          <title>Home</title>
        </Head>

        <main>
            <Header/>
            <ChatContent />
        </main>

        <style jsx>{`
      `}</style>
      </div>
    )
  }
}

export default withAuth(Home);
