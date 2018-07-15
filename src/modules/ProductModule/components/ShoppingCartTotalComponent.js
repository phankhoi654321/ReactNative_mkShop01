import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import { connect } from 'react-redux';



export default class ShoppingCartTotalComponent extends Component {
  formatCurrency(number) {
    var options = { style: 'currency', currency: 'USD', minimumFractionDigits: 0 };
    var numberFormat = new Intl.NumberFormat('en-US', options);
    return numberFormat.format(number);
  }

  render() {
    return (

      <View style={{
        backgroundColor: "#ecf0f1",
        padding: 10,
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 50
      }}>
        <Text style={{ color: '#2c3e50', fontWeight: '700', fontSize: 20 }}>
          Total Amount:
        </Text>
        <Text style={{ color: '#2c3e50', fontWeight: '700', fontSize: 20 }}>
          {this.formatCurrency(this.props.total)}
        </Text>
      </View>
    );
  }
}

