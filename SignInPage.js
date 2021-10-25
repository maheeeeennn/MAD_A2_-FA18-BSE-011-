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

export default class SignInPage extends Component {
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
        data-layer="b60d3c5f-2f0e-40af-8b7e-43ae93c126c1"
        style={styles.signInPage}>
        <ReactImage
          data-layer="4d1fb9c6-8a28-42f2-933a-a991d341ac79"
          source={require("./assets/rectangle1f009bb9d.png")}
          style={styles.signInPage_rectangle1f009bb9d}
        />
        <ReactImage
          data-layer="2e3a4be1-9e1d-46dd-8232-ba7d70dbb46d"
          source={require("./assets/rectangle90.png")}
          style={styles.signInPage_rectangle90}
        />
        <Text
          data-layer="62ec9ec8-581d-4536-8abc-f9c235ecfef9"
          style={styles.signInPage_signIn}>
          SIGN IN
        </Text>
        <Text
          data-layer="88a5e220-f426-4678-9978-bf3106834b92"
          style={styles.signInPage_signInWith}>
          SIGN IN WITH :
        </Text>
        <View
          data-layer="c5416ba0-f880-4f81-95e5-942d07efd558"
          style={styles.signInPage_group1}>
          <Svg
            data-layer="5f03c0c7-7540-470a-9e68-4f8775e68320"
            style={styles.signInPage_group1_path2c9c46cb9}
            preserveAspectRatio="none"
            viewBox="569.9619750976562 463.4952697753906 61.59552001953125 38.799468994140625"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 613.808837890625 464.3234252929688 C 611.9342041015625 465.0107727050781 607.912109375 468.1812133789062 602.5657958984375 469.2697143554688 C 598.2349243164062 470.1526184082031 592.8812866210938 469.4954833984375 587.2781982421875 464.3234252929688 C 572.500244140625 462.8107299804688 568.776611328125 483.6395568847656 571.5693359375 493.6466979980469 C 574.3619995117188 503.6538391113281 590.7691040039062 501.210205078125 601.24169921875 501.3265991210938 C 611.7142333984375 501.4429626464844 628.0050048828125 503.3047790527344 630.2158813476562 493.6466979980469 C 632.4267578125 483.9886474609375 627.888671875 470.8397216796875 625.677734375 469.5597229003906 C 623.4669189453125 468.2797241210938 623.81591796875 464.7888793945312 613.808837890625 464.3234252929688 Z" />
          </Svg>
          <Svg
            data-layer="38f3e211-6c34-49d2-a281-d575803c240a"
            style={styles.signInPage_group1_ellipse17caab966}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 36.5 36.5"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 17.5 0 C 27.16498184204102 0 35 7.835017204284668 35 17.5 C 35 27.16498184204102 27.16498184204102 35 17.5 35 C 7.835017204284668 35 0 27.16498184204102 0 17.5 C 0 7.835017204284668 7.835017204284668 0 17.5 0 Z" />
          </Svg>
        </View>
        <ReactImage
          data-layer="0bc04655-549c-4cca-909d-4f8cd37be6a6"
          source={require("./assets/rectangle1.png")}
          style={styles.signInPage_rectangle1}
        />
        <ReactImage
          data-layer="406ac1c8-12b8-475a-bbac-7f15ff69402e"
          source={require("./assets/rectangle2.png")}
          style={styles.signInPage_rectangle2}
        />
        <Text
          data-layer="1a896c1e-8cc3-46ac-98b6-e19f18e23921"
          style={styles.signInPage_emailOrUsername06016bb0}>
          Email or Username
        </Text>
        <Text
          data-layer="a67dfeb3-7289-49d8-aa00-8e98a8527220"
          style={styles.signInPage_didntHaveAnAccount}>
          Didn't have an account :
        </Text>
        <Text
          data-layer="2b175eb1-9930-46ef-801b-a4a75a0a73dd"
          style={styles.signInPage_creatAccount}>
          Creat account
        </Text>
        <Text
          data-layer="4ad4ec5f-3c29-4459-be4f-7a3bce6a14da"
          style={styles.signInPage_yourPassword0f97a08c}>
          Your Password
        </Text>
        <ReactImage
          data-layer="ed591022-b11e-4ab7-9596-ff2bd3039552"
          source={require("./assets/facebook.png")}
          style={styles.signInPage_facebook}
        />
        <ReactImage
          data-layer="dbfe0881-c3fb-4eea-ad6c-f986895e8526"
          source={require("./assets/twitter.png")}
          style={styles.signInPage_twitter}
        />
        <ReactImage
          data-layer="3e934fc5-c201-4ac7-8ff4-9077622a9865"
          source={require("./assets/nopathCopy5.png")}
          style={styles.signInPage_nopathCopy5}
        />
        <Text
          data-layer="9d607399-524d-4f87-ae75-9dbf3778ac3b"
          style={styles.signInPage_labour11efaa0b}>
          Labour
        </Text>
        <Text
          data-layer="f8f76d32-55d8-41a5-9704-b0af155316ca"
          style={styles.signInPage_nieghbor}>
          Nieghbor
        </Text>
        <Svg
          data-layer="d11f7acb-f89d-48e7-99e5-c26f70e3fb5d"
          style={styles.signInPage_polygon6}
          preserveAspectRatio="none"
          viewBox="0 0 63.98876953125 55.99995422363281"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-polygon6"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/polygon6.png")}
                x="0"
                y="0"
                width="63.99px"
                height="56.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 31.99439430236816 0 L 63.98879241943359 55.99995422363281 L 0 55.99995422363281 Z"
            fill="url(#img-polygon6)"
          />
        </Svg>
        <Svg
          data-layer="3914d344-196c-4fbc-ae9f-c8eef0f8e927"
          style={styles.signInPage_polygon7}
          preserveAspectRatio="none"
          viewBox="0 0 63.98876953125 55.99995422363281"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-polygon7"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/polygon7.png")}
                x="0"
                y="0"
                width="63.99px"
                height="56.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 31.99439430236816 0 L 63.98879241943359 55.99995422363281 L 0 55.99995422363281 Z"
            fill="url(#img-polygon7)"
          />
        </Svg>
        <Svg
          data-layer="7de8a03d-e3a1-4cbd-9273-8cade1d3143a"
          style={styles.signInPage_polygon8}
          preserveAspectRatio="none"
          viewBox="0 0 63.98876953125 55.99994659423828"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-polygon8"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/polygon8.png")}
                x="0"
                y="0"
                width="63.99px"
                height="56.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 31.99439430236816 0 L 63.98879241943359 55.99995422363281 L 0 55.99995422363281 Z"
            fill="url(#img-polygon8)"
          />
        </Svg>
        <ReactImage
          data-layer="af940c98-93d8-48d6-bfd9-8dea4dc92e76"
          source={require("./assets/rectangle91.png")}
          style={styles.signInPage_rectangle91}
        />
        <ReactImage
          data-layer="ce9d7078-5c26-4150-adba-3ec0bcb950ed"
          source={require("./assets/rectangle92.png")}
          style={styles.signInPage_rectangle92}
        />
        <Text
          data-layer="887263c5-773d-41d8-8335-b7081c618fc4"
          style={styles.signInPage_logIn48da0208}>
          Log In{" "}
        </Text>
        <View
          data-layer="6c580c29-e927-4ef8-99d2-30806182b351"
          style={styles.signInPage_group21}>
          <Svg
            data-layer="0c7e7eb3-b23b-4ef9-a221-32761c768125"
            style={styles.signInPage_group21_path2}
            preserveAspectRatio="none"
            viewBox="569.9619750976562 463.4952697753906 61.595458984375 38.799468994140625"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 613.808837890625 464.3234252929688 C 611.9342041015625 465.0107727050781 607.912109375 468.1812133789062 602.5657958984375 469.2697143554688 C 598.2349243164062 470.1526184082031 592.8812866210938 469.4954833984375 587.2781982421875 464.3234252929688 C 572.500244140625 462.8107299804688 568.776611328125 483.6395568847656 571.5693359375 493.6466979980469 C 574.3619995117188 503.6538391113281 590.7691040039062 501.210205078125 601.24169921875 501.3265991210938 C 611.7142333984375 501.4429626464844 628.0050048828125 503.3047790527344 630.2158813476562 493.6466979980469 C 632.4267578125 483.9886474609375 627.888671875 470.8397216796875 625.677734375 469.5597229003906 C 623.4669189453125 468.2797241210938 623.81591796875 464.7888793945312 613.808837890625 464.3234252929688 Z" />
          </Svg>
          <Svg
            data-layer="8d0df6e0-fcf4-41ea-8a09-b8215518443a"
            style={styles.signInPage_group21_ellipse1}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 36.5 36.5"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 17.5 0 C 27.16498184204102 0 35 7.835017204284668 35 17.5 C 35 27.16498184204102 27.16498184204102 35 17.5 35 C 7.835017204284668 35 0 27.16498184204102 0 17.5 C 0 7.835017204284668 7.835017204284668 0 17.5 0 Z" />
          </Svg>
        </View>
        <ReactImage
          data-layer="30f56aa5-a980-477c-a67a-96a75ead598c"
          source={require("./assets/rectangle93.png")}
          style={styles.signInPage_rectangle93}
        />
        <ReactImage
          data-layer="9b75ac04-eefe-4a88-8eda-c5cfbe1fc736"
          source={require("./assets/rectangle94.png")}
          style={styles.signInPage_rectangle94}
        />
        <Text
          data-layer="708b8edd-c7a8-401f-9b42-32ba53ba2a49"
          style={styles.signInPage_emailOrUsername}>
          Email or Username
        </Text>
        <Text
          data-layer="af085138-0433-4084-a36d-197f86d48660"
          style={styles.signInPage_yourPassword}>
          Your Password
        </Text>
        <Text
          data-layer="16c4f889-53b1-4281-9648-ce36b0af787a"
          style={styles.signInPage_createAccount}>
          Create account
        </Text>
        <Text
          data-layer="a785bd10-c454-4994-b5ce-2886b98dc6e8"
          style={styles.signInPage_forgotPassword}>
          Forgot Password ?
        </Text>
        <View
          data-layer="64ab7b31-0bf7-458c-acf8-7aec3e3e75ee"
          style={styles.signInPage_group26}>
          <View
            data-layer="7de3d439-5319-4162-bf88-1be99c5aae30"
            style={styles.signInPage_group26_rectangle109}></View>
          <Text
            data-layer="1c95855c-1e65-4cbc-ad68-80d9d9063453"
            style={styles.signInPage_group26_logIn}>
            Log In
          </Text>
        </View>
        <Svg
          data-layer="55348728-68fd-4288-81ac-84320aa6d1ff"
          style={styles.signInPage_polygon14}
          preserveAspectRatio="none"
          viewBox="0 0 63.98876953125 55.99995422363281"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-polygon14"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/polygon14.png")}
                x="0"
                y="0"
                width="63.99px"
                height="56.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 31.99439430236816 0 L 63.98879241943359 55.99995422363281 L 0 55.99995422363281 Z"
            fill="url(#img-polygon14)"
          />
        </Svg>
        <Svg
          data-layer="31e23be1-6b11-4727-829d-da978d7167a6"
          style={styles.signInPage_polygon17}
          preserveAspectRatio="none"
          viewBox="0 0 63.98876953125 55.99995422363281"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-polygon17"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/polygon17.png")}
                x="0"
                y="0"
                width="63.99px"
                height="56.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 31.99439430236816 0 L 63.98879241943359 55.99995422363281 L 0 55.99995422363281 Z"
            fill="url(#img-polygon17)"
          />
        </Svg>
        <Svg
          data-layer="2fe46fce-edc8-43f7-99ea-6793021cc8dc"
          style={styles.signInPage_polygon15}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 71.73876953125 66.74994659423828"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-polygon15"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/polygon15.png")}
                x="0"
                y="0"
                width="63.99px"
                height="56.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 31.99439430236816 0 L 63.98879241943359 55.99995422363281 L 0 55.99995422363281 Z"
            fill="url(#img-polygon15)"
          />
        </Svg>
        <Text
          data-layer="57115433-3767-46b9-a14b-49517614f965"
          style={styles.signInPage_labour}>
          Labour
        </Text>
        <Text
          data-layer="acf32b48-1368-49cf-916a-c8581d737ab9"
          style={styles.signInPage_neighbour}>
          Neighbour
        </Text>
      </ScrollView>
    );
  }
}

