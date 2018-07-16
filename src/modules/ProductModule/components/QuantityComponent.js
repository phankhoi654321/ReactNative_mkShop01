import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';

class QuantityComponent extends Component {
    render() {
        return (
            <View>
                <Text style={{
                    alignItems: 'center',
                    // padding: 3,
                    // marginTop: 10,
                    // marginLeft: 10
                    fontSize: 10
                }}> {this.props.totalQuantity} </Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    totalQuantity: state.shoppingCartReducer.totalQuantity
})

export default connect(mapStateToProps)(QuantityComponent)