import { AppRegistry } from "react-native";
import App from "./App";
import SignInScreen_UiLib from "./src/components/SignInScreen_UiLib";
import SignUpScreen_UiLib from "./src/components/SignUpScreen_UiLib";
import Screens from "./src/screens";

console.disableYellowBox = true;
AppRegistry.registerComponent("mkShop", () => Screens);
