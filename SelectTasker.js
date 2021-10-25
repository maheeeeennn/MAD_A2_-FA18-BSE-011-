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

export default class SelectTasker extends Component {
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
        data-layer="da883849-1fa0-42d4-ac08-357f33433b3c"
        style={styles.selectTasker}>
        <View
          data-layer="6af177e6-6f3a-450f-9a13-a9e584ef0e43"
          style={styles.selectTasker_rectangle150}></View>
        <Text
          data-layer="df1c87cc-180a-4d64-a595-4b9ce84becef"
          style={styles.selectTasker_offeredPrice}>
          Offered Price
        </Text>
        <Text
          data-layer="246b9c4f-b2fa-4c81-9a27-f05c4fc66acc"
          style={styles.selectTasker_aliyaAhsan}>
          Aliya Ahsan
        </Text>
        <Text
          data-layer="9e783579-fe08-41d5-b170-80ddd8e6ef62"
          style={styles.selectTasker_orderAgain3caf28ef}>
          Order Again
        </Text>
        <Text
          data-layer="4874195e-55fd-4648-9a57-348b319df9e5"
          style={styles.selectTasker_orderAgain}>
          Order Again
        </Text>
        <ReactImage
          data-layer="0913b3e4-842d-45f4-af2a-1f4795e0b1b0"
          source={require("./assets/rectangle69.png")}
          style={styles.selectTasker_rectangle69}
        />
        <Text
          data-layer="ff25103b-9aa9-48ad-982d-e3545cd7cf66"
          style={styles.selectTasker_acceptOffer}>
          Accept Offer
        </Text>
        <ReactImage
          data-layer="62b7144d-a7ee-4b21-86c7-fe4351787248"
          source={require("./assets/nopathCopy241daf93b3.png")}
          style={styles.selectTasker_nopathCopy241daf93b3}
        />
        <ReactImage
          data-layer="27535a3a-ca99-4c8b-9295-4fe90684b63c"
          source={require("./assets/nopathCopy24d284488a.png")}
          style={styles.selectTasker_nopathCopy24d284488a}
        />
        <ReactImage
          data-layer="96431c5d-e9ed-44ea-bde7-142c38375fc4"
          source={require("./assets/nopathCopy24db104f1a.png")}
          style={styles.selectTasker_nopathCopy24db104f1a}
        />
        <ReactImage
          data-layer="43de098d-042b-4c8f-a71f-5593678b4397"
          source={require("./assets/nopathCopy24.png")}
          style={styles.selectTasker_nopathCopy24}
        />
        <Text
          data-layer="94bdea59-41c5-4b53-911f-9beda857be96"
          style={styles.selectTasker_rs700}>
          Rs 700
        </Text>
        <ReactImage
          data-layer="2b5e66f2-25a3-4e86-98e6-c97fde9db5fb"
          source={require("./assets/x7.png")}
          style={styles.selectTasker_x7}
        />
        <Text
          data-layer="fae2d91f-8cea-4351-b1a8-4185c5e0e6ae"
          style={styles.selectTasker_selectATasker}>
          Select a tasker
        </Text>
        <View
          data-layer="02124e3e-65fd-48bf-9e20-f3cb115de626"
          style={styles.selectTasker_barstimeBlack}>
          <Svg
            data-layer="53a769c1-fe5d-4dbd-b7e9-3293e45101e5"
            style={styles.selectTasker_barstimeBlack_background}
            preserveAspectRatio="none"
            viewBox="21 -35 54 16"
            fill="transparent">
            <SvgPath d="M 21 -19 L 75 -19 L 75 -35 L 21 -35 L 21 -19 Z" />
          </Svg>
        </View>
        <ReactImage
          data-layer="20eb0cde-d676-4ec4-8dfe-71ed7ef3622a"
          source={require("./assets/rectangle13.png")}
          style={styles.selectTasker_rectangle13}
        />
        <Text
          data-layer="55ea674b-9dcc-428d-bf68-fb27c72a4666"
          style={styles.selectTasker_requestsReview}>
          Requests Review
        </Text>
        <Svg
          data-layer="643810a4-9459-41ae-bbd6-75c8cf1b161b"
          style={styles.selectTasker_path23}
          preserveAspectRatio="none"
          viewBox="15.246183395385742 912.529052734375 27.74267578125 38"
          fill="transparent">
          <SvgPath d="M 33.98876953125 915.529052734375 L 18.24618339538574 928.1318359375 L 33.98876953125 938.529052734375" />
        </Svg>
      </ScrollView>
    );
  }
}

SelectTasker.propTypes = {};

SelectTasker.defaultProps = {};

const styles = StyleSheet.create({
  selectTasker: {
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
    width: 372,
    height: 812,
    left: 0,
    top: 0,
  },
  selectTasker_rectangle150: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 326,
    height: 138,
    left: 21,
    top: 166,
  },
  selectTasker_offeredPrice: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(55, 74, 190, 1)",
    fontSize: 16,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    lineHeight: 19.2,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 92,
    height: 24.2,
    left: 163,
    top: 231.9,
  },
  selectTasker_aliyaAhsan: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(67, 67, 67, 1)",
    fontSize: 16,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    lineHeight: 19.2,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 82,
    height: 24.2,
    left: 163,
    top: 182.9,
  },
  selectTasker_orderAgain3caf28ef: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 89,
    height: 21,
    left: 176,
    top: 584,
  },
  selectTasker_orderAgain: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 89,
    height: 21,
    left: 176,
    top: 741,
  },
  selectTasker_rectangle69: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    width: 156,
    height: 30,
    left: 166,
    top: 263,
  },
  selectTasker_acceptOffer: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
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
    width: 91,
    height: 19,
    left: 199,
    top: 269,
  },
  selectTasker_nopathCopy241daf93b3: {
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
    width: 19,
    height: 19,
    left: 163,
    top: 208,
  },
  selectTasker_nopathCopy24d284488a: {
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
    width: 19,
    height: 19,
    left: 181,
    top: 208,
  },
  selectTasker_nopathCopy24db104f1a: {
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
    width: 19,
    height: 19,
    left: 218,
    top: 208,
  },
  selectTasker_nopathCopy24: {
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
    width: 19,
    height: 19,
    left: 198,
    top: 208,
  },
  selectTasker_rs700: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(17, 100, 239, 1)",
    fontSize: 16,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    lineHeight: 19.2,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 50,
    height: 24.2,
    left: 263,
    top: 231.9,
  },
  selectTasker_x7: {
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
    width: 99,
    height: 99,
    left: 42,
    top: 189,
  },
  selectTasker_selectATasker: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(19, 101, 240, 1)",
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
    width: 228,
    height: 38,
    left: 77,
    top: 114,
  },
  selectTasker_barstimeBlack: {
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
  selectTasker_barstimeBlack_background: {
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
  selectTasker_rectangle13: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 43,
    width: 375,
    height: 54,
    left: 0,
    top: 31,
  },
  selectTasker_requestsReview: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 31,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 269,
    height: 51,
    left: 74,
    top: 34,
  },
  selectTasker_path23: {
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
    width: 29.74,
    height: 40,
    left: 16.35,
    top: 38.5,
  },
});
