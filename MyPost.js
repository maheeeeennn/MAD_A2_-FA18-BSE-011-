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

export default class MyPosts extends Component {
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
        data-layer="834af243-131e-4849-9708-9e0bdb8309e2"
        style={styles.myPosts}>
        <Svg
          data-layer="3a2cbba9-246d-45e1-bfb5-a9cbcfdadcf9"
          style={styles.myPosts_path46}
          preserveAspectRatio="none"
          viewBox="-0.3916558623313904 -0.24638301134109497 335.394775390625 39.35130310058594"
          fill="rgba(255, 255, 255, 1)">
          <SvgPath d="M 0 0 L 335 0 C 335 -2.0201416015625 335 8.730446815490723 335 19.5 C 335 30.26955413818359 335.0071411132812 40.241455078125 335 39 L 225.5444641113281 39 L 0 39 C 0.44061279296875 38.10382080078125 0 30.26955413818359 0 19.5 C 0 8.730446815490723 -0.8812255859375 0.2095947265625 0 0 Z" />
        </Svg>
        <Text
          data-layer="fd0fddcf-d336-49ca-9929-d40e630fb001"
          style={styles.myPosts_search}>
          Search
        </Text>
        <ReactImage
          data-layer="72ad9fb9-52d3-4457-a4e4-b3721afd983a"
          source={require("./assets/rectangle159.png")}
          style={styles.myPosts_rectangle159}
        />
        <Svg
          data-layer="23d470d5-e5ee-4f0c-8709-e1ae0861ec29"
          style={styles.myPosts_woman1127201}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 85.5 85.5"
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
                width="84.00px"
                height="84.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 42 0 C 65.19596099853516 0 84 18.80404090881348 84 42 C 84 65.19596099853516 65.19596099853516 84 42 84 C 18.80404090881348 84 0 65.19596099853516 0 42 C 0 18.80404090881348 18.80404090881348 0 42 0 Z"
            fill="url(#img-woman1127201)"
          />
        </Svg>
        <Text
          data-layer="6c723c43-084b-4f06-ac6a-8f66b1c79c32"
          style={styles.myPosts_completed}>
          Completed
        </Text>
        <Text
          data-layer="466a1ae2-6e9e-4551-b1c5-0c5d152b15e0"
          style={styles.myPosts_reviewRequests}>
          Review Requests
        </Text>
        <ReactImage
          data-layer="aeebe9b7-e7fb-4003-8d8d-10de07c9f1ed"
          source={require("./assets/nopathCopy13.png")}
          style={styles.myPosts_nopathCopy13}
        />
        <Text
          data-layer="2486cc66-b64c-4608-a906-7a6015a73350"
          style={styles.myPosts_needAGraphicDesigner}>
          Need A graphic designer
        </Text>
        <Text
          data-layer="51753e20-311e-41c4-a678-d3fb0ee948b1"
          style={styles.myPosts_x10Comments}>
          10 comments
        </Text>
        <View
          data-layer="3794fbc4-e3d1-43ca-b8d0-ec74d5e04f1f"
          style={styles.myPosts_group46}>
          <View
            data-layer="7986b0e0-5c2c-429c-ae0e-be24ff3fde8f"
            style={styles.myPosts_group46_rectangle36}></View>
          <Svg
            data-layer="ec3ebd18-aa28-421c-8815-03bed79d8945"
            style={styles.myPosts_group46_subtraction5}
            preserveAspectRatio="none"
            viewBox="2.8839630772381497e-7 0 22.4755859375 20.114776611328125"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 11.23787021636963 20.11477661132812 C 8.236237525939941 20.11477661132812 5.414217472076416 19.06859588623047 3.291560888290405 17.1689510345459 C 1.168967366218567 15.2692985534668 2.88396307723815e-07 12.74369144439697 2.88396307723815e-07 10.05738735198975 C 2.88396307723815e-07 7.370921611785889 1.168967366218567 4.845261573791504 3.291560888290405 2.945663928985596 C 5.414121627807617 1.046122312545776 8.236174583435059 0 11.23787021636963 0 C 14.23969173431396 0 17.06177711486816 1.046122312545776 19.18430709838867 2.945663928985596 C 21.30680465698242 4.845215320587158 22.4757080078125 7.370871067047119 22.4757080078125 10.05738735198975 C 22.4757080078125 12.74374580383301 21.30680465698242 15.26934623718262 19.18430709838867 17.1689510345459 C 17.06174659729004 19.06859588623047 14.23966121673584 20.11477661132812 11.23787021636963 20.11477661132812 Z M 11.23787021636963 3.274576663970947 C 7.058817386627197 3.274576663970947 3.658916234970093 6.317333698272705 3.658916234970093 10.05738735198975 C 3.658916234970093 13.79743957519531 7.058817386627197 16.84020042419434 11.23787021636963 16.84020042419434 C 15.41689109802246 16.84020042419434 18.81679153442383 13.79743957519531 18.81679153442383 10.05738735198975 C 18.81679153442383 6.317333698272705 15.41689109802246 3.274576663970947 11.23787021636963 3.274576663970947 Z" />
          </Svg>
        </View>
        <View
          data-layer="45112ff2-e5dd-4e6e-8d9d-bc43a3bd1df9"
          style={styles.myPosts_barstimeBlack}>
          <Svg
            data-layer="99b67258-6c06-4d55-8eaf-58bf5a273430"
            style={styles.myPosts_barstimeBlack_background}
            preserveAspectRatio="none"
            viewBox="21 -35 54 16"
            fill="transparent">
            <SvgPath d="M 21 -19 L 75 -19 L 75 -35 L 21 -35 L 21 -19 Z" />
          </Svg>
        </View>
        <ReactImage
          data-layer="078c43b8-f915-4ae3-b874-ea7555f379de"
          source={require("./assets/rectangle13.png")}
          style={styles.myPosts_rectangle13}
        />
        <Text
          data-layer="09f08770-d1f7-4d94-b8a9-a165cd489c0c"
          style={styles.myPosts_myPostsda25104f}>
          My Posts
        </Text>
        <Svg
          data-layer="5b994ddd-3731-45ca-b285-98adf86d8853"
          style={styles.myPosts_path23}
          preserveAspectRatio="none"
          viewBox="15.246183395385742 912.529052734375 27.74267578125 38"
          fill="transparent">
          <SvgPath d="M 33.98876953125 915.529052734375 L 18.24618339538574 928.1318359375 L 33.98876953125 938.529052734375" />
        </Svg>
      </ScrollView>
    );
  }
}

