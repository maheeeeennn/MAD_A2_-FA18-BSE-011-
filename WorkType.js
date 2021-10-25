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

export default class WorkType extends Component {
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
        data-layer="2ffc2a77-b30c-4113-b6c2-a080623a4f2c"
        style={styles.workType}>
        <Svg
          data-layer="49e17a18-4537-4ce3-8433-8795a76ae9bd"
          style={styles.workType_ellipse24}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 173.5 173.5"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-ellipse24"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/ellipse24.png")}
                x="0"
                y="0"
                width="172.00px"
                height="172.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 86 0 C 133.4964904785156 0 172 38.50351333618164 172 86 C 172 133.4964904785156 133.4964904785156 172 86 172 C 38.50351333618164 172 0 133.4964904785156 0 86 C 0 38.50351333618164 38.50351333618164 0 86 0 Z"
            fill="url(#img-ellipse24)"
          />
        </Svg>
        <ReactImage
          data-layer="52e1647f-bae4-4f40-93b8-b297c5fe811e"
          source={require("./assets/rectangle82.png")}
          style={styles.workType_rectangle82}
        />
        <Text
          data-layer="48f00d5a-41d8-4dc2-b372-867fb07b708c"
          style={styles.workType_chooseWorkType}>
          Choose Work Type :
        </Text>
        <Svg
          data-layer="4a1aa906-dd11-4d67-99cc-cfa0a761d2eb"
          style={styles.workType_subtraction4}
          preserveAspectRatio="none"
          viewBox="-444.9996032714844 44.000091552734375 374.9993896484375 118.00091552734375"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-subtraction4"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/subtraction4.png")}
                x="0"
                y="0"
                width="375.00px"
                height="118.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M -70.00019836425781 162.0010070800781 L -70.00019836425781 162 L -174.0274200439453 162 C -161.5797424316406 144.5687255859375 -154.9998321533203 123.9945449829102 -154.9998321533203 102.5000915527344 C -154.9998321533203 81.44441223144531 -161.3356475830078 61.21540832519531 -173.3223266601562 44.00009155273438 L -70.00019836425781 44.00009155273438 L -70.00019836425781 162 L -70.00019836425781 162.0010070800781 Z M -340.9740600585938 162.0001373291016 L -340.9739990234375 162 L -444.9996032714844 162 L -444.9996032714844 44.00009155273438 L -341.6774597167969 44.00009155273438 C -353.6638793945312 61.21509170532227 -360 81.44354248046875 -360 102.5000915527344 C -360 123.9935455322266 -353.4203186035156 144.5683135986328 -340.9723205566406 162 L -340.9732360839844 161.9985504150391 L -340.9732971191406 161.9986572265625 C -340.9723205566406 162 -340.9723205566406 162 -340.9723205566406 162 L -340.9740600585938 162.0001373291016 Z"
            fill="url(#img-subtraction4)"
          />
        </Svg>
        <View
          data-layer="204aaaa8-6abe-4119-93fb-828bdab1da89"
          style={styles.workType_person}>
          <Svg
            data-layer="183db72a-ca9a-4bac-9c2e-8e4f13d2fefc"
            style={styles.workType_person_path2}
            preserveAspectRatio="none"
            viewBox="570.7119750976562 464.2452697753906 43.578369140625 27.0477294921875"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 601.9637451171875 464.3019409179688 C 600.6043090820312 464.8003540039062 597.6876831054688 467.0994262695312 593.810791015625 467.8887329101562 C 590.6702880859375 468.5289916992188 586.7880859375 468.052490234375 582.7249755859375 464.3019409179688 C 572.0087280273438 463.2050170898438 569.3085327148438 478.30908203125 571.3336791992188 485.5657348632812 C 573.3587646484375 492.8224487304688 585.2564086914062 491.0504150390625 592.8506469726562 491.1348266601562 C 600.44482421875 491.21923828125 612.2581176757812 492.5693359375 613.861328125 485.5657348632812 C 615.4645385742188 478.5621948242188 612.1737060546875 469.0272216796875 610.5704956054688 468.0990600585938 C 608.96728515625 467.1708374023438 609.2203979492188 464.6394653320312 601.9637451171875 464.3019409179688 Z" />
          </Svg>
          <Svg
            data-layer="e56737b2-3aff-43e8-9c53-4e5294d0bd5f"
            style={styles.workType_person_ellipse1}
            preserveAspectRatio="none"
            viewBox="0 0 25.3802490234375 25.38031005859375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 12.69015216827393 0 C 19.69873046875 0 25.38030433654785 5.681574821472168 25.38030433654785 12.69015216827393 C 25.38030433654785 19.69873046875 19.69873046875 25.38030433654785 12.69015216827393 25.38030433654785 C 5.681574821472168 25.38030433654785 0 19.69873046875 0 12.69015216827393 C 0 5.681574821472168 5.681574821472168 0 12.69015216827393 0 Z" />
          </Svg>
        </View>
        <View
          data-layer="644fdc9b-e5fd-4bb3-b202-e537354a78c5"
          style={styles.workType_tasks}>
          <View
            data-layer="202aea91-5c45-4050-a7d6-ee0f3184bfb1"
            style={styles.workType_tasks_rectangle31}></View>
          <Svg
            data-layer="b3c57273-58a4-4df8-9ebb-575c961ba44f"
            style={styles.workType_tasks_path4}
            preserveAspectRatio="none"
            viewBox="1008.9743041992188 753.8364868164062 11.419921875 9.0130615234375"
            fill="transparent">
            <SvgPath d="M 1011.224304199219 758.7943115234375 L 1012.879089355469 760.5995483398438 L 1018.144348144531 756.0864868164062" />
          </Svg>
          <Svg
            data-layer="8bdf7217-754c-4e61-9e4d-5671f16eda65"
            style={styles.workType_tasks_path5}
            preserveAspectRatio="none"
            viewBox="1008.9743041992188 753.8364868164062 11.419921875 9.0130615234375"
            fill="transparent">
            <SvgPath d="M 1011.224304199219 758.7943115234375 L 1012.879089355469 760.5995483398438 L 1018.144348144531 756.0864868164062" />
          </Svg>
          <Svg
            data-layer="adb52caf-03f8-4e62-9d26-df6b28087bbb"
            style={styles.workType_tasks_path6}
            preserveAspectRatio="none"
            viewBox="1008.9743041992188 753.8364868164062 11.419921875 9.0130615234375"
            fill="transparent">
            <SvgPath d="M 1011.224304199219 758.7943115234375 L 1012.879089355469 760.5995483398438 L 1018.144348144531 756.0864868164062" />
          </Svg>
          <View
            data-layer="52c8dca7-2f0a-42c7-9a7f-894623dc401e"
            style={styles.workType_tasks_rectangle32}></View>
          <View
            data-layer="14c3aa75-8ca6-48db-95ce-f577f2446d6a"
            style={styles.workType_tasks_rectangle35}></View>
          <View
            data-layer="8a7f7b84-19ae-4029-9685-21b7ac33005b"
            style={styles.workType_tasks_rectangle33}></View>
          <View
            data-layer="56244ba5-2731-4ac8-9968-321c26a00fe9"
            style={styles.workType_tasks_rectangle34}></View>
        </View>
        <ReactImage
          data-layer="aa51bca7-4b56-4d25-9c9b-205ba8ba1ca7"
          source={require("./assets/chat.png")}
          style={styles.workType_chat}
        />
        <View
          data-layer="2dc05e41-3c01-4c07-9cc2-5e58a7e82a95"
          style={styles.workType_group30}>
          <Text
            data-layer="c6b55e76-0d60-45eb-b06a-d27e1baa772d"
            style={styles.workType_group30_labour}>
            Labour
          </Text>
          <Text
            data-layer="14ecd866-1dcf-4e2b-850d-b9cbd054ecb4"
            style={styles.workType_group30_neighbour}>
            NEIghboUr
          </Text>
        </View>
        <Svg
          data-layer="2b189c26-145e-4254-85bd-93f0c2f86582"
          style={styles.workType_path3}
          preserveAspectRatio="none"
          viewBox="819.25 -0.75 1.5 1.5"
          fill="transparent">
          <SvgPath d="M 820 0" />
        </Svg>
        <ReactImage
          data-layer="8ad03007-cc2a-46fe-b95a-5e79f8cb89ae"
          source={require("./assets/rectangle5639addbc.png")}
          style={styles.workType_rectangle5639addbc}
        />
        <Svg
          data-layer="d9e3ad65-63a1-47ef-af87-ded037f98830"
          style={styles.workType_subtraction1bffe535e}
          preserveAspectRatio="none"
          viewBox="-0.000012008389603579417 -0.000001609663513590931 146.46240234375 78.71673583984375"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-subtraction1bffe535e"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/subtraction1bffe535e.png")}
                x="0"
                y="0"
                width="146.46px"
                height="78.72px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 95.46211242675781 78.71670532226562 L 51.00029754638672 78.71670532226562 C 44.11511611938477 78.71670532226562 37.43598937988281 77.3682861328125 31.1484432220459 74.70892333984375 C 25.07529640197754 72.14028930664062 19.62113380432129 68.46302032470703 14.93740653991699 63.77928924560547 C 10.2536792755127 59.0955810546875 6.576424121856689 53.64139938354492 4.007788181304932 47.56825256347656 C 1.348406195640564 41.28068923950195 -1.200838960357942e-05 34.6015625 -1.200838960357942e-05 27.71641731262207 L -1.200838960357942e-05 -1.609663513590931e-06 L 146.46240234375 -1.609663513590931e-06 L 146.46240234375 27.71641731262207 C 146.46240234375 34.60158157348633 145.1139526367188 41.28068923950195 142.4545135498047 47.56825256347656 C 139.8858032226562 53.64134216308594 136.2084808349609 59.09552383422852 131.524658203125 63.77928924560547 C 126.8408279418945 68.46305084228516 121.3866424560547 72.14030456542969 115.313591003418 74.70892333984375 C 109.0260620117188 77.3682861328125 102.3470611572266 78.71670532226562 95.46211242675781 78.71670532226562 Z"
            fill="url(#img-subtraction1bffe535e)"
          />
        </Svg>
        <Text
          data-layer="58a8c149-7dc2-45cf-8579-26d93c6d24ed"
          style={styles.workType_onlineWork}>
          Online Work
        </Text>
        <ReactImage
          data-layer="c2885f2b-b4bb-476d-b8f8-d87d86d6d2db"
          source={require("./assets/icons8Service642e98a9ac.png")}
          style={styles.workType_icons8Service642e98a9ac}
        />
        <ReactImage
          data-layer="24ac33aa-8236-46cd-a378-ed28ca898e57"
          source={require("./assets/rectangle5.png")}
          style={styles.workType_rectangle5}
        />
        <Svg
          data-layer="cee99773-63a2-4cf8-ae5b-be8c98e0e486"
          style={styles.workType_subtraction1}
          preserveAspectRatio="none"
          viewBox="-0.000012008389603579417 -0.000001609663513590931 146.46240234375 78.71673583984375"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-subtraction1"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/subtraction1.png")}
                x="0"
                y="0"
                width="146.46px"
                height="78.72px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 95.46211242675781 78.71670532226562 L 51.00029754638672 78.71670532226562 C 44.11511611938477 78.71670532226562 37.43598937988281 77.3682861328125 31.1484432220459 74.70892333984375 C 25.07529640197754 72.14028930664062 19.62113380432129 68.46302032470703 14.93740653991699 63.77928924560547 C 10.2536792755127 59.0955810546875 6.576424121856689 53.64139938354492 4.007788181304932 47.56825256347656 C 1.348406195640564 41.28068923950195 -1.200838960357942e-05 34.6015625 -1.200838960357942e-05 27.71641731262207 L -1.200838960357942e-05 -1.609663513590931e-06 L 146.46240234375 -1.609663513590931e-06 L 146.46240234375 27.71641731262207 C 146.46240234375 34.60158157348633 145.1139526367188 41.28068923950195 142.4545135498047 47.56825256347656 C 139.8858032226562 53.64134216308594 136.2084808349609 59.09552383422852 131.524658203125 63.77928924560547 C 126.8408279418945 68.46305084228516 121.3866424560547 72.14030456542969 115.313591003418 74.70892333984375 C 109.0260620117188 77.3682861328125 102.3470611572266 78.71670532226562 95.46211242675781 78.71670532226562 Z"
            fill="url(#img-subtraction1)"
          />
        </Svg>
        <Text
          data-layer="a3d01451-154d-4258-a9ca-2c1c90bb0b6c"
          style={styles.workType_physicalWork}>
          Physical Work
        </Text>
        <ReactImage
          data-layer="b241f4b4-bc6c-4db6-a352-0194caa1a20e"
          source={require("./assets/icons8Service64.png")}
          style={styles.workType_icons8Service64}
        />
        <Svg
          data-layer="87d78024-104c-433b-96cc-5ba78bbef5d6"
          style={styles.workType_path23}
          preserveAspectRatio="none"
          viewBox="15.246183395385742 912.529052734375 27.7425537109375 38"
          fill="transparent">
          <SvgPath d="M 33.98876953125 915.529052734375 L 18.24618339538574 928.1318359375 L 33.98876953125 938.529052734375" />
        </Svg>
      </ScrollView>
    );
  }
}

