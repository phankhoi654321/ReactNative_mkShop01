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
import firebase from "react-native-firebase";
import ShoppingBackground from "../../../images/shopping.jpg";
import SignUpScreen_UiLib from "./SignUpScreen_UiLib";

export default class SignInScreen_UiLib extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onLogin = this.onLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.errors);
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    //Retrieve the current registration token   https://rnfirebase.io/docs/v4.2.x/messaging/device-token
    firebase
      .messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          // user has a device token
          console.log("Token: ", fcmToken);
        } else {
          // user doesn't have a device token yet
        }
      });

    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        console.log("HasPermission: ", enabled);
      });
  }

  onLogin(e) {
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
  }

  // onFocus() {
  //   this.setState({
  //     borderBottomColor: "green"
  //   });
  // }
  render() {
    const { errors } = this.state;
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
            onChangeText={text => {
              this.setState({ email: text });
            }}
            autoCapitalize="none"
            error={errors.email}
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
            onChangeText={text => {
              this.setState({ password: text });
            }}
            autoCapitalize="none"
            error={errors.password}
          />
          <View marginT-50 center>
            <Button
              text70
              white
              background-orange30
              label="Login"
              onPress={this.onLogin}
            />
            <Button
              link
              text70
              orange30
              label="Sign Up"
              marginT-20
              onPress={() => this.props.navigation.navigate("SignUpScreen")}
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
