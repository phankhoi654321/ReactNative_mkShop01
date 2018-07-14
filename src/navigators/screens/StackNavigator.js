import { createStackNavigator } from "react-navigation";
import SignInScreen_UiLib from "../../modules/AuthModule/components/SignInScreen_UiLib";
import SignUpScreen_UiLib from "../../modules/AuthModule/components/SignUpScreen_UiLib";
import SignUpContainer from "../../modules/AuthModule/containers/SignUpContainer";
import SignInContainer from "../../modules/AuthModule/containers/SignInContainer";

const StackNavigator = createStackNavigator({
  SignInScreen: {
    screen: SignInContainer,
    // screen: SignInScreen_UiLib,
    navigationOptions: {
      title: "Sign In"
    }
  },
  SignUpScreen: {
    screen: SignUpContainer,
    // screen: SignUpScreen_UiLib,
    navigationOptions: {
      title: "Sign Up"
    }
  }
});

export default StackNavigator;