MyPosts.propTypes = {};

MyPosts.defaultProps = {};

const styles = StyleSheet.create({
  myPosts: {
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
    width: 386,
    height: 812,
    left: 0,
    top: 0,
  },
  myPosts_path46: {
    opacity: 0.7900000214576721,
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
    width: 335.39,
    height: 39.35,
    left: 27.3,
    top: 103.82,
  },
  myPosts_search: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(88, 100, 253, 1)",
    fontSize: 22,
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
    width: 66,
    height: 27,
    left: 49,
    top: 110,
  },
  myPosts_rectangle159: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    width: 85,
    height: 28,
    left: 293,
    top: 210,
  },
  myPosts_woman1127201: {
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
    width: 84,
    height: 84,
    left: 10,
    top: 177,
  },
  myPosts_completed: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
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
    width: 73,
    height: 18,
    left: 299,
    top: 215,
  },
  myPosts_reviewRequests: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 0.9098039215686274)",
    fontSize: 7,
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
    width: 52,
    height: 8,
    left: 109,
    top: 256,
  },
  myPosts_nopathCopy13: {
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
    width: 21,
    height: 21,
    left: 116,
    top: 235,
  },
  myPosts_needAGraphicDesigner: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
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
    height: 18,
    left: 106,
    top: 212,
  },
  myPosts_x10Comments: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
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
    height: 12,
    left: 173.25,
    top: 248.75,
  },
  myPosts_group46: {
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
    width: 27.62,
    height: 25.57,
    left: 313.62,
    top: 109,
  },
  myPosts_group46_rectangle36: {
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
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 12.67,
    height: 2.92,
    left: 15.71,
    top: 18.65,
  },
  myPosts_group46_subtraction5: {
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
    width: 22.48,
    height: 20.11,
    left: 0,
    top: 0,
  },
  myPosts_barstimeBlack: {
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
  myPosts_barstimeBlack_background: {
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
  myPosts_rectangle13: {
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
    width: 386,
    height: 54,
    left: 0,
    top: 31,
  },
  myPosts_myPostsda25104f: {
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
    width: 155,
    height: 51,
    left: 136,
    top: 34,
  },
  myPosts_path23: {
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
