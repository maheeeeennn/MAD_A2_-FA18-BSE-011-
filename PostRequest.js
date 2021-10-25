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

export default class PostRequest extends Component {
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
        data-layer="a5fcc8cf-61ed-418a-8042-d2f1f6f25f33"
        style={styles.postRequest}>
        <Svg
          data-layer="ee812612-0ee6-4093-9514-7ff8a38ee74f"
          style={styles.postRequest_path47}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 376.5 719.5"
          fill="rgba(245, 245, 245, 1)">
          <SvgPath d="M 10 0 L 365 0 C 370.5228576660156 0 375 4.477152347564697 375 10 L 375 718 L 0 718 L 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z" />
        </Svg>
        <View
          data-layer="716d9b31-62ba-42ac-96a7-c82d0598f297"
          style={styles.postRequest_rectangle38}></View>
        <View
          data-layer="0beb9bfb-93db-44b7-a948-6b02185ae31e"
          style={styles.postRequest_rectangle41}></View>
        <View
          data-layer="62773fe9-cc33-4dee-833c-4781930e6c40"
          style={styles.postRequest_rectangle40}></View>
        <ReactImage
          data-layer="5702141b-4992-45fa-afe0-918e94fdb40e"
          source={require("./assets/rectangle39.png")}
          style={styles.postRequest_rectangle39}
        />
        <Text
          data-layer="c137acb9-7ae4-4591-b93b-20c26d6baee9"
          style={styles.postRequest_detail}>
          Detail
        </Text>
        <Text
          data-layer="a8bc9336-5032-4e2c-9883-4fd83a904310"
          style={styles.postRequest_date}>
          Date
        </Text>
        <Text
          data-layer="c0741609-2ef4-436c-8afa-f8959a2ac695"
          style={styles.postRequest_budget}>
          Budget
        </Text>
        <View
          data-layer="40f7c145-6275-4805-8a9d-c5b0718cd40a"
          style={styles.postRequest_rectangle42}></View>
        <View
          data-layer="dad85ba4-ace7-4d4d-8770-5ce7d7f82fb8"
          style={styles.postRequest_rectangle43}></View>
        <Text
          data-layer="6b9e62a8-1463-4b97-abbc-d0beee027319"
          style={styles.postRequest_needAnElectrician}>
          Need an electrician
        </Text>
        <Svg
          data-layer="83a966fc-c38d-461f-ad93-48f7e2a80ae7"
          style={styles.postRequest_path13}
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
          data-layer="c1c85b5a-7ac1-4937-b8e3-716192334747"
          style={styles.postRequest_path14}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 81.2138671875 33.5"
          fill="transparent">
          <SvgPath d="M 0 0 L 79.71387481689453 0 L 79.71387481689453 14.88540649414062 L 79.71387481689453 32 L 0 32 L 0 0 Z" />
        </Svg>
        <Svg
          data-layer="6563a469-1845-4901-9297-0a8196826ba4"
          style={styles.postRequest_path15}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 81.2138671875 33.5"
          fill="transparent">
          <SvgPath d="M 0 0 L 79.71387481689453 0 L 79.71387481689453 14.88540649414062 L 79.71387481689453 32 L 0 32 L 0 0 Z" />
        </Svg>
        <Text
          data-layer="06769885-650e-4123-b3fe-3aada2899358"
          style={styles.postRequest_text}>
          Text
        </Text>
        <Text
          data-layer="59cb8f35-3542-431a-b5cc-27df4ca0a583"
          style={styles.postRequest_video}>
          Video
        </Text>
        <Text
          data-layer="44dd1ee1-ce04-4956-87b9-b081cdadc55e"
          style={styles.postRequest_audio}>
          Audio
        </Text>
        <View
          data-layer="d5992f3f-1395-479d-b826-20fad0bfb3d1"
          style={styles.postRequest_group8}>
          <View
            data-layer="daa561f4-c02c-45a5-84a9-2c09144deee9"
            style={styles.postRequest_group8_rectangle47}></View>
          <Svg
            data-layer="0cdaa01a-a286-4593-9120-13abc3a4a7d5"
            style={styles.postRequest_group8_path12}
            preserveAspectRatio="none"
            viewBox="1415.304443359375 252.25 4.61865234375 4.789306640625"
            fill="transparent">
            <SvgPath d="M 1419.173095703125 253 L 1416.054443359375 256.289306640625" />
          </Svg>
          <Svg
            data-layer="9931bd1c-90f1-4f64-b2e4-375d5971b0c8"
            style={styles.postRequest_group8_line1}
            preserveAspectRatio="none"
            viewBox="-9.25 -6.25 37.339111328125 27.5"
            fill="transparent">
            <SvgPath d="M 0 0 L 12.83913803100586 0" />
          </Svg>
          <Svg
            data-layer="e9afe866-5c38-45be-8e93-7d47fb82b5bf"
            style={styles.postRequest_group8_line2}
            preserveAspectRatio="none"
            viewBox="-9.25 -6.25 37.339111328125 27.5"
            fill="transparent">
            <SvgPath d="M 0 0 L 12.83913803100586 0" />
          </Svg>
          <Svg
            data-layer="d98cb40c-37da-4de2-be1e-fbbb792669a3"
            style={styles.postRequest_group8_line3}
            preserveAspectRatio="none"
            viewBox="-9.25 -6.25 37.339111328125 27.5"
            fill="transparent">
            <SvgPath d="M 0 0 L 12.83913803100586 0" />
          </Svg>
        </View>
        <View
          data-layer="98c4b22e-0b8e-41d8-a5fd-6fbe718bfca6"
          style={styles.postRequest_group11}>
          <View
            data-layer="81faca09-8b67-4f94-86b2-ec07e45aaf32"
            style={styles.postRequest_group11_rectangle48}></View>
          <Svg
            data-layer="491469b5-da73-4bcf-9884-4fbad29eb854"
            style={styles.postRequest_group11_polygon1}
            preserveAspectRatio="none"
            viewBox="0 0 9.4254150390625 8.247314453125"
            fill="rgba(50, 50, 50, 1)">
            <SvgPath d="M 4.712718486785889 0 L 9.425437927246094 8.247256278991699 L 0 8.247256278991699 Z" />
          </Svg>
        </View>
        <View
          data-layer="eccf7764-19a7-4892-af04-3f153042d3be"
          style={styles.postRequest_group13}>
          <Svg
            data-layer="cdfec281-ef29-4f88-81ae-753b479b31a4"
            style={styles.postRequest_group13_path16}
            preserveAspectRatio="none"
            viewBox="299.6775207519531 1115.51953125 9 16.068603515625"
            fill="transparent">
            <SvgPath d="M 301.1775207519531 1117.01953125 L 301.1775207519531 1121.088134765625" />
          </Svg>
          <Svg
            data-layer="c01144dc-92ed-407a-b3f4-6092e5f15aeb"
            style={styles.postRequest_group13_path17}
            preserveAspectRatio="none"
            viewBox="292.3495788574219 1115.51953125 19.788330078125 15.0517578125"
            fill="transparent">
            <SvgPath d="M 304.6380004882812 1117.01953125 C 304.6380004882812 1117.01953125 302.9198913574219 1119.717407226562 299.8002319335938 1120.04931640625 C 298.2579650878906 1120.218872070312 295.7460021972656 1119.426391601562 293.8495788574219 1117.01953125" />
          </Svg>
          <View
            data-layer="22999166-b836-4754-968c-ed6a58116590"
            style={styles.postRequest_group13_rectangle49}></View>
        </View>
        <ReactImage
          data-layer="12e02f4a-1f56-4047-9a1e-8f1ba8abf35f"
          source={require("./assets/rectangle56.png")}
          style={styles.postRequest_rectangle56}
        />
        <Text
          data-layer="0ddc2472-f29a-443b-adfb-ba0f4682f77e"
          style={styles.postRequest_requestJob}>
          Request Job
        </Text>
        <Text
          data-layer="fe61c1a9-2382-4b33-9d92-437199bed5a5"
          style={styles.postRequest_enterYourText}>
          Enter Your Text
        </Text>
        <View
          data-layer="a9f4c700-7d0e-476a-8b87-a3ae06c9f8e9"
          style={styles.postRequest_barstimeBlack}>
          <Svg
            data-layer="fcd169c8-b868-4b2b-821a-c06622ddc072"
            style={styles.postRequest_barstimeBlack_background}
            preserveAspectRatio="none"
            viewBox="21 -35 54 16"
            fill="transparent">
            <SvgPath d="M 21 -19 L 75 -19 L 75 -35 L 21 -35 L 21 -19 Z" />
          </Svg>
        </View>
        <ReactImage
          data-layer="62bbaf21-f4bc-480e-829d-238d303927c3"
          source={require("./assets/rectangle13.png")}
          style={styles.postRequest_rectangle13}
        />
        <Text
          data-layer="e6210109-7c6e-4af8-8554-df13093cebbc"
          style={styles.postRequest_postARequest}>
          Post a Request
        </Text>
        <Svg
          data-layer="db7a8d00-057b-4ca5-b1be-637313d90692"
          style={styles.postRequest_path23}
          preserveAspectRatio="none"
          viewBox="15.246183395385742 912.529052734375 27.7425537109375 38"
          fill="transparent">
          <SvgPath d="M 33.98876953125 915.529052734375 L 18.24618339538574 928.1318359375 L 33.98876953125 938.529052734375" />
        </Svg>
        <View style={styles.postRequest_offeredPrice}>
          <Text
            data-layer="9ce74264-7f45-491e-ad6a-046192492d79"
            style={{
              marginTop: -0.9000000000000004,
              color: "rgba(55, 74, 190, 1)",
              fontSize: 21,
              fontWeight: "700",
              fontStyle: "normal",
              fontFamily: "Segoe UI",
              textAlign: "left",
              lineHeight: 23.1,
            }}>
            Offered Price
          </Text>
        </View>
        <Text
          data-layer="e6abb7c6-c702-42a1-a81b-ed9f6e0b7ff6"
          style={styles.postRequest_rs}>
          Rs ----------
        </Text>
      </ScrollView>
    );
  }
}

