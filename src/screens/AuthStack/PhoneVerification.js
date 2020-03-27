import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from 'react-redux'
import { OutlinedTextField } from "react-native-material-textfield";
import { RaisedTextButton } from "react-native-material-buttons";

import VerifyPhoneActions from '../../reducers/verifyReducer'
// plugins
import I18n from "../../plugins/I18n";

//Custom Components
import Heading from "../../components/Heading";
import CardView from "../../components/CardView";
//Theme
import { Styles, Colors } from "../../../theme";

const WRITING_STYLE = I18n.locale;
 class PhoneVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  phoneFieldRef = React.createRef();
  onSubmit = () => {
    let { current: field } = this.phoneFieldRef;
    this.setState({'phone':field.value()})
    this.props.verifyPhoneNumber(this.state.phone)
  };

  formatText = text => {
    return text.replace(/[^+\d]/g, "");
  };
  render() {
    const style = WRITING_STYLE === "ur" ? { writingDirection: "rtl" } : {};
    return (
      <View style={Styles.container}>
        <Heading headerText={I18n.t(`headings.SMSVERIFICATION`)} />
        <Text style={[Styles.topParagraph, style]}>
          {I18n.t(`Paragarphs.PHONEVERIFICATION`)}
        </Text>
        <CardView Styles={Styles.Spacer50} />
        <View style={screenStyles.textInput}>
          <OutlinedTextField
            label={I18n.t(`Labels.PHONENUMBER`)}
            keyboardType="phone-pad"
            placeholder={I18n.t(`Labels.VERIFICATION_CODE_EAMPLE`)}
            tintColor={Colors.primaryColor}
            formatText={this.formatText}
            onSubmitEditing={this.onSubmit}
            ref={this.phoneFieldRef}
          />
        </View>
        <CardView Styles={Styles.Spacer300} />
        <View style={Styles.rightButtonContainer}>
          <RaisedTextButton
            title={I18n.t(`ButtonTitles.CONTINUE`)}
            color={Colors.primaryColor}
            titleColor={Colors.buttonTextColor}
            shadeBorderRadius={1.5}
            style={Styles.smallButton}
            onPress={this.onSubmit}
          />
        </View>
      </View>
    );
  }
}

const screenStyles = StyleSheet.create({
  textInput: {
    paddingTop: 20,
    paddingLeft: 35,
    paddingRight: 35
  }
});

const mapStateToProps = (state) => {
  return {
    getCodeSuccess: state.getCodeSuccess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    verifyPhoneNumber: (phone) => dispatch(VerifyPhoneActions.getCodeRequest(phone)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneVerification) 