SignInPage.propTypes = {};

SignInPage.defaultProps = {};

const styles = StyleSheet.create({
  signInPage: {
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
    width: 375,
    height: 812,
    left: 0,
    top: 0,
  },
  signInPage_rectangle1f009bb9d: {
    opacity: 0.8999999761581421,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 375,
    height: 717,
    left: 0,
    top: 84.5,
  },
  signInPage_rectangle90: {
    opacity: 0.8999999761581421,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 375,
    height: 774,
    left: 0,
    top: 38.5,
  },
  signInPage_signIn: {
    opacity: 0.8999999761581421,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 41,
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
    width: 150,
    height: 49,
    left: 122,
    top: 383,
  },
  signInPage_signInWith: {
    opacity: 0.8999999761581421,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
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
    width: 127,
    height: 22,
    left: 64,
    top: 699,
  },
  signInPage_group1: {
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
    width: 60.1,
    height: 73.1,
    left: 165.15,
    top: 310,
  },
  signInPage_group1_path2c9c46cb9: {
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
    width: 62.1,
    height: 39.3,
    left: -1,
    top: 34.8,
  },
  signInPage_group1_ellipse17caab966: {
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
    width: 35,
    height: 35,
    left: 12.85,
    top: 0,
  },
  signInPage_rectangle1: {
    opacity: 0.6000000238418579,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    width: 271,
    height: 31,
    left: 52,
    top: 436,
  },
  signInPage_rectangle2: {
    opacity: 0.6000000238418579,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    width: 271,
    height: 31,
    left: 52,
    top: 480,
  },
  signInPage_emailOrUsername06016bb0: {
    opacity: 0.6499999761581421,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    width: 164,
    height: 24,
    left: 105,
    top: 440,
  },
  signInPage_didntHaveAnAccount: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    width: 128,
    height: 24,
    left: 52,
    top: 531,
  },
  signInPage_creatAccount: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(30, 255, 224, 1)",
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
    width: 122,
    height: 18,
    left: 183,
    top: 531,
  },
  signInPage_yourPassword0f97a08c: {
    opacity: 0.6499999761581421,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    width: 129,
    height: 24,
    left: 123,
    top: 484,
  },
  signInPage_facebook: {
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
    width: 46,
    height: 46,
    left: 165,
    top: 731,
  },
  signInPage_twitter: {
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
    height: 51,
    left: 253,
    top: 728,
  },
  signInPage_nopathCopy5: {
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
    width: 48,
    height: 47,
    left: 75,
    top: 730,
  },
  signInPage_labour11efaa0b: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 61,
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
    width: 252,
    height: 73,
    left: 35,
    top: 98,
  },
  signInPage_nieghbor: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 56,
    fontWeight: "400",
    fontStyle: "italic",
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
    width: 270,
    height: 67,
    left: 71,
    top: 153.5,
  },
  signInPage_polygon6: {
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
    width: 63.99,
    height: 56,
    left: 39.16,
    top: 49,
  },
  signInPage_polygon7: {
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
    width: 63.99,
    height: 56,
    left: 103.15,
    top: 49,
  },
  signInPage_polygon8: {
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
    width: 63.99,
    height: 56,
    left: 71.16,
    top: 49,
  },
  signInPage_rectangle91: {
    opacity: 0.8999999761581421,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 375,
    height: 812.5,
    left: 0,
    top: 0,
  },
  signInPage_rectangle92: {
    opacity: 0.8999999761581421,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 375,
    height: 803.5,
    left: 0,
    top: 0,
  },
  signInPage_logIn48da0208: {
    opacity: 0.8999999761581421,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
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
    width: 79,
    height: 33,
    left: 155,
    top: 375,
  },
  signInPage_group21: {
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
    width: 60.1,
    height: 73.1,
    left: 157.45,
    top: 292.9,
  },
  signInPage_group21_path2: {
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
    width: 62.1,
    height: 39.3,
    left: -1,
    top: 34.8,
  },
  signInPage_group21_ellipse1: {
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
    width: 35,
    height: 35,
    left: 12.85,
    top: 0,
  },
  signInPage_rectangle93: {
    opacity: 0.6000000238418579,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    width: 271,
    height: 31,
    left: 52,
    top: 436,
  },
  signInPage_rectangle94: {
    opacity: 0.6000000238418579,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    width: 271,
    height: 31,
    left: 52,
    top: 482,
  },
  signInPage_emailOrUsername: {
    opacity: 0.6499999761581421,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    width: 164,
    height: 24,
    left: 99,
    top: 441,
  },
  signInPage_yourPassword: {
    opacity: 0.6499999761581421,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    width: 129,
    height: 24,
    left: 105,
    top: 484,
  },
  signInPage_createAccount: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
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
    width: 108,
    height: 19,
    left: 253,
    top: 242,
  },
  signInPage_forgotPassword: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
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
    width: 104,
    height: 16,
    left: 226,
    top: 539,
  },
  signInPage_group26: {
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
    width: 125,
    height: 37,
    left: 125,
    top: 587,
  },
  signInPage_group26_rectangle109: {
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
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    width: 125,
    height: 37,
    left: 0,
    top: 0,
  },
  signInPage_group26_logIn: {
    opacity: 0.8999999761581421,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(33, 30, 212, 1)",
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
    width: 67,
    height: 30,
    left: 30,
    top: 4,
  },
  signInPage_polygon14: {
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
    width: 63.99,
    height: 56,
    left: 41.16,
    top: 48.5,
  },
  signInPage_polygon17: {
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
    width: 63.99,
    height: 56,
    left: 105.15,
    top: 48.5,
  },
  signInPage_polygon15: {
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
    width: 73.49,
    height: 68.5,
    left: 71.66,
    top: 47,
  },
  signInPage_labour: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36,
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
    width: 149,
    height: 44,
    left: 18,
    top: 117,
  },
  signInPage_neighbour: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 39,
    fontWeight: "400",
    fontStyle: "italic",
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
    width: 215,
    height: 46,
    left: 80,
    top: 156,
  },
});
