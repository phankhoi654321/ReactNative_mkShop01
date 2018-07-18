import React, { Component } from "react";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ActivityIndicator
} from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

class RenderItem extends Component {
  render() {
    return (
      <Card
        // title={this.props.item.title}
        image={{ uri: this.props.item.image }}
        imageStyle={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          overflow: "hidden",
        }}
        containerStyle={{
          flex: 1,
          width: deviceWidth / 2,
          // height: deviceHeight / 2,
          marginHorizontal: 5,
          marginVertical: 10,
          borderRadius: 10,
          backgroundColor: "#ecf0f1"
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              marginBottom: 10,
              fontSize: 16,
              fontWeight: "500",
              color: "#2c3e50"
            }}
          >
            {this.props.item.title}
          </Text>
          <Text
            style={{
              marginBottom: 10,
              color: "#2980b9",
              fontSize: 16,
              fontWeight: "700"
            }}
          >
            ${this.props.item.price}
          </Text>
        </View>

        <Button
          icon={{ name: "shopping-cart", fontSize: 10 }}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 20,
            padding: 5
            // marginLeft: 0,
            // marginRight: 0,
            // marginBottom: 0,

          }}
          textStyle={{
            fontSize: 14
          }}
          onPress={() => {
            // console.log("on press");
            this.props.addToCart(this.props.item, 1);
          }}
          title="Add To Cart"
        />
      </Card>
    );
  }
}

export default class ProductsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View>
        <View style={{}}>
          <FlatList
            data={this.props.products}
            renderItem={({ item, index }) => {
              // console.log(item);
              // console.log(`Item = ${JSON.stringify(item)}`);
              return <RenderItem item={item} index={index} addToCart={this.props.addToCart} />;
            }}
            // keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          // key={this.state.mode === "list" ? 1 : 0}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
