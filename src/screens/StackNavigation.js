import { createStackNavigator } from "react-navigation";
import SignInScreen_UiLib from "../components/SignInScreen_UiLib";
import SignUpScreen_UiLib from "../components/SignUpScreen_UiLib";

const StackNavigator = createStackNavigator({
  SigninScreen: {
    screen: SignInScreen_UiLib,
    navigationOptions: {
      title: "Sign In"
    }
  },
  SignUpScreen: {
    screen: SignUpScreen_UiLib,
    navigationOptions: {
      title: "Sign Up"
    }
  }
});

export default StackNavigator;
