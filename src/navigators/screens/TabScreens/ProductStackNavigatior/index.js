import { createStackNavigator } from "react-navigation";
import ProductScreen from "./ProductScreen";
import ProductDetailScreen from "./ProductDetailScreen";

const ProductStackNavigator = createStackNavigator({
  // ProductScreen: ProductScreen,
  ProductScreen: {
    screen: ProductScreen,
    navigationOptions: {
      title: "Products List",
      headerStyle: { backgroundColor: "#3498db" },
      headerTintColor: "white"
    }
  },

  ProductDetailScreen: ProductDetailScreen
});

export default ProductStackNavigator;
