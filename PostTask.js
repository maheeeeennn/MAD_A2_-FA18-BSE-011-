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

export default class PostTask extends Component {
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
        data-layer="3b2ec296-f7f6-4600-b4ea-6ba47e790696"
        style={styles.postTask}>
        <View
          data-layer="b15a6694-3d8c-40ba-aa56-5908e629ca3f"
          style={styles.postTask_rectangle54}></View>
        <View
          data-layer="83ee1295-4d95-47ee-9e86-1f02678e23a9"
          style={styles.postTask_rectangle50}></View>
        <View
          data-layer="2655eb3a-1903-4ede-b158-5c740b08955b"
          style={styles.postTask_rectangle51}></View>
        <View
          data-layer="823e8c88-6d3a-4c1a-916b-1c5201aa3b26"
          style={styles.postTask_rectangle38}></View>
        <View
          data-layer="b5f46984-25cc-4437-8651-bef13444bb01"
          style={styles.postTask_rectangle41}></View>
        <View
          data-layer="d6f25225-e064-417d-aa49-0b51e169810b"
          style={styles.postTask_rectangle40}></View>
        <ReactImage
          data-layer="0792d2c5-48c0-4660-a9be-042aa37f4e8a"
          source={require("./assets/rectangle39.png")}
          style={styles.postTask_rectangle39}
        />
        <Text
          data-layer="a4c44fe0-f95b-4ae8-9011-167f33baa869"
          style={styles.postTask_detail}>
          Detail
        </Text>
        <Text
          data-layer="94e9912e-e78b-4e3f-9584-f0a184820ffc"
          style={styles.postTask_date}>
          Date
        </Text>
        <Text
          data-layer="17c18813-bf15-4224-ae72-b473276d53ea"
          style={styles.postTask_budget}>
          Budget
        </Text>
        <View
          data-layer="bfb735f9-92b2-4ad9-97bc-71e2212135dd"
          style={styles.postTask_rectangle42}></View>
        <View
          data-layer="c5ad47df-8b60-427f-a051-1519c0d4ea74"
          style={styles.postTask_rectangle43}></View>
        <Text
          data-layer="e7a67c64-dd0b-4f5e-9f23-d0082c45228a"
          style={styles.postTask_needAnElectrician}>
          Need an electrician
        </Text>
        <Text
          data-layer="7eb3396b-e046-490a-87d3-5444459bf7f6"
          style={styles.postTask_categoryOfTask}>
          Category Of Task:
        </Text>
        <Text
          data-layer="812b0e66-e389-495b-a5c8-9754ea4b5060"
          style={styles.postTask_taskLocation}>
          Task Location :
        </Text>
        <Svg
          data-layer="7e47f47d-8ab2-440a-af9e-190fe921d13a"
          style={styles.postTask_path13}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 81.2138671875 33.5"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-path13"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/path13.png")}
                x="0"
                y="0"
                width="79.71px"
                height="32.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 0 0 L 79.71387481689453 0 L 79.71387481689453 14.88540649414062 L 79.71387481689453 32 L 0 32 L 0 0 Z"
            fill="url(#img-path13)"
          />
        </Svg>
        <Svg
          data-layer="af7743fc-ca85-4e7e-a381-2fb85de1a23c"
          style={styles.postTask_path14}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 81.2138671875 33.5"
          fill="transparent">
          <SvgPath d="M 0 0 L 79.71387481689453 0 L 79.71387481689453 14.88540649414062 L 79.71387481689453 32 L 0 32 L 0 0 Z" />
        </Svg>
        <Svg
          data-layer="56d01f0f-5cd2-4874-8110-03aeb9b52faa"
          style={styles.postTask_path15}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 81.2138671875 33.5"
          fill="transparent">
          <SvgPath d="M 0 0 L 79.71387481689453 0 L 79.71387481689453 14.88540649414062 L 79.71387481689453 32 L 0 32 L 0 0 Z" />
        </Svg>
        <Text
          data-layer="caa5941f-ef97-43d8-88a9-6c623e41e5da"
          style={styles.postTask_text}>
          Text
        </Text>
        <Text
          data-layer="6772a8be-0817-4b4d-b90c-1abfaf35f3a1"
          style={styles.postTask_video}>
          Video
        </Text>
        <Text
          data-layer="bc6c4dc1-817a-45c0-a5d4-000f9af9eeb2"
          style={styles.postTask_audio}>
          Audio
        </Text>
        <View
          data-layer="f2fc7791-55b8-4185-8ad7-6d1252b512ec"
          style={styles.postTask_group8}>
          <View
            data-layer="bccef76a-0ab5-4eb4-899e-1eea71fc2347"
            style={styles.postTask_group8_rectangle47}></View>
          <Svg
            data-layer="afa3addb-3277-406a-bdc5-9135921f0b3c"
            style={styles.postTask_group8_path12}
            preserveAspectRatio="none"
            viewBox="1415.304443359375 252.25 4.61865234375 4.789306640625"
            fill="transparent">
            <SvgPath d="M 1419.173095703125 253 L 1416.054443359375 256.289306640625" />
          </Svg>
          <Svg
            data-layer="b254f7ff-745b-4e79-9608-20729f8df9de"
            style={styles.postTask_group8_line1}
            preserveAspectRatio="none"
            viewBox="-9.25 -6.25 37.339111328125 27.5"
            fill="transparent">
            <SvgPath d="M 0 0 L 12.83913803100586 0" />
          </Svg>
          <Svg
            data-layer="25344734-2d4a-44cc-ade3-c3e401d2ec65"
            style={styles.postTask_group8_line2}
            preserveAspectRatio="none"
            viewBox="-9.25 -6.25 37.339111328125 27.5"
            fill="transparent">
            <SvgPath d="M 0 0 L 12.83913803100586 0" />
          </Svg>
          <Svg
            data-layer="b9673c2c-627d-417a-9f4e-c6ece24e2641"
            style={styles.postTask_group8_line3}
            preserveAspectRatio="none"
            viewBox="-9.25 -6.25 37.339111328125 27.5"
            fill="transparent">
            <SvgPath d="M 0 0 L 12.83913803100586 0" />
          </Svg>
        </View>
        <View
          data-layer="dc9ddba4-ffbe-4cea-85e3-ed7f87f6e510"
          style={styles.postTask_group11}>
          <View
            data-layer="ba83d995-fda6-47ad-ad90-f93be3deb84e"
            style={styles.postTask_group11_rectangle48}></View>
          <Svg
            data-layer="5a6ee95c-457c-4b01-8986-7aed3f16e6fc"
            style={styles.postTask_group11_polygon1}
            preserveAspectRatio="none"
            viewBox="0 0 9.425537109375 8.24725341796875"
            fill="rgba(50, 50, 50, 1)">
            <SvgPath d="M 4.712718486785889 0 L 9.425437927246094 8.247256278991699 L 0 8.247256278991699 Z" />
          </Svg>
        </View>
        <View
          data-layer="f9cec044-78f0-439e-9a67-85d73290e500"
          style={styles.postTask_group13}>
          <Svg
            data-layer="ae1d4eaa-f1cf-4bb8-9140-072bb9a6b741"
            style={styles.postTask_group13_path16}
            preserveAspectRatio="none"
            viewBox="299.6775207519531 1115.51953125 9 16.068603515625"
            fill="transparent">
            <SvgPath d="M 301.1775207519531 1117.01953125 L 301.1775207519531 1121.088134765625" />
          </Svg>
          <Svg
            data-layer="74b526de-aef5-4570-b3c6-2318591f5ca5"
            style={styles.postTask_group13_path17}
            preserveAspectRatio="none"
            viewBox="292.3495788574219 1115.51953125 19.788330078125 15.0517578125"
            fill="transparent">
            <SvgPath d="M 304.6380004882812 1117.01953125 C 304.6380004882812 1117.01953125 302.9198913574219 1119.717407226562 299.8002319335938 1120.04931640625 C 298.2579650878906 1120.218872070312 295.7460021972656 1119.426391601562 293.8495788574219 1117.01953125" />
          </Svg>
          <View
            data-layer="fb33bb70-9082-4866-a90e-87b982597a7f"
            style={styles.postTask_group13_rectangle49}></View>
        </View>
        <Text
          data-layer="d3ae0120-c43a-4bd1-aedf-5bd482f2e2c2"
          style={styles.postTask_inPerson}>
          In Person
        </Text>
        <Text
          data-layer="974e5cc5-b439-470b-85e4-46ba59816281"
          style={styles.postTask_online}>
          Online{" "}
        </Text>
        <Svg
          data-layer="8e81caef-e848-47f1-9891-1d00293c7151"
          style={styles.postTask_ellipse9}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 16.5 19.5"
          fill="transparent">
          <SvgPath d="M 4.5 0 C 6.985280990600586 0 9 2.014718770980835 9 4.5 C 9 6.985280990600586 6.985280990600586 9 4.5 9 C 2.014718770980835 9 0 6.985280990600586 0 4.5 C 0 2.014718770980835 2.014718770980835 0 4.5 0 Z" />
        </Svg>
        <Svg
          data-layer="cb3526d5-b40c-4988-b790-514f6014a6bd"
          style={styles.postTask_ellipse12}
          preserveAspectRatio="none"
          viewBox="-0.375 -0.375 15.75 18.75"
          fill="transparent">
          <SvgPath d="M 4.5 0 C 6.985280990600586 0 9 2.014718770980835 9 4.5 C 9 6.985280990600586 6.985280990600586 9 4.5 9 C 2.014718770980835 9 0 6.985280990600586 0 4.5 C 0 2.014718770980835 2.014718770980835 0 4.5 0 Z" />
        </Svg>
        <Svg
          data-layer="536a3ef2-d5f6-4366-9507-4e58142dd122"
          style={styles.postTask_ellipse10}
          preserveAspectRatio="none"
          viewBox="0 0 5 5"
          fill="rgba(8, 0, 255, 1)">
          <SvgPath d="M 2.5 0 C 3.880712032318115 0 5 1.119288086891174 5 2.5 C 5 3.880712032318115 3.880712032318115 5 2.5 5 C 1.119288086891174 5 0 3.880712032318115 0 2.5 C 0 1.119288086891174 1.119288086891174 0 2.5 0 Z" />
        </Svg>
        <ReactImage
          data-layer="b1ac9f64-7470-49f9-9a1b-6b78c018e81d"
          source={require("./assets/nopathCopy22.png")}
          style={styles.postTask_nopathCopy22}
        />
        <ReactImage
          data-layer="1afa0b67-b720-4df4-957b-7feed1c8e2ee"
          source={require("./assets/nopathCopy23.png")}
          style={styles.postTask_nopathCopy23}
        />
        <Svg
          data-layer="bc44e8d4-6d39-427e-8d19-f2ef88d3652d"
          style={styles.postTask_path38}
          preserveAspectRatio="none"
          viewBox="-0.1875 -0.1875 311.375 35.375"
          fill="rgba(255, 255, 255, 1)">
          <SvgPath d="M 6 0 L 199.4028015136719 0 L 299 0 C 302.313720703125 0 305 2.686291217803955 305 6 L 305 20 C 305 23.3137092590332 302.313720703125 26 299 26 L 6 26 C 2.686291217803955 26 0 23.3137092590332 0 20 L 0 6 C 0 2.686291217803955 2.686291217803955 0 6 0 Z" />
        </Svg>
        <Text
          data-layer="cc45a2b8-fe3b-4c11-a06f-263e5b5c207a"
          style={styles.postTask_lahorepakistan}>
          Lahore,Pakistan
        </Text>
        <ReactImage
          data-layer="b323e224-b53a-4556-8b51-48136c864996"
          source={require("./assets/rectangle56.png")}
          style={styles.postTask_rectangle56}
        />
        <Text
          data-layer="37bf759b-9b53-43c4-b719-591f93cec69c"
          style={styles.postTask_next130bd6f8}>
          Next
        </Text>
        <Text
          data-layer="af5b6fbc-6bf6-4d09-b724-946bc425ed07"
          style={styles.postTask_enterYourText}>
          Enter Your Text
        </Text>
        <ReactImage
          data-layer="563694e2-bb91-4342-b625-c99f469440a7"
          source={require("./assets/rectangle13.png")}
          style={styles.postTask_rectangle13}
        />
        <Text
          data-layer="f76a32bb-5c03-455f-8320-483142393860"
          style={styles.postTask_postATask}>
          Post a Task
        </Text>
        <Svg
          data-layer="f96a47fa-9a85-497a-8c64-eee5b4c054d5"
          style={styles.postTask_path23}
          preserveAspectRatio="none"
          viewBox="15.246183395385742 912.529052734375 27.74267578125 38"
          fill="transparent">
          <SvgPath d="M 33.98876953125 915.529052734375 L 18.24618339538574 928.1318359375 L 33.98876953125 938.529052734375" />
        </Svg>
        <Text
          data-layer="d1a319eb-9cf3-44f3-b619-7080bf6655d4"
          style={styles.postTask_next}>
          Next
        </Text>
      </ScrollView>
    );
  }
}

