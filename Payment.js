import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Picker,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Image as ReactImage } from "react-native";
import Svg, { Defs, Pattern } from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
import { Image as SvgImage } from "react-native-svg";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePress(target, owner) {
    if (this.props.onPress) {
      let name;
      let id;
      let index = -1;
      if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
          name = target.split("::")[0];
          id = target.split("::")[1];
        } else if (varCount === 3) {
          name = target.split("::")[0];
          index = parseInt(target.split("::")[1]);
          id = target.split("::")[2];
        }
      } else {
        name = target;
      }
      this.props.onPress({
        type: "button",
        name: name,
        index: index,
        id: id,
        owner: owner,
      });
    }
  }

  handleChangeTextinput(name, value) {
    let id;
    let index = -1;
    if (name.search("::") > -1) {
      const varCount = name.split("::").length;
      if (varCount === 2) {
        name = name.split("::")[0];
        id = name.split("::")[1];
      } else if (varCount === 3) {
        name = name.split("::")[0];
        index = name.split("::")[1];
        id = name.split("::")[2];
      }
    } else {
      name = name;
    }
    let state = this.state;
    state[name.split("::").join("")] = value;
    this.setState(state, () => {
      if (this.props.onChange) {
        this.props.onChange({
          type: "textinput",
          name: name,
          value: value,
          index: index,
          id: id,
        });
      }
    });
  }

  render() {
    return (
      <ScrollView
        data-layer="1af94ed7-3837-4de6-95a1-6a50c6d6f876"
        style={styles.payment}>
        <Svg
          data-layer="4d2a8e0b-96de-4407-a424-ec6a11867734"
          style={styles.payment_path33}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 382.5 66.5"
          fill="transparent">
          <SvgPath d="M 0 0 L 375 0 L 375 56 L 0 56 L 0 0 Z" />
        </Svg>
        <Svg
          data-layer="8b177c04-6a77-4eac-a322-b0bc0d117d3d"
          style={styles.payment_path25}
          preserveAspectRatio="none"
          viewBox="15.246183395385742 912.529052734375 24.6494140625 47.23291015625"
          fill="transparent">
          <SvgPath d="M 30.89558982849121 915.529052734375 L 18.24618339538574 933.1910400390625 L 30.89558982849121 947.7620849609375" />
        </Svg>
        <Text
          data-layer="e0df60f4-a6d5-4469-91b8-f04c33299b64"
          style={styles.payment_paymentRequired}>
          Payment Required
        </Text>
        <Text
          data-layer="ef0f3c0b-572d-40fd-b93c-2d126977a319"
          style={styles.payment_choosePaymentMethod}>
          Choose Payment Method
        </Text>
        <Text
          data-layer="22408c61-e88d-48fc-b340-323e255f982d"
          style={
            styles.payment_toGetThisTaskCompletedYouWillNeedToAddfundsToTheTaskDontWorryYourMoneyIsSecurelyHeldUntilTheTaskIsCompletedAndYouWillBeAbleToReleaseTheFunds
          }>
          To get this task completed you will need to add funds to the task.
          Don't worry! Your Money is securely held until the task is completed
          and you will be able to release the funds.
        </Text>
        <Svg
          data-layer="7c5c522b-ce66-49a9-b2f4-f9201f87b540"
          style={styles.payment_line7}
          preserveAspectRatio="none"
          viewBox="-9.5 -6.5 342 28"
          fill="transparent">
          <SvgPath d="M 0 0 L 317 0" />
        </Svg>
        <Svg
          data-layer="4ef1868a-ad45-42f4-b262-c7d3e03c4d65"
          style={styles.payment_line8}
          preserveAspectRatio="none"
          viewBox="-9.5 -6.5 342 28"
          fill="transparent">
          <SvgPath d="M 0 0 L 317 0" />
        </Svg>
        <Svg
          data-layer="0b7a06de-1271-46c4-9ba0-c2dca8d18cf4"
          style={styles.payment_line9}
          preserveAspectRatio="none"
          viewBox="-9.5 -6.5 342 28"
          fill="transparent">
          <SvgPath d="M 0 0 L 317 0" />
        </Svg>
        <Svg
          data-layer="5981dce1-5511-4651-acf4-3760520c299f"
          style={styles.payment_line10}
          preserveAspectRatio="none"
          viewBox="-9.5 -6.5 342 28"
          fill="transparent">
          <SvgPath d="M 0 0 L 317 0" />
        </Svg>
        <Svg
          data-layer="28d8ac4e-16ae-4347-9de3-050d0bd40390"
          style={styles.payment_line11}
          preserveAspectRatio="none"
          viewBox="-9.5 -6.5 342 28"
          fill="transparent">
          <SvgPath d="M 0 0 L 317 0" />
        </Svg>
        <Text
          data-layer="11b81eaf-9614-4d22-b635-a154f8db4710"
          style={styles.payment_creditdebitCard}>
          Credit/Debit Card
        </Text>
        <Text
          data-layer="c170df12-2d61-40b9-8b4c-a9f3bb314775"
          style={styles.payment_bankTransfer}>
          Bank Transfer
        </Text>
        <Text
          data-layer="a3173fbe-2271-4ef6-8964-da49aa3985f7"
          style={styles.payment_jazzCash}>
          Jazz Cash
        </Text>
        <Text
          data-layer="869d2c6f-6e50-4e8f-a3b6-0be43e3ee803"
          style={styles.payment_easypaisa}>
          easyPaisa
        </Text>
        <Text
          data-layer="a044453a-da67-40af-9547-8bfe75beb8a0"
          style={styles.payment_cashOnDelivery}>
          Cash On Delivery
        </Text>
        <ReactImage
          data-layer="9f5dcf45-5d41-42ef-81a5-60a4407f69fb"
          source={require("./assets/nopathCopy36.png")}
          style={styles.payment_nopathCopy36}
        />
        <ReactImage
          data-layer="751f7e7b-68f1-4f36-b763-00cf136f348b"
          source={require("./assets/nopathCopy37.png")}
          style={styles.payment_nopathCopy37}
        />
        <ReactImage
          data-layer="b063c667-f333-4b84-9786-f6319acf2fbc"
          source={require("./assets/nopathCopy38.png")}
          style={styles.payment_nopathCopy38}
        />
        <ReactImage
          data-layer="c787d3bc-6314-4dae-9f3d-c9185952dd8f"
          source={require("./assets/nopathCopy398fbf539e.png")}
          style={styles.payment_nopathCopy398fbf539e}
        />
        <ReactImage
          data-layer="db2c601e-52aa-4bcf-9bed-e0856062940f"
          source={require("./assets/nopathCopy39.png")}
          style={styles.payment_nopathCopy39}
        />
        <View
          data-layer="d40904c7-1453-4111-9b25-2f678da67060"
          style={styles.payment_barstimeBlack}>
          <Svg
            data-layer="02bf4255-9c05-4a3b-9948-507f812f9404"
            style={styles.payment_barstimeBlack_background}
            preserveAspectRatio="none"
            viewBox="21 -35 54 16"
            fill="transparent">
            <SvgPath d="M 21 -19 L 75 -19 L 75 -35 L 21 -35 L 21 -19 Z" />
          </Svg>
        </View>
        <ReactImage
          data-layer="7ca69b0d-72cb-499b-b228-869e2f336b14"
          source={require("./assets/rectangle56.png")}
          style={styles.payment_rectangle56}
        />
        <Text
          data-layer="c5c0f101-6f05-4303-bc3b-9b9f7e4e587d"
          style={styles.payment_confirm}>
          Confirm
        </Text>
      </ScrollView>
    );
  }
}

