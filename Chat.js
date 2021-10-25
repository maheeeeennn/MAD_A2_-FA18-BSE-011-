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

export default class Chat extends Component {
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
        data-layer="6fc79ba4-9a28-464a-b4b2-a9285d1b3f3a"
        style={styles.chat}>
        <Svg
          data-layer="ec69ebd9-06b5-4b6c-bc7f-87f473a3e378"
          style={styles.chat_path32}
          preserveAspectRatio="none"
          viewBox="0 0 375 812"
          fill="rgba(245, 245, 245, 1)">
          <SvgPath d="M 0 0 L 375 0 L 375 812 L 0 812 L 0 0 Z" />
        </Svg>
        <View
          data-layer="1f38880c-656c-4844-bdf1-619c34007910"
          style={styles.chat_rectangle59}></View>
        <Text
          data-layer="74acb26f-29ce-42c2-96da-947439e2c2da"
          style={styles.chat_enterYourText}>
          Enter Your Text
        </Text>
        <Svg
          data-layer="7c51ebaf-c5ce-41ff-8d6c-026ed869861e"
          style={styles.chat_line4}
          preserveAspectRatio="none"
          viewBox="-1.5 -1.5 3 18"
          fill="transparent">
          <SvgPath d="M 0 0 L 0 15" />
        </Svg>
        <Svg
          data-layer="242c430b-01e1-4db9-b6b9-e65c6c5c9de4"
          style={styles.chat_line5}
          preserveAspectRatio="none"
          viewBox="-1.5 -1.5 21 3"
          fill="transparent">
          <SvgPath d="M 18 0 L 0 0" />
        </Svg>
        <Svg
          data-layer="e5e92a6e-a729-4b49-b067-de745dd5e520"
          style={styles.chat_line6}
          preserveAspectRatio="none"
          viewBox="-0.75 0 1.5 67.5"
          fill="transparent">
          <SvgPath d="M 0 67.5 L 0 0" />
        </Svg>
        <Svg
          data-layer="7c66fc11-502a-494c-bf4c-c360271c2ddc"
          style={styles.chat_ellipse14}
          preserveAspectRatio="none"
          viewBox="0 0 43 43"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-ellipse14"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/ellipse14.png")}
                x="0"
                y="0"
                width="43.00px"
                height="43.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 21.5 0 C 33.37412261962891 0 43 9.62587833404541 43 21.5 C 43 33.37412261962891 33.37412261962891 43 21.5 43 C 9.62587833404541 43 0 33.37412261962891 0 21.5 C 0 9.62587833404541 9.62587833404541 0 21.5 0 Z"
            fill="url(#img-ellipse14)"
          />
        </Svg>
        <Svg
          data-layer="d71eac36-c9ac-4f3c-95a9-80bc0a6feca6"
          style={styles.chat_path41}
          preserveAspectRatio="none"
          viewBox="-0.75 -2.07281494140625 26.5 46.82275390625"
          fill="rgba(255, 255, 255, 1)">
          <SvgPath d="M 9.5 -1.32281494140625 L 19 35 L 9.5 21.981689453125 L 0 35 L 9.5 -1.32281494140625 Z" />
        </Svg>
        <Svg
          data-layer="3455b45b-ae5f-47e1-9efa-b617b56431c5"
          style={styles.chat_woman11272014938284f}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 47.5 47.5"
          fill="rgba(255, 255, 255, 0)">
          <Defs>
            <Pattern
              id="img-woman11272014938284f"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/woman11272014938284f.png")}
                x="0"
                y="0"
                width="46.00px"
                height="46.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 23 0 C 35.70254898071289 0 46 10.29745101928711 46 23 C 46 35.70254898071289 35.70254898071289 46 23 46 C 10.29745101928711 46 0 35.70254898071289 0 23 C 0 10.29745101928711 10.29745101928711 0 23 0 Z"
            fill="url(#img-woman11272014938284f)"
          />
        </Svg>
        <Svg
          data-layer="3b7f8bce-1e35-445f-8f02-2000686eea2c"
          style={styles.chat_woman1127201}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 47.5 47.5"
          fill="rgba(255, 255, 255, 0)">
          <Defs>
            <Pattern
              id="img-woman1127201"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/woman1127201.png")}
                x="0"
                y="0"
                width="46.00px"
                height="46.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 23 0 C 35.70254898071289 0 46 10.29745101928711 46 23 C 46 35.70254898071289 35.70254898071289 46 23 46 C 10.29745101928711 46 0 35.70254898071289 0 23 C 0 10.29745101928711 10.29745101928711 0 23 0 Z"
            fill="url(#img-woman1127201)"
          />
        </Svg>
        <Svg
          data-layer="a6f06e80-8dd1-44bc-9130-2ef16c69354c"
          style={styles.chat_pexelsTunKitJr13827310fbbb2cb}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 47.5 47.5"
          fill="rgba(255, 255, 255, 0)">
          <Defs>
            <Pattern
              id="img-pexelsTunKitJr13827310fbbb2cb"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/pexelsTunKitJr13827310fbbb2cb.png")}
                x="0"
                y="0"
                width="46.00px"
                height="46.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 23 0 C 35.70254898071289 0 46 10.29745101928711 46 23 C 46 35.70254898071289 35.70254898071289 46 23 46 C 10.29745101928711 46 0 35.70254898071289 0 23 C 0 10.29745101928711 10.29745101928711 0 23 0 Z"
            fill="url(#img-pexelsTunKitJr13827310fbbb2cb)"
          />
        </Svg>
        <Svg
          data-layer="b22cc8c1-1ea4-4ede-a1f1-ff1fbfbdfeb2"
          style={styles.chat_pexelsTunKitJr1382731}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 47.5 47.5"
          fill="rgba(255, 255, 255, 0)">
          <Defs>
            <Pattern
              id="img-pexelsTunKitJr1382731"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/pexelsTunKitJr1382731.png")}
                x="0"
                y="0"
                width="46.00px"
                height="46.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 23 0 C 35.70254898071289 0 46 10.29745101928711 46 23 C 46 35.70254898071289 35.70254898071289 46 23 46 C 10.29745101928711 46 0 35.70254898071289 0 23 C 0 10.29745101928711 10.29745101928711 0 23 0 Z"
            fill="url(#img-pexelsTunKitJr1382731)"
          />
        </Svg>
        <View
          data-layer="961bf05a-583d-419b-9885-38fed4df7a88"
          style={styles.chat_rectangle61}></View>
        <Svg
          data-layer="bf39ef12-ee6e-4bf6-ad08-b555fc075d5f"
          style={styles.chat_path39}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 249.5 52.5"
          fill="rgba(180, 206, 242, 1)">
          <SvgPath d="M 25.5 0 L 222.5 0 C 236.5832672119141 0 248 11.41673851013184 248 25.5 C 248 39.58325958251953 236.5832672119141 51 222.5 51 L 25.5 51 C 11.41673851013184 51 0 39.58325958251953 0 25.5 C 0 11.41673851013184 11.41673851013184 0 25.5 0 Z" />
        </Svg>
        <View
          data-layer="bad6212f-3683-450e-962f-6ea1a898213d"
          style={styles.chat_rectangle62}></View>
        <Svg
          data-layer="370f55be-9d39-407f-9621-93e2e084713d"
          style={styles.chat_ellipse19}
          preserveAspectRatio="none"
          viewBox="0 0 18 18"
          fill="rgba(0, 0, 0, 1)">
          <SvgPath d="M 9 0 C 13.97056198120117 0 18 4.02943754196167 18 9 C 18 13.97056198120117 13.97056198120117 18 9 18 C 4.02943754196167 18 0 13.97056198120117 0 9 C 0 4.02943754196167 4.02943754196167 0 9 0 Z" />
        </Svg>
        <Svg
          data-layer="b0faa51c-51ff-4cf1-a95b-4573d13fe1bf"
          style={styles.chat_ellipse21}
          preserveAspectRatio="none"
          viewBox="0 0 4 4"
          fill="rgba(255, 255, 255, 1)">
          <SvgPath d="M 2 0 C 3.104569435119629 0 4 0.8954305648803711 4 2 C 4 3.104569435119629 3.104569435119629 4 2 4 C 0.8954305648803711 4 0 3.104569435119629 0 2 C 0 0.8954305648803711 0.8954305648803711 0 2 0 Z" />
        </Svg>
        <Svg
          data-layer="700a3ed4-9ebc-4cbf-98ec-54dee87fdd23"
          style={styles.chat_ellipse22}
          preserveAspectRatio="none"
          viewBox="0 0 4 4"
          fill="rgba(255, 255, 255, 1)">
          <SvgPath d="M 2 0 C 3.104569435119629 0 4 0.8954305648803711 4 2 C 4 3.104569435119629 3.104569435119629 4 2 4 C 0.8954305648803711 4 0 3.104569435119629 0 2 C 0 0.8954305648803711 0.8954305648803711 0 2 0 Z" />
        </Svg>
        <Svg
          data-layer="882125e0-2ef8-4a3c-850b-fb9cafce68c2"
          style={styles.chat_subtraction6}
          preserveAspectRatio="none"
          viewBox="2.7008053393728915e-7 3.999598741531372 4 10.0001220703125"
          fill="rgba(255, 255, 255, 1)">
          <SvgPath d="M 4.000100135803223 13.99979782104492 L 3.999599933624268 13.99979782104492 C 1.794212579727173 13.99952411651611 2.700805339372891e-07 11.75648784637451 2.700805339372891e-07 8.999698638916016 C 2.700805339372891e-07 6.242634296417236 1.794437408447266 3.999598741531372 4.000100135803223 3.999598741531372 L 4.000100135803223 13.99917316436768 L 4.000100135803223 13.99979782104492 Z" />
        </Svg>
        <Svg
          data-layer="08fc922b-5269-46e2-b922-7ff576618738"
          style={styles.chat_path40}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 249.5 52.5"
          fill="rgba(180, 206, 242, 1)">
          <SvgPath d="M 25.5 0 L 222.5 0 C 236.5832672119141 0 248 11.41673851013184 248 25.5 C 248 39.58325958251953 236.5832672119141 51 222.5 51 L 25.5 51 C 11.41673851013184 51 0 39.58325958251953 0 25.5 C 0 11.41673851013184 11.41673851013184 0 25.5 0 Z" />
        </Svg>
        <View
          data-layer="32ec75e9-bcb6-4313-a274-4d0996ec244e"
          style={styles.chat_barstimeBlack}>
          <Svg
            data-layer="0223fa68-5fa9-480f-b1be-cdd6d6d3a57d"
            style={styles.chat_barstimeBlack_background}
            preserveAspectRatio="none"
            viewBox="21 -35 54 16"
            fill="transparent">
            <SvgPath d="M 21 -19 L 75 -19 L 75 -35 L 21 -35 L 21 -19 Z" />
          </Svg>
        </View>
        <ReactImage
          data-layer="fd893537-8fee-46a1-8928-dfbf404940e7"
          source={require("./assets/rectangle13.png")}
          style={styles.chat_rectangle13}
        />
        <Text
          data-layer="4d2a729c-2064-4766-8bab-8724acbbd7ac"
          style={styles.chat_needAnElectritian}>
          Need An Electritian
        </Text>
        <Svg
          data-layer="b4160840-4cc2-44e0-bff2-9ed95a04fa0f"
          style={styles.chat_path23}
          preserveAspectRatio="none"
          viewBox="15.246183395385742 912.529052734375 27.74267578125 38"
          fill="transparent">
          <SvgPath d="M 33.98876953125 915.529052734375 L 18.24618339538574 928.1318359375 L 33.98876953125 938.529052734375" />
        </Svg>
      </ScrollView>
    );
  }
}

