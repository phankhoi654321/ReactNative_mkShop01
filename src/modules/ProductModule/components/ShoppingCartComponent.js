// import React, { Component } from 'react';
// import { StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 12
//   }
// });

// export default class ShoppingCartComponent extends Component {
//   renderItem = ({ item }) => {
//     let price = this.formatCurrency(item.product.price);
//     let sum = this.formatCurrency(item.quantity * item.product.price * (100 - item.product.discount) / 100);
//     return (
//       <View style={{ flex: 1, marginVertical: 2 }}>
//         <View style={{ width: '100%', flexDirection: 'row' }}>
//           <View style={{ flex: 1, justifyContent: 'center' }}>
//             <Text style={[styles.text, { fontWeight: '700' }]}>{item.product.name}</Text>
//           </View>
//           <View style={{ justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
//             <Text style={styles.text}>{price}</Text>
//           </View>
//           <View style={{ width: 40, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
//             <Text style={styles.text}>{item.product.discount}%</Text>
//           </View>
//           <View style={{ width: 30, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
//             <Text style={styles.text}>{item.quantity}</Text>
//           </View>
//           <View style={{ width: 70, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 8 }}>
//             <Text style={styles.text}>{sum}</Text>
//           </View>
//           <TouchableOpacity
//             style={{ padding: 6 }}
//             onPress={() => {
//               this.props.removeFromCart(item.product.id)
//             }}>
//             <Icon name="cart-off" size={16} color="#d63031" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }

//   formatCurrency(number) {
//     var options = { style: 'currency', currency: 'USD', minimumFractionDigits: 0 };
//     var numberFormat = new Intl.NumberFormat('en-US', options);
//     return numberFormat.format(number);
//   }

//   render() {
//     return (
//       // this.props.shoppingCartVisible &&
//       <View>
//         <View style={{ flexDirection: 'row', backgroundColor: '#d63031', padding: 4 }}>
//           <View>
//             <TouchableOpacity onPress={() => {
//               this.props.hideShoppingCart();
//             }}>
//               <Icon name="close-circle" size={22} color="#ffffff" />
//             </TouchableOpacity>
//           </View>
//           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 6 }}>
//             <Text style={{ fontWeight: '700', color: '#ffffff' }}>My Cart</Text>
//           </View>

//         </View>

//         <ScrollView style={{ padding: 6 }}>
//           <FlatList style={{ marginLeft: 2, marginRight: 2 }}
//             data={this.props.addedProducts}
//             renderItem={this.renderItem}
//             keyExtractor={(item, index) => index.toString()}
//           />
//         </ScrollView>
//       </View>
//     );
//   }
// }

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
// import { Card, ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


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

class RenderItem extends Component {

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
        <View style={{
          flex: 1, flexDirection: 'row',
          backgroundColor: this.props.index % 2 == 0 ? "#ecf0f1" : "#FFF"
        }}>
          <Image source={{ uri: this.props.item.image }} style={{ width: 100, height: 100, margin: 10 }} />
          <View style={{ flex: 2, flexDirection: 'column', height: 100, paddingTop: 10, paddingLeft: 10 }}>
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
              $ {this.props.item.price}
            </Text>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            borderLeftColor: "#bdc3c7", borderLeftWidth: 1,
          }}>
            <View style={{ borderLeftColor: "blue", borderLeftWidth: 2 }}>
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log("on press");
                this.props.increaseQuantity(this.props.item, 1);
              }}>
              <Text style={{
                alignItems: 'center',
                padding: 3,
                marginTop: 8,
                marginLeft: 10,
                fontSize: 16,
                color: "#3498db"
              }}> + </Text>
            </TouchableOpacity>
            <Text style={{
              alignItems: 'center',
              padding: 3,
              marginTop: 10,
              marginLeft: 10
            }}> {this.props.quantity} </Text>
            <TouchableOpacity
              onPress={() => {
                console.log("on press");
                this.props.decreaseQuantity(this.props.item, 1);
              }}
            >
              <Text style={{
                alignItems: 'center',
                padding: 3,
                marginTop: 10,
                marginLeft: 10,
                fontSize: 16,
                color: "#3498db"
              }}> - </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default class ShoppingCartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      // <View>

      <View>
        {/* <Header /> */}
        <FlatList
          data={this.props.addedProducts}
          renderItem={({ item, index }) => {

            // console.log(item);
            // console.log(`Item = ${JSON.stringify(item.product)}`);
            return <RenderItem quantity={item.quantity} item={item.product} index={index} increaseQuantity={this.props.increaseQuantity} decreaseQuantity={this.props.decreaseQuantity} />;
          }}
        // keyExtractor={(item, index) => index.toString()}
        // numColumns={2}
        // key={this.state.mode === "list" ? 1 : 0}
        />
      </View>
      // </View>
    );
  }
}
