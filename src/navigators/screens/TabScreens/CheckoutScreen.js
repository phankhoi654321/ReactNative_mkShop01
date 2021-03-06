import React, { Component } from "react";
import { View, Text, FlatList, ScrollView, Dimensions } from "react-native";
import ShoppingCartContainer from "../../../modules/ProductModule/containers/ShoppingCartContainer";
import ShoppingCartTotalContainer from "../../../modules/ProductModule/containers/ShoppingCartTotalContainer";

import QuantityComponent from "../../../modules/ProductModule/components/QuantityComponent";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

//Make a component Header
const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> Place Order </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    paddingTop: 20,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
    backgroundColor: "#3498db"
  },
  textStyle: {
    fontSize: 18,
    color: "white",
    fontWeight: "600"
  }
};


export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{}}>
        <Header />
        <ScrollView style={{ marginBottom: 100 }}>
          <View>
            <ShoppingCartContainer navigation={this.props.navigation} />
          </View>
        </ScrollView>
        {/* <View style={{ paddingTop: 6, paddingBottom: 60, position: "absolute", bottom: 60 }}> */}
        <View style={{ paddingTop: 6, paddingBottom: 60, position: "absolute", top: deviceHeight - 100, width: deviceWidth }}>
          <ShoppingCartTotalContainer />
        </View>

      </View>

    );
  }
}
