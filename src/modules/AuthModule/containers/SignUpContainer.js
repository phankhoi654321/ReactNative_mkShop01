import { connect } from "react-redux";
import { registerUser } from "../actions";

import SignUpScreen_UiLib from "../components/SignUpScreen_UiLib";

const mapStateToProps = state => {
  console.log(state.errorReducer);
  return {
    errors: state.errorReducer
  };
};

const mapDispatchToProps = {
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen_UiLib);
