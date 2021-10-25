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

export default class OnlineTask extends Component {
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
        data-layer="d5f2a1e2-bdfc-481a-bcd8-d9bac64e38a3"
        style={styles.onlineTask}>
        <ReactImage
          data-layer="62ea4bb2-db2e-461e-88ea-1773efa08eba"
          source={require("./assets/rectangle127.png")}
          style={styles.onlineTask_rectangle127}
        />
        <Text
          data-layer="441a5b2a-8cfd-4141-83af-39ebd6b57d87"
          style={styles.onlineTask_virtualassistant}>
          Virtual Assistant
        </Text>
        <Text
          data-layer="361faf21-f215-4b8c-a120-b9d8a453894a"
          style={styles.onlineTask_socialMediamanaging}>
          Social media Managing
        </Text>
        <View
          data-layer="e5c44ddc-8a88-458b-b1e6-bd2403dc336c"
          style={styles.onlineTask_person}>
          <Svg
            data-layer="800a1dfa-3601-42c3-84a8-30856b5423d3"
            style={styles.onlineTask_person_path2}
            preserveAspectRatio="none"
            viewBox="570.7119750976562 464.2452697753906 43.578369140625 27.0477294921875"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 601.9637451171875 464.3019409179688 C 600.6043090820312 464.8003540039062 597.6876831054688 467.0994262695312 593.810791015625 467.8887329101562 C 590.6702880859375 468.5289916992188 586.7880859375 468.052490234375 582.7249755859375 464.3019409179688 C 572.0087280273438 463.2050170898438 569.3085327148438 478.30908203125 571.3336791992188 485.5657348632812 C 573.3587646484375 492.8224487304688 585.2564086914062 491.0504150390625 592.8506469726562 491.1348266601562 C 600.44482421875 491.21923828125 612.2581176757812 492.5693359375 613.861328125 485.5657348632812 C 615.4645385742188 478.5621948242188 612.1737060546875 469.0272216796875 610.5704956054688 468.0990600585938 C 608.96728515625 467.1708374023438 609.2203979492188 464.6394653320312 601.9637451171875 464.3019409179688 Z" />
          </Svg>
          <Svg
            data-layer="5c8cf02c-0676-4489-94ef-a7ef8556784f"
            style={styles.onlineTask_person_ellipse1}
            preserveAspectRatio="none"
            viewBox="0 0 25.38037109375 25.38031005859375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 12.69015216827393 0 C 19.69873046875 0 25.38030433654785 5.681574821472168 25.38030433654785 12.69015216827393 C 25.38030433654785 19.69873046875 19.69873046875 25.38030433654785 12.69015216827393 25.38030433654785 C 5.681574821472168 25.38030433654785 0 19.69873046875 0 12.69015216827393 C 0 5.681574821472168 5.681574821472168 0 12.69015216827393 0 Z" />
          </Svg>
        </View>
        <View
          data-layer="189d44eb-95f5-4dc8-96cc-2366856a05f4"
          style={styles.onlineTask_tasks}>
          <View
            data-layer="11d6aa4b-2d39-46cc-bebd-871c686c9e81"
            style={styles.onlineTask_tasks_rectangle31}></View>
          <Svg
            data-layer="94f77aef-b451-44b0-b93d-a066bb2b4719"
            style={styles.onlineTask_tasks_path4}
            preserveAspectRatio="none"
            viewBox="1008.9743041992188 753.8364868164062 11.419921875 9.0130615234375"
            fill="transparent">
            <SvgPath d="M 1011.224304199219 758.7943115234375 L 1012.879089355469 760.5995483398438 L 1018.144348144531 756.0864868164062" />
          </Svg>
          <Svg
            data-layer="849caeb5-25fe-45f7-a0ee-5cc082070349"
            style={styles.onlineTask_tasks_path5}
            preserveAspectRatio="none"
            viewBox="1008.9743041992188 753.8364868164062 11.419921875 9.0130615234375"
            fill="transparent">
            <SvgPath d="M 1011.224304199219 758.7943115234375 L 1012.879089355469 760.5995483398438 L 1018.144348144531 756.0864868164062" />
          </Svg>
          <Svg
            data-layer="318d27ed-40da-48b7-8000-e816cf121088"
            style={styles.onlineTask_tasks_path6}
            preserveAspectRatio="none"
            viewBox="1008.9743041992188 753.8364868164062 11.419921875 9.0130615234375"
            fill="transparent">
            <SvgPath d="M 1011.224304199219 758.7943115234375 L 1012.879089355469 760.5995483398438 L 1018.144348144531 756.0864868164062" />
          </Svg>
          <View
            data-layer="aa36c3d3-1b62-451b-b7e4-2f8c610fb39d"
            style={styles.onlineTask_tasks_rectangle32}></View>
          <View
            data-layer="112346d8-1de4-43e1-bad3-dee648ec80c6"
            style={styles.onlineTask_tasks_rectangle35}></View>
          <View
            data-layer="f7290867-c7f2-4922-a74f-16598dd6afd9"
            style={styles.onlineTask_tasks_rectangle33}></View>
          <View
            data-layer="04b1eb15-b0e7-4c05-895f-a5645a8f880b"
            style={styles.onlineTask_tasks_rectangle34}></View>
        </View>
        <ReactImage
          data-layer="2281bf96-029d-4798-94e8-dba4e658ccfb"
          source={require("./assets/chat.png")}
          style={styles.onlineTask_chat}
        />
        <View
          data-layer="8f20e56e-47ca-468b-87a7-394682be0d24"
          style={styles.onlineTask_group29}>
          <ReactImage
            data-layer="683aa7b5-8c26-4800-978f-a395b04ad68d"
            source={require("./assets/rectangle117.png")}
            style={styles.onlineTask_group29_rectangle117}
          />
          <ReactImage
            data-layer="3e7174d9-7582-47c2-9721-02d0411d400d"
            source={require("./assets/rectangle118.png")}
            style={styles.onlineTask_group29_rectangle118}
          />
          <ReactImage
            data-layer="c38c57f2-cf72-4d13-a5f3-4b2211a53b1f"
            source={require("./assets/rectangle119.png")}
            style={styles.onlineTask_group29_rectangle119}
          />
          <ReactImage
            data-layer="57290218-4562-4403-9646-7fe5ac561cd7"
            source={require("./assets/rectangle120.png")}
            style={styles.onlineTask_group29_rectangle120}
          />
          <ReactImage
            data-layer="6e7b202d-7b14-4e02-b405-048790f721cd"
            source={require("./assets/rectangle111.png")}
            style={styles.onlineTask_group29_rectangle111}
          />
          <ReactImage
            data-layer="5a642700-6799-4201-8969-7d6d4a3ca414"
            source={require("./assets/rectangle113.png")}
            style={styles.onlineTask_group29_rectangle113}
          />
          <ReactImage
            data-layer="739d6dd0-fc20-4e03-ad71-5f1b2f053e75"
            source={require("./assets/rectangle115.png")}
            style={styles.onlineTask_group29_rectangle115}
          />
          <ReactImage
            data-layer="ba2eef9d-08ee-4ceb-a76b-3d0d413b98a6"
            source={require("./assets/rectangle121.png")}
            style={styles.onlineTask_group29_rectangle121}
          />
          <View
            data-layer="5fa2a233-a30f-4e55-8b75-63fb6990af98"
            style={styles.onlineTask_group29_rectangle114}></View>
          <View
            data-layer="9b626c32-a39c-4762-8cab-69f3c15886c9"
            style={styles.onlineTask_group29_rectangle123}></View>
          <View
            data-layer="9c6f331f-5a8d-49f4-be38-43a358840ece"
            style={styles.onlineTask_group29_rectangle112}></View>
          <View
            data-layer="109a3386-38bb-4bc7-8613-4a57f939af38"
            style={styles.onlineTask_group29_rectangle124}></View>
          <Text
            data-layer="baa6b585-57e1-4757-abc1-1edc5c1dadf2"
            style={styles.onlineTask_group29_graphicDesigning}>
            Graphic Designing
          </Text>
          <Text
            data-layer="a988f531-491a-445b-a9a6-381ec79b73c3"
            style={styles.onlineTask_group29_audioediting}>
            Audio Editing
          </Text>
          <Text
            data-layer="b28f4feb-43ee-4a3d-99a9-fa3c68fb96e5"
            style={styles.onlineTask_group29_videoediting}>
            Video Editing
          </Text>
          <Text
            data-layer="90f0d5d2-0e35-404a-bc62-234e8f3c6066"
            style={styles.onlineTask_group29_dataEntry}>
            Data entry
          </Text>
          <Text
            data-layer="67c338e5-02bf-428e-84e1-7b8e61b200c2"
            style={styles.onlineTask_group29_freelancewriter}>
            Freelance Writer
          </Text>
          <View
            data-layer="fbc04a35-8747-450c-8407-ebad2f6ccd6c"
            style={styles.onlineTask_group29_rectangle125}></View>
          <View
            data-layer="855fd8e5-a1bb-4ada-a623-cdced5a977ea"
            style={styles.onlineTask_group29_rectangle126}></View>
          <View
            data-layer="091733f9-76ed-450f-b791-3956e0711277"
            style={styles.onlineTask_group29_rectangle116}></View>
          <View
            data-layer="07d8978c-270f-4f6d-b266-60dd4abe4c3a"
            style={styles.onlineTask_group29_rectangle122}></View>
          <Text
            data-layer="36e7d482-530f-41ca-8234-4c36cb5e3907"
            style={styles.onlineTask_group29_webDevelopment}>
            Web Development
          </Text>
          <ReactImage
            data-layer="69d2f5b5-4d38-4aa1-a65b-f188c2a87c09"
            source={require("./assets/nopathCopy28.png")}
            style={styles.onlineTask_group29_nopathCopy28}
          />
          <ReactImage
            data-layer="65f13767-15cb-4a44-8934-735015dbcdaf"
            source={require("./assets/nopathCopy30.png")}
            style={styles.onlineTask_group29_nopathCopy30}
          />
          <ReactImage
            data-layer="740b320e-f66f-4d43-abe0-ded370da8653"
            source={require("./assets/nopathCopy31.png")}
            style={styles.onlineTask_group29_nopathCopy31}
          />
          <ReactImage
            data-layer="bfcfa827-d8bc-4194-b660-b055af831c47"
            source={require("./assets/nopathCopy32.png")}
            style={styles.onlineTask_group29_nopathCopy32}
          />
          <ReactImage
            data-layer="4157689b-0273-40d4-b871-fa2141f6df28"
            source={require("./assets/nopathCopy33.png")}
            style={styles.onlineTask_group29_nopathCopy33}
          />
          <ReactImage
            data-layer="a2aa9720-612f-40a9-9b7b-3ad7a80744aa"
            source={require("./assets/nopathCopy35.png")}
            style={styles.onlineTask_group29_nopathCopy35}
          />
          <ReactImage
            data-layer="4c43182b-ac47-4593-8112-ea0f1a543a95"
            source={require("./assets/nopathCopy34.png")}
            style={styles.onlineTask_group29_nopathCopy34}
          />
          <ReactImage
            data-layer="af60fd76-5be0-4a02-9d29-8080be147c80"
            source={require("./assets/nopathCopy13.png")}
            style={styles.onlineTask_group29_nopathCopy13}
          />
          <Text
            data-layer="cb320fb1-6024-4f22-a1df-c2c40fcd30e7"
            style={styles.onlineTask_group29_customerSuppoert}>
            Customer Suppoert
          </Text>
          <Text
            data-layer="b048dd3b-b6b0-4479-acd2-5422d432c524"
            style={styles.onlineTask_group29_research}>
            Research
          </Text>
        </View>
        <View
          data-layer="beaf2fa2-026a-442f-9338-10faff1f7176"
          style={styles.onlineTask_barstimeBlack}>
          <Svg
            data-layer="fa56506d-81fb-4303-af26-6d50c9665445"
            style={styles.onlineTask_barstimeBlack_background}
            preserveAspectRatio="none"
            viewBox="21 -35 54 16"
            fill="transparent">
            <SvgPath d="M 21 -19 L 75 -19 L 75 -35 L 21 -35 L 21 -19 Z" />
          </Svg>
        </View>
        <ReactImage
          data-layer="f53e7a3d-a2e4-4770-95ae-6f74d4603079"
          source={require("./assets/rectangle13.png")}
          style={styles.onlineTask_rectangle13}
        />
        <Text
          data-layer="92ae8fc5-c462-44ca-bd43-5efea69c7219"
          style={styles.onlineTask_onlineWork}>
          Online Work
        </Text>
        <Svg
          data-layer="accf3f92-a97c-447b-827a-bee54bae44a4"
          style={styles.onlineTask_path23}
          preserveAspectRatio="none"
          viewBox="15.246183395385742 912.529052734375 27.74267578125 38"
          fill="transparent">
          <SvgPath d="M 33.98876953125 915.529052734375 L 18.24618339538574 928.1318359375 L 33.98876953125 938.529052734375" />
        </Svg>
      </ScrollView>
    );
  }
}