PostTask.propTypes = {};

PostTask.defaultProps = {};

const styles = StyleSheet.create({
  postTask: {
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
  postTask_rectangle54: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(245, 245, 245, 1)",
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 375,
    height: 718,
    left: 0,
    top: 94,
  },
  postTask_rectangle50: {
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
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    width: 98,
    height: 35,
    left: 35,
    top: 622,
  },
  postTask_rectangle51: {
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
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    width: 95,
    height: 35,
    left: 200,
    top: 622,
  },
  postTask_rectangle38: {
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
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 305,
    height: 18,
    left: 35,
    top: 114,
  },
  postTask_rectangle41: {
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
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(0, 0, 0, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 98,
    height: 18,
    left: 242,
    top: 114,
  },
  postTask_rectangle40: {
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
    borderTopColor: "rgba(0, 0, 0, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(0, 0, 0, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 146,
    height: 18,
    left: 105,
    top: 114,
  },
  postTask_rectangle39: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 9,
    width: 113,
    height: 18,
    left: 35,
    top: 114,
  },
  postTask_detail: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
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
    width: 35,
    height: 15,
    left: 52,
    top: 114,
  },
  postTask_date: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(152, 152, 152, 1)",
    fontSize: 12,
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
    width: 28,
    height: 15,
    left: 173,
    top: 114,
  },
  postTask_budget: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(152, 152, 152, 1)",
    fontSize: 12,
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
    width: 41,
    height: 15,
    left: 275,
    top: 114,
  },
  postTask_rectangle42: {
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
    width: 305,
    height: 36,
    left: 35,
    top: 151,
  },
  postTask_rectangle43: {
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
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 305,
    height: 322,
    left: 35,
    top: 248,
  },
  postTask_needAnElectrician: {
    opacity: 0.800000011920929,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
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
    width: 177,
    height: 22,
    left: 44,
    top: 158,
  },
  postTask_categoryOfTask: {
    opacity: 0.800000011920929,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
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
    width: 109,
    height: 16,
    left: 35,
    top: 588,
  },
  postTask_taskLocation: {
    opacity: 0.800000011920929,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
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
    width: 90,
    height: 16,
    left: 35,
    top: 675,
  },
  postTask_path13: {
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
    width: 79.71,
    height: 32,
    left: 35,
    top: 198,
  },
  postTask_path14: {
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
    width: 79.71,
    height: 32,
    left: 114.71,
    top: 198,
  },
  postTask_path15: {
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
    width: 79.71,
    height: 32,
    left: 195.21,
    top: 198,
  },
  postTask_text: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
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
    width: 37,
    height: 22,
    left: 37,
    top: 203,
  },
  postTask_video: {
    opacity: 0.800000011920929,
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
    width: 43,
    height: 18,
    left: 119,
    top: 205,
  },
  postTask_audio: {
    opacity: 0.800000011920929,
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
    width: 43,
    height: 18,
    left: 201,
    top: 205,
  },
  postTask_group8: {
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
    width: 19.11,
    height: 13.38,
    left: 86,
    top: 207,
  },
  postTask_group8_rectangle47: {
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
    width: 17.12,
    height: 11.41,
    left: 1.99,
    top: 0,
  },
  postTask_group8_path12: {
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
    width: 5.12,
    height: 5.29,
    left: -1,
    top: 9.09,
  },
  postTask_group8_line1: {
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
    width: 37.34,
    height: 27.5,
    left: -5.12,
    top: -4.11,
  },
  postTask_group8_line2: {
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
    width: 37.34,
    height: 27.5,
    left: -5.12,
    top: -0.54,
  },
  postTask_group8_line3: {
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
    width: 37.34,
    height: 27.5,
    left: -5.12,
    top: 3.02,
  },
  postTask_group11: {
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
    width: 20.72,
    height: 11.78,
    left: 167.72,
    top: 208,
  },
  postTask_group11_rectangle48: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(50, 50, 50, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 16.41,
    height: 11.78,
    left: 0,
    top: 0,
  },
  postTask_group11_polygon1: {
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
    width: 9.43,
    height: 8.25,
    left: 11.8,
    top: 1.93,
  },
  postTask_group13: {
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
    width: 10.79,
    height: 19.22,
    left: 257.1,
    top: 203.4,
  },
  postTask_group13_path16: {
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
    width: 10,
    height: 17.07,
    left: 3.39,
    top: 13.15,
  },
  postTask_group13_path17: {
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
    width: 20.79,
    height: 16.05,
    left: -2,
    top: 10.1,
  },
  postTask_group13_rectangle49: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 7.09,
    height: 12.1,
    left: 1.85,
    top: 0,
  },
  postTask_inPerson: {
    opacity: 0.800000011920929,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
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
    width: 56,
    height: 15,
    left: 51,
    top: 632,
  },
  postTask_online: {
    opacity: 0.800000011920929,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
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
    width: 61,
    height: 15,
    left: 218,
    top: 632,
  },
  postTask_ellipse9: {
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
    width: 15,
    height: 18,
    left: 37,
    top: 635,
  },
  postTask_ellipse12: {
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
    width: 15,
    height: 18,
    left: 204,
    top: 635,
  },
  postTask_ellipse10: {
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
    width: 5,
    height: 5,
    left: 39,
    top: 637,
  },
  postTask_nopathCopy22: {
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
    width: 15,
    height: 15,
    left: 110,
    top: 632,
  },
  postTask_nopathCopy23: {
    opacity: 0.800000011920929,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 15,
    height: 15,
    left: 267,
    top: 632,
  },
  postTask_path38: {
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
    width: 311,
    height: 35,
    left: 35,
    top: 709,
  },
  postTask_lahorepakistan: {
    opacity: 0.800000011920929,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
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
    width: 121,
    height: 16,
    left: 44,
    top: 714,
  },
  postTask_rectangle56: {
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
    left: 125,
    top: 752,
  },
  postTask_next130bd6f8: {
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
    width: 55,
    height: 29,
    left: 155.5,
    top: 759.5,
  },
  postTask_enterYourText: {
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
    left: 44,
    top: 270,
  },
  postTask_rectangle13: {
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
  postTask_postATask: {
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
    width: 220,
    height: 38,
    left: 102,
    top: 39,
  },
  postTask_path23: {
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
  postTask_next: {
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
    width: 55,
    height: 29,
    left: 155.5,
    top: 759.5,
  },
});
