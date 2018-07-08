import { createSwitchNavigator } from "react-navigation";
import StackNavigator from "./StackNavigation";
// import TabNavigator from "./TabNavigator";
// import DrawerNavigator from "./DrawerNavigator";

const SwitchNavigator = createSwitchNavigator({
  Stack: StackNavigator
  //   Drawer: DrawerNavigator
  //Tab: TabNavigator,
});

export default SwitchNavigator;
