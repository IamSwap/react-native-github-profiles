import React from "react";
import { Card } from "react-native-material-ui";
import { StyleSheet, Text, View, Image } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";

export default class UserProfile extends React.Component {
  render() {
    if (this.props.profile.name) {
      const profile = this.props.profile;
      return (
        <View style={{ paddingBottom: 20 }}>
          <Card>
            <FullWidthImage
              source={{ uri: profile.avatar_url }}
              ratio={1 / 1}
            />
            <View style={{ padding: 10 }}>
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.bio}>{profile.bio}</Text>
            </View>
          </Card>
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 200,
    height: 200
  },
  name: {
    fontSize: 24,
    fontWeight: "bold"
  },
  bio: {
    fontSize: 18
  }
});
