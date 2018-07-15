import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import ShoppingCartContainer from "../../../modules/ProductModule/containers/ShoppingCartContainer";
import ShoppingCartTotalContainer from "../../../modules/ProductModule/containers/ShoppingCartTotalContainer";

export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View>
          <ShoppingCartContainer navigation={this.props.navigation} />
        </View>
        <View style={{ paddingTop: 6 }}>
          <ShoppingCartTotalContainer />
        </View>
      </View>
    );
  }
}
