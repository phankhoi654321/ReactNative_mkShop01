import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import {
  View,
  TextInput,
  Text,
  Button,
  Image,
  Typography,
  Colors,
  TextArea,
  Picker
} from "react-native-ui-lib";
import ShoppingBackground from "../../../images/shopping.jpg";
import DatePicker from "react-native-datepicker";
import isEmpty from "./is-empty";

export default class SignUpScreen_UiLib extends Component {
  constructor() {
    super();
    this.state = {
      isFocused: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthday: null,
      errors: {}
    };
    this.onRegister = this.onRegister.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.errors);
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onRegister(e) {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      birthday: this.state.birthday
    };
    this.props.registerUser(newUser);
  }

  render() {
    const { isFocused } = this.state;
    const { errors } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={ShoppingBackground}
          resizeMode="stretch"
          style={styles.backgroundImage}
        />

        <View flex paddingH-25 paddingT-30 style={styles.viewStyle}>
          <Text NasuPurple h1>
            Sign Up
          </Text>
          <TextInput
            text70
            placeholder="Your Name"
            placeholderTextColor="#ee5253"
            floatingPlaceholderColor="#ee5253"
            floatingPlaceholder
            underlineColor="#ee5253"
            autoCapitalize="none"
            dark10
            onChangeText={text => {
              this.setState({ name: text });
            }}
            error={errors.name}
          />
          <View>
            <TextInput
              text70
              placeholder="Email"
              placeholderTextColor="#ee5253"
              floatingPlaceholder
              floatingPlaceholderColor="#ee5253"
              underlineColor="#ee5253"
              autoCapitalize="none"
              dark10
              onChangeText={text => {
                this.setState({ email: text });
              }}
              error={errors.email}
            />
          </View>
          <TextInput
            text70
            placeholder="Password"
            placeholderTextColor="#ee5253"
            secureTextEntry
            floatingPlaceholder
            floatingPlaceholderColor="#ee5253"
            underlineColor="#ee5253"
            dark10
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({ password: text });
            }}
            error={errors.password}
          />
          <TextInput
            text70
            placeholder="Confirm Password"
            placeholderTextColor="#ee5253"
            secureTextEntry
            floatingPlaceholder
            floatingPlaceholderColor="#ee5253"
            underlineColor="#ee5253"
            autoCapitalize="none"
            dark10
            onChangeText={text => {
              this.setState({ confirmPassword: text });
            }}
            error={errors.confirmPassword}
          />
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                position: "absolute",
                left: 0,
                top: !isFocused ? 14 : -12,
                fontSize: !isFocused ? 17 : 12,
                color: "#ee5253"
              }}
            >
              Birthday
            </Text>
            <DatePicker
              style={{
                borderColor: "#ee5253",
                borderBottomWidth: 1,
                width: "100%"
              }}
              date={this.state.birthday}
              mode="date"
              placeholder=" "
              format="YYYY-MM-DD"
              // minDate="2010-05-01"
              // maxDate="2018-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              customStyles={{
                dateText: {
                  color: "#ee5253"
                },
                dateInput: {
                  position: "absolute",
                  left: 0,
                  borderWidth: 0
                },
                placeholderText: {
                  position: "absolute",
                  left: 0,
                  fontSize: 17,
                  borderColor: "#ee5253",
                  color: "#ee5253"
                }
              }}
              onDateChange={date => {
                this.setState({ birthday: date, isFocused: true });
              }}
            />
          </View>

          <View marginT-50 center>
            <Button
              text70
              white
              background-orange30
              label="Register"
              onPress={this.onRegister}
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

// For custom input fill
Colors.loadColors({
  gold: "#FFD700",
  NasuPurple: "#5f27cd",
  JoustBlue: "#54a0ff"
});

Typography.loadTypographies({
  h1: { fontSize: 40, fontWeight: "300", lineHeight: 80 },
  h2: { fontSize: 46, fontWeight: "300", lineHeight: 64 }
});

SignUpScreen_UiLib.propTypes = {
  // registerUser: PropTypes.func.isRequired, //registerUser is function, make it is required
  // auth: PropTypes.object.isRequired, //auth is a object, make it is required
  // errors: PropTypes.object.isRequired
};

// const mapStateToProps = state => {
//   return {
//     errors: state.errors
//   };
// };

// export default connect(
//   mapStateToProps,
//   { registerUser }
// )(SignUpScreen_UiLib);
