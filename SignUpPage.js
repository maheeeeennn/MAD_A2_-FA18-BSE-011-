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

export default class SignUpPage extends Component {
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
        data-layer="c4804b6c-0669-4740-85c5-cf2510611492"
        style={styles.signUpPage}>
        <ReactImage
          data-layer="d73563a0-8eb2-4ae4-8a43-16620a2792fb"
          source={require("./assets/rectangle103.png")}
          style={styles.signUpPage_rectangle103}
        />
        <ReactImage
          data-layer="8834791b-cdc8-4223-98d2-57bba404c0a8"
          source={require("./assets/rectangle104.png")}
          style={styles.signUpPage_rectangle104}
        />
        <ReactImage
          data-layer="798dd62e-1b20-4646-956e-340f8c59c94b"
          source={require("./assets/rectangle99.png")}
          style={styles.signUpPage_rectangle99}
        />
        <ReactImage
          data-layer="1b22fe43-f248-4ba9-bcce-2667fe2030f2"
          source={require("./assets/rectangle101.png")}
          style={styles.signUpPage_rectangle101}
        />
        <ReactImage
          data-layer="3ceca407-900b-4019-ae6a-0d4a60da4686"
          source={require("./assets/rectangle106.png")}
          style={styles.signUpPage_rectangle106}
        />
        <Svg
          data-layer="90f1fed8-02a0-4391-8c1a-83a9729c0ee6"
          style={styles.signUpPage_polygon12}
          preserveAspectRatio="none"
          viewBox="0 0 63.988800048828125 55.99995422363281"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-polygon12"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/polygon12.png")}
                x="0"
                y="0"
                width="63.99px"
                height="56.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 31.99439430236816 0 L 63.98879241943359 55.99995422363281 L 0 55.99995422363281 Z"
            fill="url(#img-polygon12)"
          />
        </Svg>
        <Svg
          data-layer="88d7471e-691e-4fa6-b311-2ec7112f6ce1"
          style={styles.signUpPage_polygon16}
          preserveAspectRatio="none"
          viewBox="0 0 63.98876953125 55.99995422363281"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-polygon16"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/polygon16.png")}
                x="0"
                y="0"
                width="63.99px"
                height="56.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 31.99439430236816 0 L 63.98879241943359 55.99995422363281 L 0 55.99995422363281 Z"
            fill="url(#img-polygon16)"
          />
        </Svg>
        <Svg
          data-layer="07f06e59-cdb8-4bd3-9a94-29f28b1c095a"
          style={styles.signUpPage_polygon13}
          preserveAspectRatio="none"
          viewBox="0 0 63.988800048828125 55.99994659423828"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-polygon13"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/polygon13.png")}
                x="0"
                y="0"
                width="63.99px"
                height="56.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 31.99439430236816 0 L 63.98879241943359 55.99995422363281 L 0 55.99995422363281 Z"
            fill="url(#img-polygon13)"
          />
        </Svg>
        <Text
          data-layer="274be5db-3ae9-4dd9-a5c3-77bb2198357a"
          style={styles.signUpPage_signUp007623c7}>
          Sign up
        </Text>
        <View
          data-layer="1d20f3a1-92be-4f16-8e29-ca60f1ba4405"
          style={styles.signUpPage_group23}>
          <Svg
            data-layer="66f66d82-0241-4625-a45e-fd3437fd63b8"
            style={styles.signUpPage_group23_path2}
            preserveAspectRatio="none"
            viewBox="569.9619750976562 463.4952697753906 61.59552001953125 38.799468994140625"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 613.808837890625 464.3234252929688 C 611.9342041015625 465.0107727050781 607.912109375 468.1812133789062 602.5657958984375 469.2697143554688 C 598.2349243164062 470.1526184082031 592.8812866210938 469.4954833984375 587.2781982421875 464.3234252929688 C 572.500244140625 462.8107299804688 568.776611328125 483.6395568847656 571.5693359375 493.6466979980469 C 574.3619995117188 503.6538391113281 590.7691040039062 501.210205078125 601.24169921875 501.3265991210938 C 611.7142333984375 501.4429626464844 628.0050048828125 503.3047790527344 630.2158813476562 493.6466979980469 C 632.4267578125 483.9886474609375 627.888671875 470.8397216796875 625.677734375 469.5597229003906 C 623.4669189453125 468.2797241210938 623.81591796875 464.7888793945312 613.808837890625 464.3234252929688 Z" />
          </Svg>
          <Svg
            data-layer="ae7b59de-d98e-4c31-a770-3ae1a6ef3f82"
            style={styles.signUpPage_group23_ellipse1}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 36.5 36.5"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 17.5 0 C 27.16498184204102 0 35 7.835017204284668 35 17.5 C 35 27.16498184204102 27.16498184204102 35 17.5 35 C 7.835017204284668 35 0 27.16498184204102 0 17.5 C 0 7.835017204284668 7.835017204284668 0 17.5 0 Z" />
          </Svg>
        </View>
        <View
          data-layer="a4172f84-55c6-4459-afd7-8db44450b150"
          style={styles.signUpPage_group24}>
          <Text
            data-layer="9eb0fb5c-0d03-4c12-89d2-71a36c767e31"
            style={styles.signUpPage_group24_emailOrUsername}>
            Email or Username
          </Text>
          <Text
            data-layer="770f9cc4-44d2-45c8-a22e-d2585120f24b"
            style={styles.signUpPage_group24_password}>
            Password
          </Text>
          <Text
            data-layer="baf9afe7-14a3-4660-a733-5fdfddecf609"
            style={styles.signUpPage_group24_confirmPassword}>
            Confirm Password
          </Text>
        </View>
        <Text
          data-layer="2363002d-2992-4ad0-8b87-7c9d66bcb787"
          style={styles.signUpPage_labour}>
          Labour
        </Text>
        <Text
          data-layer="56476ad9-60a6-4b5f-ba70-8b3f0cc3516e"
          style={styles.signUpPage_neighbour}>
          Neighbour
        </Text>
        <Svg
          data-layer="9eff3a20-3456-4ade-9b13-4214c5427573"
          style={styles.signUpPage_polygon14}
          preserveAspectRatio="none"
          viewBox="0 0 63.988800048828125 55.99995422363281"
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
          data-layer="e1bad232-962e-42a1-b04b-ba08b9a4125d"
          style={styles.signUpPage_polygon17}
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
          data-layer="85d3541c-e7d0-4943-9b94-16018fb08581"
          style={styles.signUpPage_polygon15}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 71.73880004882812 66.74994659423828"
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
        <View
          data-layer="eaacb4bf-b9ba-44c9-bf6c-0619ccf2a803"
          style={styles.signUpPage_iconview}>
          <Svg
            data-layer="6e2226b9-389f-4cfb-aeb0-3d33f7bfd4db"
            style={styles.signUpPage_iconview_view}
            preserveAspectRatio="none"
            viewBox="-0.7499999999999929 -0.75 18.7454833984375 13.228759765625"
            fill="rgba(198, 203, 212, 1)">
            <SvgPath d="M 8.641387939453125 11.72873878479004 C 6.713445663452148 11.72873878479004 4.944219589233398 11.17982006072998 3.382848978042603 10.0972375869751 C 1.820979118347168 9.015143394470215 0.6828296184539795 7.590855121612549 7.105427357601002e-15 5.863946437835693 C 0.6824907660484314 4.137875556945801 1.820649743080139 2.713830232620239 3.382848978042603 1.630656957626343 C 4.945462703704834 0.5486284494400024 6.714687347412109 0 8.641387939453125 0 C 10.56757926940918 0 12.33054542541504 0.5486284494400024 13.88128662109375 1.630656957626343 C 15.43059062957764 2.713098526000977 16.56247329711914 4.137387275695801 17.24549865722656 5.863946437835693 C 16.56233978271484 7.591671466827393 15.43045997619629 9.015725135803223 13.88128662109375 10.0972375869751 C 12.331787109375 11.17982006072998 10.56882190704346 11.72873878479004 8.641387939453125 11.72873878479004 Z M 8.641387939453125 1.942263722419739 C 7.567379951477051 1.942263722419739 6.633309841156006 2.330932140350342 5.865130424499512 3.097488403320312 C 5.096658229827881 3.862627744674683 4.707014560699463 4.793403625488281 4.707014560699463 5.863946437835693 C 4.707014560699463 6.935054302215576 5.096658229827881 7.866111278533936 5.865130424499512 8.631251335144043 C 6.633309841156006 9.397806167602539 7.567379951477051 9.786476135253906 8.641387939453125 9.786476135253906 C 9.714878082275391 9.786476135253906 10.64267826080322 9.397797584533691 11.39900588989258 8.631251335144043 C 12.15510845184326 7.865755081176758 12.53848361968994 6.934698104858398 12.53848361968994 5.863946437835693 C 12.53848361968994 4.793750762939453 12.15510845184326 3.862984180450439 11.39900588989258 3.097488403320312 C 10.64267826080322 2.330941677093506 9.714878082275391 1.942263722419739 8.641387939453125 1.942263722419739 Z M 8.622749328613281 8.20986270904541 C 7.97542667388916 8.20986270904541 7.418744564056396 7.981719017028809 6.968178272247314 7.531760215759277 C 6.516764163970947 7.081812858581543 6.287880420684814 6.520677089691162 6.287880420684814 5.863946437835693 C 6.287880420684814 5.207781314849854 6.516764163970947 4.646926879882812 6.968178272247314 4.196978092193604 C 7.418744564056396 3.747020959854126 7.97542667388916 3.518875122070312 8.622749328613281 3.518875122070312 C 9.269808769226074 3.518875122070312 9.83275032043457 3.747020959854126 10.29595947265625 4.196978092193604 C 10.75917720794678 4.646110534667969 10.99404716491699 5.206955432891846 10.99404716491699 5.863946437835693 C 10.99404716491699 6.521492958068848 10.75917720794678 7.08262825012207 10.29595947265625 7.531760215759277 C 9.83275032043457 7.981719017028809 9.269808769226074 8.20986270904541 8.622749328613281 8.20986270904541 Z" />
          </Svg>
        </View>
        <View
          data-layer="ae77b689-244e-42c4-91b8-ef0df67bfac5"
          style={styles.signUpPage_rectangle108}></View>
        <Text
          data-layer="747ec69b-5aff-4950-b072-3830266dd943"
          style={styles.signUpPage_signUp}>
          Sign up
        </Text>
        <Text
          data-layer="6bffb787-1fcc-44f0-9e70-c44fadc3a62b"
          style={styles.signUpPage_signIn}>
          Sign In{" "}
        </Text>
        <Text
          data-layer="2e51bc46-9da5-434f-b836-fd029ebf41f2"
          style={styles.signUpPage_or}>
          or
        </Text>
        <View
          data-layer="2b78fdb7-e25b-4528-a0c6-ad4b85bbd283"
          style={styles.signUpPage_group25}>
          <ReactImage
            data-layer="54ce0def-4c20-492f-82ad-a1f6cda32ed8"
            source={require("./assets/facebook.png")}
            style={styles.signUpPage_group25_facebook}
          />
          <ReactImage
            data-layer="43bd52f2-22c6-4c7e-a2a7-b189351de2f8"
            source={require("./assets/twitter.png")}
            style={styles.signUpPage_group25_twitter}
          />
          <ReactImage
            data-layer="10a93e0b-7a55-427d-9db6-ff4fbc2e1fa3"
            source={require("./assets/nopathCopy27.png")}
            style={styles.signUpPage_group25_nopathCopy27}
          />
        </View>
      </ScrollView>
    );
  }
}