OnlineTask.propTypes = {};

OnlineTask.defaultProps = {};

const styles = StyleSheet.create({
  onlineTask: {
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
  onlineTask_rectangle127: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 29,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 375,
    height: 76,
    left: 2,
    top: 736,
  },
  onlineTask_virtualassistant: {
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
    width: 61,
    height: 36,
    left: 244,
    top: 679,
  },
  onlineTask_socialMediamanaging: {
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
    width: 83,
    height: 36,
    left: 61,
    top: 679,
  },
  onlineTask_person: {
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
    width: 43.58,
    height: 56.18,
    left: 261.42,
    top: 744,
  },
  onlineTask_person_path2: {
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
    width: 43.58,
    height: 27.05,
    left: 0,
    top: 29.13,
  },
  onlineTask_person_ellipse1: {
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
    width: 25.38,
    height: 25.38,
    left: 8.62,
    top: 0,
  },
  onlineTask_tasks: {
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
    width: 39,
    height: 53,
    left: 101,
    top: 746,
  },
  onlineTask_tasks_rectangle31: {
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
    borderTopWidth: 3,
    borderTopColor: "rgba(255, 255, 255, 1)",
    borderRightWidth: 3,
    borderRightColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 3,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderLeftWidth: 3,
    borderLeftColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    width: 39,
    height: 48,
    left: -3,
    top: 2,
  },
  onlineTask_tasks_path4: {
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
    width: 12.92,
    height: 10.51,
    left: 5.22,
    top: 14.55,
  },
  onlineTask_tasks_path5: {
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
    width: 12.92,
    height: 10.51,
    left: 5.22,
    top: 25.46,
  },
  onlineTask_tasks_path6: {
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
    width: 12.92,
    height: 10.51,
    left: 5.22,
    top: 36.38,
  },
  onlineTask_tasks_rectangle32: {
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
    width: 13,
    height: 3,
    left: 19,
    top: 19,
  },
  onlineTask_tasks_rectangle35: {
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
    width: 13,
    height: 7,
    left: 13,
    top: 0,
  },
  onlineTask_tasks_rectangle33: {
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
    width: 13,
    height: 3,
    left: 19,
    top: 29,
  },
  onlineTask_tasks_rectangle34: {
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
    width: 13,
    height: 3,
    left: 19,
    top: 39,
  },
  onlineTask_chat: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    width: 61.36,
    height: 55.85,
    left: 171.5,
    top: 745,
  },
  onlineTask_chat_union1: {
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
    width: 60.58,
    height: 51.82,
    left: 0,
    top: 0,
  },
  onlineTask_chat_path8: {
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
    width: 18.11,
    height: 17.39,
    left: 44.25,
    top: 39.96,
  },
  onlineTask_chat_path10: {
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
    width: 15.98,
    height: 17.39,
    left: -2,
    top: 34.26,
  },
  onlineTask_chat_ellipse6: {
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
    width: 4.41,
    height: 4.41,
    left: 28.64,
    top: 28.3,
  },
  onlineTask_chat_ellipse7: {
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
    width: 4.41,
    height: 4.41,
    left: 35.24,
    top: 28.3,
  },
  onlineTask_chat_ellipse8: {
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
    width: 4.41,
    height: 4.41,
    left: 42.95,
    top: 28.3,
  },
  onlineTask_chat_path11: {
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
    width: 27.48,
    height: 42.22,
    left: 12.97,
    top: 5.81,
  },
  onlineTask_group29: {
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
    width: 310,
    height: 599,
    left: 36,
    top: 109,
  },
  onlineTask_group29_rectangle117: {
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
    width: 115,
    height: 141,
    left: 0,
    top: 0,
  },
  onlineTask_group29_rectangle118: {
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
    width: 115,
    height: 141,
    left: 1,
    top: 150,
  },
  onlineTask_group29_rectangle119: {
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
    width: 115,
    height: 141,
    left: 1,
    top: 301,
  },
  onlineTask_group29_rectangle120: {
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
    width: 115,
    height: 148,
    left: 1,
    top: 451,
  },
  onlineTask_group29_rectangle111: {
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
    width: 115,
    height: 141,
    left: 194,
    top: 0,
  },
  onlineTask_group29_rectangle113: {
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
    width: 115,
    height: 141,
    left: 195,
    top: 150,
  },
  onlineTask_group29_rectangle115: {
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
    width: 115,
    height: 141,
    left: 195,
    top: 301,
  },
  onlineTask_group29_rectangle121: {
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
    width: 115,
    height: 141,
    left: 195,
    top: 451,
  },
  onlineTask_group29_rectangle114: {
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
    borderTopWidth: 2,
    borderTopColor: "rgba(255, 255, 255, 1)",
    borderRightWidth: 2,
    borderRightColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderLeftWidth: 2,
    borderLeftColor: "rgba(255, 255, 255, 1)",
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
    width: 71,
    height: 77,
    left: 215,
    top: 166,
  },
  onlineTask_group29_rectangle123: {
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
    borderTopWidth: 2,
    borderTopColor: "rgba(255, 255, 255, 1)",
    borderRightWidth: 2,
    borderRightColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderLeftWidth: 2,
    borderLeftColor: "rgba(255, 255, 255, 1)",
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
    width: 71,
    height: 77,
    left: 21,
    top: 8,
  },
  onlineTask_group29_rectangle112: {
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
    borderTopWidth: 2,
    borderTopColor: "rgba(255, 255, 255, 1)",
    borderRightWidth: 2,
    borderRightColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderLeftWidth: 2,
    borderLeftColor: "rgba(255, 255, 255, 1)",
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
    width: 71,
    height: 77,
    left: 215,
    top: 8,
  },
  onlineTask_group29_rectangle124: {
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
    borderTopWidth: 2,
    borderTopColor: "rgba(255, 255, 255, 1)",
    borderRightWidth: 2,
    borderRightColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderLeftWidth: 2,
    borderLeftColor: "rgba(255, 255, 255, 1)",
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
    width: 71,
    height: 77,
    left: 21,
    top: 166,
  },
  onlineTask_group29_graphicDesigning: {
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
    width: 66,
    height: 36,
    left: 18,
    top: 92,
  },
  onlineTask_group29_audioediting: {
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
    width: 47,
    height: 36,
    left: 18,
    top: 247,
  },
  onlineTask_group29_videoediting: {
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
    width: 47,
    height: 36,
    left: 215,
    top: 247,
  },
  onlineTask_group29_dataEntry: {
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
    width: 71,
    height: 18,
    left: 18,
    top: 410,
  },
  onlineTask_group29_freelancewriter: {
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
    width: 64,
    height: 36,
    left: 217,
    top: 394,
  },
  onlineTask_group29_rectangle125: {
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
    borderTopWidth: 2,
    borderTopColor: "rgba(255, 255, 255, 1)",
    borderRightWidth: 2,
    borderRightColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderLeftWidth: 2,
    borderLeftColor: "rgba(255, 255, 255, 1)",
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
    width: 71,
    height: 77,
    left: 21,
    top: 317,
  },
  onlineTask_group29_rectangle126: {
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
    borderTopWidth: 2,
    borderTopColor: "rgba(255, 255, 255, 1)",
    borderRightWidth: 2,
    borderRightColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderLeftWidth: 2,
    borderLeftColor: "rgba(255, 255, 255, 1)",
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
    width: 71,
    height: 77,
    left: 21,
    top: 466,
  },
  onlineTask_group29_rectangle116: {
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
    borderTopWidth: 2,
    borderTopColor: "rgba(255, 255, 255, 1)",
    borderRightWidth: 2,
    borderRightColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderLeftWidth: 2,
    borderLeftColor: "rgba(255, 255, 255, 1)",
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
    width: 71,
    height: 77,
    left: 215,
    top: 313,
  },
  onlineTask_group29_rectangle122: {
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
    borderTopWidth: 2,
    borderTopColor: "rgba(255, 255, 255, 1)",
    borderRightWidth: 2,
    borderRightColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderLeftWidth: 2,
    borderLeftColor: "rgba(255, 255, 255, 1)",
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
    width: 71,
    height: 77,
    left: 215,
    top: 462,
  },
  onlineTask_group29_webDevelopment: {
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
    width: 96,
    height: 38,
    left: 204,
    top: 92,
  },
  onlineTask_group29_nopathCopy28: {
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
    left: 34,
    top: 24,
  },
  onlineTask_group29_nopathCopy30: {
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
    left: 34,
    top: 333,
  },
  onlineTask_group29_nopathCopy31: {
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
    left: 34,
    top: 482,
  },
  onlineTask_group29_nopathCopy32: {
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
    left: 228,
    top: 478,
  },
  onlineTask_group29_nopathCopy33: {
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
    left: 228,
    top: 329,
  },
  onlineTask_group29_nopathCopy35: {
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
    left: 34,
    top: 182,
  },
  onlineTask_group29_nopathCopy34: {
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
    left: 228,
    top: 182,
  },
  onlineTask_group29_nopathCopy13: {
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
    left: 228,
    top: 24,
  },
  onlineTask_group29_customerSuppoert: {
    opacity: 1,
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
    width: 81,
    height: 44,
    left: 25,
    top: 550,
  },
  onlineTask_group29_research: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
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
    width: 83,
    height: 25,
    left: 215,
    top: 550,
  },
  onlineTask_barstimeBlack: {
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
  onlineTask_barstimeBlack_background: {
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
  onlineTask_rectangle13: {
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
  onlineTask_onlineWork: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
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
    width: 176,
    height: 38,
    left: 91,
    top: 35,
  },
  onlineTask_path23: {
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
