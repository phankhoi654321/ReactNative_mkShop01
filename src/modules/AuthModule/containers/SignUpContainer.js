import { connect } from "react-redux";
import { registerUser } from "../actions";

import SignUpScreen_UiLib from "../components/SignUpScreen_UiLib";

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = {
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen_UiLib);