PostRequest.propTypes = {};

PostRequest.defaultProps = {};

const styles = StyleSheet.create({
  postRequest: {
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
  postRequest_path47: {
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
    width: 375,
    height: 718,
    left: 0,
    top: 94,
  },
  postRequest_rectangle38: {
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
  postRequest_rectangle41: {
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
  postRequest_rectangle40: {
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
  postRequest_rectangle39: {
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
  postRequest_detail: {
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
  postRequest_date: {
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
  postRequest_budget: {
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
  postRequest_rectangle42: {
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
  postRequest_rectangle43: {
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
    height: 330,
    left: 25,
    top: 257,
  },
  postRequest_needAnElectrician: {
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
  postRequest_path13: {
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
  postRequest_path14: {
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
  postRequest_path15: {
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
  postRequest_text: {
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
  postRequest_video: {
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
  postRequest_audio: {
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
  postRequest_group8: {
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
  postRequest_group8_rectangle47: {
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
  postRequest_group8_path12: {
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
  postRequest_group8_line1: {
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
  postRequest_group8_line2: {
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
  postRequest_group8_line3: {
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
  postRequest_group11: {
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
  postRequest_group11_rectangle48: {
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
  postRequest_group11_polygon1: {
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
  postRequest_group13: {
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
  postRequest_group13_path16: {
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
  postRequest_group13_path17: {
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
  postRequest_group13_rectangle49: {
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
  postRequest_rectangle56: {
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
    width: 176,
    height: 58,
    left: 100,
    top: 682,
  },
  postRequest_requestJob: {
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
    width: 142,
    height: 29,
    left: 119,
    top: 696,
  },
  postRequest_enterYourText: {
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
    top: 293,
  },
  postRequest_barstimeBlack: {
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
  postRequest_barstimeBlack_background: {
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
  postRequest_rectangle13: {
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
  postRequest_postARequest: {
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
  postRequest_path23: {
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
  postRequest_offeredPrice: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(55, 74, 190, 1)",
    fontSize: 21,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    lineHeight: 23.1,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 131,
    height: 28,
    left: 32,
    top: 613.4,
  },
  postRequest_rs: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(17, 100, 239, 1)",
    fontSize: 21,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    lineHeight: 25,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 114,
    height: 32,
    left: 226,
    top: 610.5,
  },
});
