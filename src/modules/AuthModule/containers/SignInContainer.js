import { connect } from "react-redux";
import { loginUser } from "../actions";

import SignInScreen_UiLib from "../components/SignInScreen_UiLib";

const mapStateToProps = state => {
  // console.log(state.errorReducer);
  return {
    errors: state.errorReducer,
    auth: state.authReducer
  };
};

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen_UiLib);
