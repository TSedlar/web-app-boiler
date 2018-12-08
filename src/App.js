import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  App,
  Block,
  Statusbar,
  Panel,
  View,
  Page,
  Navbar,
  List,
  ListItem
} from "framework7-react";

/* global device */

class Home extends Component {
  render() {
    return (
      <Page>
        <Navbar title="Home" />
        <Block id="home">
          <p>This is the home page</p>
        </Block>
      </Page>
    );
  }
}

class About extends Component {
  render() {
    return (
      <Page>
        <Navbar title="About" />
        <Block id="about">
          <p>Device Platform: {device.platform}</p>
        </Block>
      </Page>
    );
  }
}

class Main extends Component {
  navTo = url => {
    this.$f7.views.main.router.navigate(url);
    this.$f7.panel.close();
  };

  render() {
    return (
      <App
        params={{
          name: "Web App Boiler",
          id: "me.sedlar.web-app-boiler",
          theme: "auto",
          routes: [
            {
              path: "/",
              component: Home
            },
            {
              path: "/about/",
              component: About
            }
          ],
          panel: {
            swipe: "left"
          }
        }}
      >
        <Statusbar />
        <Panel left cover>
          <View>
            <Page>
              <Navbar title="Pages" />
              <List>
                <ListItem
                  title="Home"
                  link="#"
                  onClick={() => this.navTo("/")}
                />
                <ListItem
                  title="About"
                  link="#"
                  onClick={() => this.navTo("/about/")}
                />
              </List>
            </Page>
          </View>
        </Panel>
        <View main url="/" />
      </App>
    );
  }
}

export default Main;