Chat.propTypes = {};

Chat.defaultProps = {};

const styles = StyleSheet.create({
  chat: {
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
  chat_path32: {
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
      height: 6,
    },
    shadowRadius: 9,
    width: 375,
    height: 812,
    left: 0,
    top: 0,
  },
  chat_rectangle59: {
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
    width: 374,
    height: 61,
    left: 0,
    top: 751,
  },
  chat_enterYourText: {
    opacity: 0.20000000298023224,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
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
    width: 164,
    height: 19,
    left: 80,
    top: 769,
  },
  chat_line4: {
    opacity: 0.6000000238418579,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 3,
    height: 18,
    left: 14,
    top: 753,
  },
  chat_line5: {
    opacity: 0.6000000238418579,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 21,
    height: 3,
    left: 5,
    top: 761,
  },
  chat_line6: {
    opacity: 0.6000000238418579,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 1.5,
    height: 67.5,
    left: 30.75,
    top: 745,
  },
  chat_ellipse14: {
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
    width: 43,
    height: 43,
    left: 328,
    top: 758,
  },
  chat_path41: {
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
    width: 25,
    height: 45.32,
    left: 342.66,
    top: 761.34,
  },
  chat_woman11272014938284f: {
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
    width: 46,
    height: 46,
    left: 323,
    top: 265,
  },
  chat_woman1127201: {
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
    width: 46,
    height: 46,
    left: 323,
    top: 542,
  },
  chat_pexelsTunKitJr13827310fbbb2cb: {
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
    width: 46,
    height: 46,
    left: 14,
    top: 360,
  },
  chat_pexelsTunKitJr1382731: {
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
    width: 46,
    height: 46,
    left: 14,
    top: 111,
  },
  chat_rectangle61: {
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
    borderTopWidth: 1,
    borderTopColor: "rgba(112, 112, 112, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(112, 112, 112, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(112, 112, 112, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(112, 112, 112, 1)",
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33,
    width: 245,
    height: 108,
    left: 65,
    top: 120,
  },
  chat_path39: {
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
    width: 248,
    height: 51,
    left: 64,
    top: 285,
  },
  chat_rectangle62: {
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
    borderTopWidth: 1,
    borderTopColor: "rgba(112, 112, 112, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(112, 112, 112, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(112, 112, 112, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(112, 112, 112, 1)",
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33,
    width: 245,
    height: 151,
    left: 65,
    top: 369,
  },
  chat_ellipse19: {
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
    width: 18,
    height: 18,
    left: 7,
    top: 788,
  },
  chat_ellipse21: {
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
    width: 4,
    height: 4,
    left: 10,
    top: 790,
  },
  chat_ellipse22: {
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
    width: 4,
    height: 4,
    left: 18,
    top: 790,
  },
  chat_subtraction6: {
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
    width: 4,
    height: 10,
    left: 14,
    top: 796,
  },
  chat_path40: {
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
    width: 248,
    height: 51,
    left: 64,
    top: 556,
  },
  chat_barstimeBlack: {
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
  chat_barstimeBlack_background: {
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
  chat_rectangle13: {
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
  chat_needAnElectritian: {
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
    width: 318,
    height: 51,
    left: 57,
    top: 34,
  },
  chat_path23: {
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
