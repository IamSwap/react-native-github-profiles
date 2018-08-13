/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { TextField } from "react-native-material-textfield";
import { Button } from "react-native-material-ui";

import UserProfle from "./components/UserProfile";

export default class App extends Component {
  state = {
    username: "",
    profile: ""
  };

  fetchProfile = () => {
    this.setState({ profile: "" });
    let username = this.state.username;
    if (username.length <= 0) {
      alert("Please enter a username!");
      return;
    }
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        return response.json();
      })
      .then(
        response => {
          this.setState({ profile: response });
          this.setState({ username: "" });
        },
        error => {
          alert("Unable to find user!");
        }
      );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TextField
          label="Enter GitHub username"
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <Button primary raised text="Get Data" onPress={this.fetchProfile} />

        <View style={styles.profile}>
          <UserProfle profile={this.state.profile} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  profile: {
    paddingTop: 20
  }
});
