import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  View,
  TextInput,
  Text,
  Button,
  Image,
  Typography,
  Colors
} from "react-native-ui-lib";
import ShoppingBackground from "../images/shopping.jpg";
import SignUpScreen_UiLib from "./SignUpScreen_UiLib";

export default class SignInScreen_UiLib extends Component {
  onFocus() {
    this.setState({
      borderBottomColor: "green"
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={ShoppingBackground}
          resizeMode="stretch"
          style={styles.backgroundImage}
        />

        <View flex paddingH-25 paddingT-120 style={styles.viewStyle}>
          <Text blue50 text20 NasuPurple h1>
            Welcome
          </Text>
          <TextInput
            text50
            placeholder="Email"
            placeholderTextColor="#ee5253"
            floatingPlaceholderColor="#ee5253"
            floatingPlaceholder
            underlineColor="#ee5253"
            dark10
          />
          <TextInput
            text50
            placeholder="Password"
            placeholderTextColor="#ee5253"
            secureTextEntry
            floatingPlaceholder
            floatingPlaceholderColor="#ee5253"
            underlineColor="#ee5253"
            dark10
          />
          <View marginT-50 center>
            <Button text70 white background-orange30 label="Login" />
            <Button
              link
              text70
              orange30
              label="Sign Up"
              marginT-20
              onPress={() => this.props.navigation.navigate('SignUpScreen')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: "100%",
    opacity: 0.3
  },
  viewStyle: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignContent: "center",
    flex: 1
  }
});

Colors.loadColors({
  gold: "#FFD700",
  NasuPurple: "#5f27cd",
  JoustBlue: "#54a0ff"
});

Typography.loadTypographies({
  h1: { fontSize: 58, fontWeight: "300", lineHeight: 80 },
  h2: { fontSize: 46, fontWeight: "300", lineHeight: 64 }
});
