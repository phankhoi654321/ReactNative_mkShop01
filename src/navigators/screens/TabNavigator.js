import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator, DrawerActions } from "react-navigation";
import HomeScreen from "./TabScreens/HomeScreen";
import IconBadge from "react-native-icon-badge";
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux';

import CheckoutScreen from "./TabScreens/CheckoutScreen";
import HomeStackNavigator from "./TabScreens/HomeStackNavigator";
import MoreStackNavigator from "./TabScreens/MoreStackNavigator";
import QuantityComponent from "../../modules/ProductModule/components/QuantityComponent";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AccountScreen from "./TabScreens/AccountScreen";
import ProductStackNavigator from "./TabScreens/ProductStackNavigatior";
import { Button } from "react-native-elements";

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
    // navigationOptions: {
    navigationOptions: ({ navigation }) => ({
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
            MainElement={<Icon style={styles.icon} name="cart" size={24} />}
            BadgeElement={<QuantityComponent />}
            IconBadgeStyle={{
              width: 15,
              height: 15,
              backgroundColor: "#1abc9c",
              position: "absolute",
              left: 15,
              top: -2
            }}
            Hidden={false}
          />
        </View>
      )
    })
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

// const mapStateToProps = (state) => ({
//   totalQuantity: state.shoppingCartReducer.totalQuantity,
// })


// export default connect(mapStateToProps)(TabNavigator);
export default TabNavigator;


