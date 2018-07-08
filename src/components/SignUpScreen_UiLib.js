import React, { Component } from "react";
import { StyleSheet } from "react-native";
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
import ShoppingBackground from "../images/shopping.jpg";
import DatePicker from "react-native-datepicker";

export default class SignUpScreen_UiLib extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      isFocused: false
    };
  }
  render() {
    const { isFocused } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={ShoppingBackground}
          resizeMode="stretch"
          style={styles.backgroundImage}
        />

        <View flex paddingH-25 paddingT-50 style={styles.viewStyle}>
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
            dark10
          />
          <View>
            <TextInput
              text70
              placeholder="Email"
              placeholderTextColor="#ee5253"
              floatingPlaceholder
              floatingPlaceholderColor="#ee5253"
              underlineColor="#ee5253"
              dark10
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
          />
          <TextInput
            text70
            placeholder="Confirm Password"
            placeholderTextColor="#ee5253"
            secureTextEntry
            floatingPlaceholder
            floatingPlaceholderColor="#ee5253"
            underlineColor="#ee5253"
            dark10
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
              date={this.state.date}
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
                this.setState({ date: date, isFocused: true });
              }}
            />
          </View>

          <View marginT-50 center>
            <Button text70 white background-orange30 label="Register" />
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
