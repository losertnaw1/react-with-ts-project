import React, { useState } from 'react';
import { LandingPage } from './LandingPage';
import Header from './Header';
import MainShop from './MainShop';

class Home extends React.Component {
  constructor(props : any) {
    super(props);

    this.state = {
      open: false,
      isLanding: true,
      totalQtt: 0,
    };

    this.setOpen = this.setOpen.bind(this);
    this.setIsLanding = this.setIsLanding.bind(this);
    this.setTotalQtt = this.setTotalQtt.bind(this);
  }

  setOpen() {
    this.setState({ open: true });
  }

  setIsLanding() {
    this.setState({ isLanding: true });
  }

  setTotalQtt(childvalue : number) {
    this.setState({ totalQtt : childvalue});
  }

  render() {
    const { open, isLanding, totalQtt } = this.state;

    return (
      <>
        <Header
          totalQuantt={totalQtt}
          isLanding={isLanding}
          isDisplay={!open}
          openBag={this.setOpen}
          loadLanding={this.setIsLanding}
        ></Header>
        {isLanding ? (
          <LandingPage setIsLanding={() => this.setState({ isLanding: false })}></LandingPage>
        ) : (
          <MainShop
            sendTotalQtt={this.setTotalQtt}
            open={open}
            setOpen={() => this.setState({ open: true })}
            setClose={() => this.setState({ open: false })}
          ></MainShop>
        )}
      </>
    );
  }
}

export default Home;