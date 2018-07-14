import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator, DrawerActions } from "react-navigation";
import HomeScreen from "./TabScreens/HomeScreen";
import IconBadge from "react-native-icon-badge";
import Ionicons from "react-native-vector-icons/Ionicons";

import CheckoutScreen from "./TabScreens/CheckoutScreen";
import HomeStackNavigator from "./TabScreens/HomeStackNavigator";
import MoreStackNavigator from "./TabScreens/MoreStackNavigator";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AccountScreen from "./TabScreens/AccountScreen";
import ProductStackNavigator from "./TabScreens/ProductStackNavigatior";

const styles = StyleSheet.create({
  icon: {
    color: "#ffffff"
  },
  label: {
    color: "#ffffff"
  }
});

// https://reactnavigation.org/docs/en/tab-navigator.html

const routeConfigs = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      tabBarIcon: <Icon style={styles.icon} name="home" size={24} />
    }
  },
  ProductStackNavigator: {
    screen: ProductStackNavigator,
    navigationOptions: {
      title: "Products",
      tabBarIcon: <Icon style={styles.icon} name="apps" size={24} />
    }
  },
  ShoppingCartScreen: {
    screen: CheckoutScreen,
    navigationOptions: {
      title: "Carts",
      // tabBarIcon: <Icon style={styles.icon} name="cart" size={24} />
      tabBarIcon: (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <IconBadge
            MainElement={
              // <Ionicons
              //   // style={{ margin: 10 }}
              //   name={"cart"}
              //   size={25}
              //   color={"white"}
              // />
              <Icon style={styles.icon} name="cart" size={24} />
            }
            BadgeElement={<Text style={{ color: "#FFFFFF" }}>{0}</Text>}
            IconBadgeStyle={{
              width: 15,
              height: 15,
              backgroundColor: "#e67e22",
              position: "absolute",
              left: 15,
              top: -2
            }}
            Hidden={false}
          />
        </View>
      )
    }
  },
  AccountScreen: {
    screen: AccountScreen,
    navigationOptions: {
      title: "Account",
      tabBarIcon: <Icon style={styles.icon} name="account" size={24} />
    }
  },
  MoreScreen: {
    screen: CheckoutScreen,
    navigationOptions: ({ navigation }) => ({
      title: "More",
      tabBarIcon: <Icon style={styles.icon} name="settings" size={24} />,
      tabBarOnPress: (previousScene, scene, jumpToIndex) => {
        //alert(scene);
        navigation.dispatch(DrawerActions.openDrawer());
      }
    })
  }
};

const bottomTabNavigatorConfig = {
  tabBarOptions: {
    labelStyle: styles.label,
    activeBackgroundColor: "#0652DD",
    inactiveBackgroundColor: "#0984e3"
  }
};

const TabNavigator = createBottomTabNavigator(
  routeConfigs,
  bottomTabNavigatorConfig
);

export default TabNavigator;