SignUpPage.propTypes = {};

SignUpPage.defaultProps = {};

const styles = StyleSheet.create({
  signUpPage: {
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
  signUpPage_rectangle103: {
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
    height: 802,
    left: 0,
    top: 0,
  },
  signUpPage_rectangle104: {
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
    height: 812,
    left: 0,
    top: 0,
  },
  signUpPage_rectangle99: {
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
    left: 54,
    top: 435.5,
  },
  signUpPage_rectangle101: {
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
    left: 54,
    top: 479.5,
  },
  signUpPage_rectangle106: {
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
    top: 525.5,
  },
  signUpPage_polygon12: {
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
  signUpPage_polygon16: {
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
  signUpPage_polygon13: {
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
    left: 73.16,
    top: 48.5,
  },
  signUpPage_signUp007623c7: {
    opacity: 0.8999999761581421,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
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
    width: 82,
    height: 30,
    left: 150,
    top: 376,
  },
  signUpPage_group23: {
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
    left: 157,
    top: 295.5,
  },
  signUpPage_group23_path2: {
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
  signUpPage_group23_ellipse1: {
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
  signUpPage_group24: {
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
    width: 164,
    height: 114,
    left: 113,
    top: 439,
  },
  signUpPage_group24_emailOrUsername: {
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
    left: 0,
    top: 0,
  },
  signUpPage_group24_password: {
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
    width: 84,
    height: 24,
    left: 0,
    top: 44,
  },
  signUpPage_group24_confirmPassword: {
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
    width: 160,
    height: 24,
    left: 0,
    top: 90,
  },
  signUpPage_labour: {
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
  signUpPage_neighbour: {
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
  signUpPage_polygon14: {
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
  signUpPage_polygon17: {
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
  signUpPage_polygon15: {
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
  signUpPage_iconview: {
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
    width: 17.25,
    height: 11.73,
    left: 295.5,
    top: 489.25,
  },
  signUpPage_iconview_view: {
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
    width: 19.25,
    height: 13.73,
    left: -1,
    top: -1,
  },
  signUpPage_rectangle108: {
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
    left: 125,
    top: 588,
  },
  signUpPage_signUp: {
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
    width: 82,
    height: 30,
    left: 147,
    top: 592,
  },
  signUpPage_signIn: {
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
    width: 62,
    height: 16,
    left: 277,
    top: 570,
  },
  signUpPage_or: {
    opacity: 0.550000011920929,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
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
    width: 28,
    height: 36,
    left: 174,
    top: 641,
  },
  signUpPage_group25: {
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
    width: 228,
    height: 50,
    left: 75,
    top: 712,
  },
  signUpPage_group25_facebook: {
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
    height: "auto",
    left: 90,
    top: 0,
    bottom: 0,
  },
  signUpPage_group25_twitter: {
    opacity: 0.5,
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
    height: "auto",
    top: 0,
    right: 0,
    bottom: 0,
  },
  signUpPage_group25_nopathCopy27: {
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
    left: 0,
    top: 0,
  },
});
