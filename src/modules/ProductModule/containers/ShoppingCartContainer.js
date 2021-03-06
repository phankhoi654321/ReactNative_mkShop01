import { connect } from 'react-redux';
// import { removeFromCart, hideShoppingCart } from '../Actions/shoppingCartAction';
import ShoppingCartComponent from '../components/ShoppingCartComponent';
import { increaseQuantity, decreaseQuantity, removeItem } from "../actions";

const mapStateToProps = (state) => ({
    addedProducts: state.shoppingCartReducer.addedProducts,
    // shoppingCartVisible: state.shoppingCartReducer.shoppingCartVisible,
});

const mapDispatchToProps = {
    increaseQuantity,
    decreaseQuantity,
    removeItem
    // hideShoppingCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartComponent);