WorkType.propTypes = {};

WorkType.defaultProps = {};

const styles = StyleSheet.create({
  workType: {
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
  workType_ellipse24: {
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
    width: 172,
    height: 172,
    left: 102,
    top: 17,
  },
  workType_rectangle82: {
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
    left: 0,
    top: 736,
  },
  workType_chooseWorkType: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 0.9098039215686274)",
    fontSize: 30,
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
    width: 300,
    height: 36,
    left: 37,
    top: 274,
  },
  workType_subtraction4: {
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
    height: 118,
    left: 0,
    top: 40,
  },
  workType_person: {
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
    left: 255.42,
    top: 748,
  },
  workType_person_path2: {
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
  workType_person_ellipse1: {
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
  workType_tasks: {
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
    left: 88,
    top: 748,
  },
  workType_tasks_rectangle31: {
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
  workType_tasks_path4: {
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
  workType_tasks_path5: {
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
  workType_tasks_path6: {
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
  workType_tasks_rectangle32: {
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
  workType_tasks_rectangle35: {
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
  workType_tasks_rectangle33: {
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
  workType_tasks_rectangle34: {
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
  workType_chat: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    width: 61.36,
    height: 55.85,
    left: 164.5,
    top: 749,
  },
  workType_chat_union1: {
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
  workType_chat_path8: {
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
  workType_chat_path10: {
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
  workType_chat_ellipse6: {
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
  workType_chat_ellipse7: {
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
  workType_chat_ellipse8: {
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
  workType_chat_path11: {
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
  workType_group30: {
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
    width: 147.5,
    height: 52.5,
    left: 114,
    top: 79,
  },
  workType_group30_labour: {
    opacity: 1,
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
    width: 124,
    height: 36,
    left: 0,
    top: 0,
  },
  workType_group30_neighbour: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    width: 110,
    height: 24,
    left: 37.5,
    top: 28.5,
  },
  workType_path3: {
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
    width: 2,
    height: 2,
    left: 11,
    top: 31,
  },
  workType_rectangle5639addbc: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 51,
    borderTopRightRadius: 51,
    borderBottomLeftRadius: 51,
    borderBottomRightRadius: 51,
    width: 148.89,
    height: 164,
    left: 33.11,
    top: 406,
  },
  workType_subtraction1bffe535e: {
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
    width: 146.46,
    height: 78.72,
    left: 33,
    top: 521.67,
  },
  workType_onlineWork: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 0.9098039215686274)",
    fontSize: 25,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Lato",
    textAlign: "center",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 74,
    height: 60,
    left: 71.09,
    top: 531,
  },
  workType_icons8Service642e98a9ac: {
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
    width: 82,
    height: 82,
    left: 66,
    top: 433,
  },
  workType_rectangle5: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 51,
    borderTopRightRadius: 51,
    borderBottomLeftRadius: 51,
    borderBottomRightRadius: 51,
    width: 148.89,
    height: 164,
    left: 197.32,
    top: 406,
  },
  workType_subtraction1: {
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
    width: 146.46,
    height: 78.72,
    left: 197.21,
    top: 521.67,
  },
  workType_physicalWork: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 0.9098039215686274)",
    fontSize: 25,
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "Lato",
    textAlign: "center",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 96,
    height: 60,
    left: 224.3,
    top: 531,
  },
  workType_icons8Service64: {
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
    width: 82,
    height: 82,
    left: 230.21,
    top: 433,
  },
  workType_path23: {
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
    top: 83.5,
  },
});