Payment.propTypes = {};

Payment.defaultProps = {};

const styles = StyleSheet.create({
  payment: {
    opacity: 1,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 371,
    height: 812,
    left: 0,
    top: 0,
  },
  payment_path33: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 381,
    height: 65,
    left: 0,
    top: 40,
  },
  payment_path25: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 26.65,
    height: 49.23,
    left: 13.35,
    top: 43.88,
  },
  payment_paymentRequired: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(112, 112, 112, 1)",
    fontSize: 31,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Lato",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 253,
    height: 38,
    left: 60,
    top: 43,
  },
  payment_choosePaymentMethod: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(26, 167, 0, 1)",
    fontSize: 25,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Lato",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 282,
    height: 30,
    left: 30,
    top: 113,
  },
  payment_toGetThisTaskCompletedYouWillNeedToAddfundsToTheTaskDontWorryYourMoneyIsSecurelyHeldUntilTheTaskIsCompletedAndYouWillBeAbleToReleaseTheFunds:
    {
      opacity: 1,
      position: "absolute",
      backgroundColor: "rgba(255, 255, 255, 0)",
      color: "rgba(112, 112, 112, 1)",
      fontSize: 15,
      fontWeight: "400",
      fontStyle: "normal",
      fontFamily: "Lato",
      textAlign: "left",
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      width: 308,
      height: 72,
      left: 31,
      top: 157,
    },
  payment_line7: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    shadowColor: "rgb(148,  167,  220)",
    shadowOpacity: 0.25098039215686274,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 342,
    height: 28,
    left: 19,
    top: 314,
  },
  payment_line8: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    shadowColor: "rgb(148,  167,  220)",
    shadowOpacity: 0.25098039215686274,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 342,
    height: 28,
    left: 19.5,
    top: 449,
  },
  payment_line9: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    shadowColor: "rgb(148,  167,  220)",
    shadowOpacity: 0.25098039215686274,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 342,
    height: 28,
    left: 18.5,
    top: 584,
  },
  payment_line10: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    shadowColor: "rgb(148,  167,  220)",
    shadowOpacity: 0.25098039215686274,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 342,
    height: 28,
    left: 19.5,
    top: 516,
  },
  payment_line11: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    shadowColor: "rgb(148,  167,  220)",
    shadowOpacity: 0.25098039215686274,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 342,
    height: 28,
    left: 19.5,
    top: 387,
  },
  payment_creditdebitCard: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(112, 112, 112, 1)",
    fontSize: 19,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Lato",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 168,
    height: 23,
    left: 30,
    top: 274,
  },
  payment_bankTransfer: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(112, 112, 112, 1)",
    fontSize: 19,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Lato",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 127,
    height: 23,
    left: 30,
    top: 345,
  },
  payment_jazzCash: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(112, 112, 112, 1)",
    fontSize: 19,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Lato",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 88,
    height: 23,
    left: 31,
    top: 417,
  },
  payment_easypaisa: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(112, 112, 112, 1)",
    fontSize: 19,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Lato",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 90,
    height: 23,
    left: 31,
    top: 478,
  },
  payment_cashOnDelivery: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(112, 112, 112, 1)",
    fontSize: 19,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Lato",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 162,
    height: 23,
    left: 30,
    top: 546,
  },
  payment_nopathCopy36: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 50,
    height: 50,
    left: 288,
    top: 260,
  },
  payment_nopathCopy37: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 50,
    height: 50,
    left: 288,
    top: 331,
  },
  payment_nopathCopy38: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 50,
    height: 50,
    left: 288,
    top: 532,
  },
  payment_nopathCopy398fbf539e: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 50,
    height: 50,
    left: 288,
    top: 403,
  },
  payment_nopathCopy39: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 50,
    height: 50,
    left: 288,
    top: 464,
  },
  payment_barstimeBlack: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 54,
    height: 16,
    left: 43,
    top: 4.27,
  },
  payment_barstimeBlack_background: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 54,
    height: 16,
    left: 0,
    top: 0,
  },
  payment_rectangle56: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: 119,
    height: 44,
    left: 216,
    top: 640,
  },
  payment_confirm: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "Lato",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 92,
    height: 29,
    left: 229.5,
    top: 647.5,
  },
});
