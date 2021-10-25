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

export default class UserCategory extends Component {
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
        data-layer="e5a86a6f-1dc6-4f79-8b6a-decaaf52638d"
        style={styles.userCategory}>
        <Svg
          data-layer="3217f8e3-293a-4b45-9afa-5ee7da7f1ada"
          style={styles.userCategory_ellipse24}
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
        <Text
          data-layer="60aca71b-8119-463a-aa85-91518ab14b81"
          style={styles.userCategory_howDoYouWannaContinue}>
          How Do You Wanna Continue?
        </Text>
        <View
          data-layer="d7985eca-bfcd-4094-b15b-9f5693ec4d8e"
          style={styles.userCategory_group31}>
          <ReactImage
            data-layer="a5ce2c88-a1dc-4861-b921-ee58326a386c"
            source={require("./assets/rectangle5.png")}
            style={styles.userCategory_group31_rectangle5}
          />
          <Svg
            data-layer="bf6fa0ba-3937-4705-ad90-c12a6c13e432"
            style={styles.userCategory_group31_subtraction1}
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
            data-layer="0e22a7e9-6a0b-4968-8222-e23dc5424667"
            style={styles.userCategory_group31_provideService}>
            Provide Service
          </Text>
        </View>
        <View
          data-layer="3b6ebc07-416c-41a5-afd8-68e55f314639"
          style={styles.userCategory_group32}>
          <ReactImage
            data-layer="73de1e1e-40c3-40cc-ba60-da45f7620db7"
            source={require("./assets/rectangle9.png")}
            style={styles.userCategory_group32_rectangle9}
          />
          <Svg
            data-layer="f51b26a5-eec1-4b09-b937-a2b945a36e24"
            style={styles.userCategory_group32_subtraction2}
            preserveAspectRatio="none"
            viewBox="-0.000003814697265625 0.000013897149983677082 147.5631103515625 79.71661376953125"
            fill="transparent">
            <Defs>
              <Pattern
                id="img-subtraction2"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require("./assets/subtraction2.png")}
                  x="0"
                  y="0"
                  width="147.56px"
                  height="79.72px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 96.56370544433594 79.71659851074219 L 51.00028610229492 79.71659851074219 C 44.11536026000977 79.71659851074219 37.43635940551758 78.36819458007812 31.1488151550293 75.70884704589844 C 25.07568740844727 73.14017486572266 19.62148666381836 69.46294403076172 14.93776035308838 64.77930450439453 C 10.25396060943604 60.09564971923828 6.576614856719971 54.64157867431641 4.007887363433838 48.56855773925781 C 1.348451137542725 42.28110504150391 -3.459028675933951e-06 35.60215759277344 -3.459028675933951e-06 28.71721458435059 L -3.459028675933951e-06 1.389714998367708e-05 L 147.5631103515625 1.389714998367708e-05 L 147.5631256103516 28.71721458435059 C 147.5631256103516 35.60208511352539 146.2147216796875 42.28103256225586 143.5553741455078 48.56855773925781 C 140.9867095947266 54.64159393310547 137.3094635009766 60.09566879272461 132.6258087158203 64.77930450439453 C 127.942138671875 69.46295928955078 122.4880676269531 73.14019775390625 116.4150543212891 75.70884704589844 C 110.1275787353516 78.36819458007812 103.448616027832 79.71659851074219 96.56370544433594 79.71659851074219 Z"
              fill="url(#img-subtraction2)"
            />
          </Svg>
          <Text
            data-layer="1d676e98-b271-4839-a315-21467ec50996"
            style={styles.userCategory_group32_takeservice}>
            Take Service
          </Text>
          <ReactImage
            data-layer="0adc0ded-4250-4e6d-b2b9-065c40a224f3"
            source={require("./assets/nopathCopy13.png")}
            style={styles.userCategory_group32_nopathCopy13}
          />
        </View>
        <Svg
          data-layer="7fd34cd4-2c64-4b04-a376-e68d5a9789eb"
          style={styles.userCategory_subtraction4}
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
          data-layer="1dc57b2e-09b0-40a5-a762-478fa111e3f7"
          style={styles.userCategory_person}>
          <Svg
            data-layer="d3900561-40e2-4cd5-b686-03329a7a3de8"
            style={styles.userCategory_person_path2}
            preserveAspectRatio="none"
            viewBox="570.7119750976562 464.2452697753906 43.578369140625 27.0477294921875"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 601.9637451171875 464.3019409179688 C 600.6043090820312 464.8003540039062 597.6876831054688 467.0994262695312 593.810791015625 467.8887329101562 C 590.6702880859375 468.5289916992188 586.7880859375 468.052490234375 582.7249755859375 464.3019409179688 C 572.0087280273438 463.2050170898438 569.3085327148438 478.30908203125 571.3336791992188 485.5657348632812 C 573.3587646484375 492.8224487304688 585.2564086914062 491.0504150390625 592.8506469726562 491.1348266601562 C 600.44482421875 491.21923828125 612.2581176757812 492.5693359375 613.861328125 485.5657348632812 C 615.4645385742188 478.5621948242188 612.1737060546875 469.0272216796875 610.5704956054688 468.0990600585938 C 608.96728515625 467.1708374023438 609.2203979492188 464.6394653320312 601.9637451171875 464.3019409179688 Z" />
          </Svg>
          <Svg
            data-layer="06bef2e7-0369-4ede-8cd9-2db52cf34a05"
            style={styles.userCategory_person_ellipse1}
            preserveAspectRatio="none"
            viewBox="0 0 25.3802490234375 25.38031005859375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 12.69015216827393 0 C 19.69873046875 0 25.38030433654785 5.681574821472168 25.38030433654785 12.69015216827393 C 25.38030433654785 19.69873046875 19.69873046875 25.38030433654785 12.69015216827393 25.38030433654785 C 5.681574821472168 25.38030433654785 0 19.69873046875 0 12.69015216827393 C 0 5.681574821472168 5.681574821472168 0 12.69015216827393 0 Z" />
          </Svg>
        </View>
        <View
          data-layer="43d3e7a5-015f-4ef7-80f9-3dce66f8ec36"
          style={styles.userCategory_group30}>
          <Text
            data-layer="ba962b75-a470-4d62-a2ff-fc39e4c2fde2"
            style={styles.userCategory_group30_labour}>
            Labour
          </Text>
          <Text
            data-layer="2c7d0283-b22b-4f9b-819e-3fb259dd50ba"
            style={styles.userCategory_group30_neighbour}>
            NEIghboUr
          </Text>
        </View>
        <Svg
          data-layer="443c8d79-33fc-4f3b-9559-dcf54fe30150"
          style={styles.userCategory_subtraction7}
          preserveAspectRatio="none"
          viewBox="-444.9996032714844 44.00008773803711 374.9993896484375 70.001220703125"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-subtraction7"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/subtraction7.png")}
                x="0"
                y="0"
                width="375.00px"
                height="70.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M -70.00019836425781 114.0012741088867 L -70.00019836425781 114.0002746582031 L -168.3927001953125 114.0002746582031 C -156.3605194091797 103.8371810913086 -150.0002899169922 91.97831726074219 -150.0002899169922 79.70400238037109 C -150.0002899169922 66.82077026367188 -156.9535980224609 54.47459030151367 -170.1085662841797 44.00008773803711 L -70.00019836425781 44.00008773803711 L -70.00019836425781 114.0002746582031 L -70.00019836425781 114.0012741088867 Z M -350.6076049804688 114.0002746582031 L -444.9996032714844 114.0002746582031 L -444.9996032714844 44.00008773803711 L -348.8916931152344 44.00008773803711 C -362.0464782714844 54.47436141967773 -369 66.81995391845703 -369 79.70400238037109 C -369 91.97672271728516 -362.6407470703125 103.8355865478516 -350.6097106933594 113.9984970092773 L -350.6076049804688 114.0002746582031 L -350.6103210449219 114.0002746582031 L -350.6076049804688 114.0002746582031 Z"
            fill="url(#img-subtraction7)"
          />
        </Svg>
        <Svg
          data-layer="f0676b32-1d3f-44b9-9d13-62afc214e02a"
          style={styles.userCategory_ellipse26}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 77.5 65.5"
          fill="transparent">
          <Defs>
            <Pattern
              id="img-ellipse26"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%">
              <SvgImage
                xlinkHref={require("./assets/ellipse26.png")}
                x="0"
                y="0"
                width="76.00px"
                height="64.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 38 0 C 58.98681640625 0 76 14.32688903808594 76 32 C 76 49.67311096191406 58.98681640625 64 38 64 C 17.01318168640137 64 0 49.67311096191406 0 32 C 0 14.32688903808594 17.01318168640137 0 38 0 Z"
            fill="url(#img-ellipse26)"
          />
        </Svg>
        <ReactImage
          data-layer="00b54c10-ce6d-42eb-b10e-366ecb88f04c"
          source={require("./assets/icons8Service64.png")}
          style={styles.userCategory_icons8Service64}
        />
        <View
          data-layer="964a545a-2ba9-48bf-8636-c732ef9d0917"
          style={styles.userCategory_barstimeBlack}>
          <Svg
            data-layer="4f10049b-203b-43d4-88ad-7df2d766f833"
            style={styles.userCategory_barstimeBlack_background}
            preserveAspectRatio="none"
            viewBox="21 -35 54 16"
            fill="transparent">
            <SvgPath d="M 21 -19 L 75 -19 L 75 -35 L 21 -35 L 21 -19 Z" />
          </Svg>
        </View>
      </ScrollView>
    );
  }
}

UserCategory.propTypes = {};

UserCategory.defaultProps = {};

const styles = StyleSheet.create({
  userCategory: {
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
  userCategory_ellipse24: {
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
  userCategory_howDoYouWannaContinue: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 0.9098039215686274)",
    fontSize: 21,
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
    width: 328,
    height: 25,
    left: 23,
    top: 288.5,
  },
  userCategory_group31: {
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
    width: 149,
    height: 194.39,
    left: 33,
    top: 406,
  },
  userCategory_group31_rectangle5: {
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
    left: 0.11,
    top: 0,
  },
  userCategory_group31_subtraction1: {
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
    left: 0,
    top: 115.67,
  },
  userCategory_group31_provideService: {
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
    width: 88,
    height: 60,
    left: 31.09,
    top: 125,
  },
  userCategory_group32: {
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
    width: 149,
    height: 194.39,
    left: 199.5,
    top: 406,
  },
  userCategory_group32_rectangle9: {
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
    width: 149,
    height: 166,
    left: 0,
    top: 0,
  },
  userCategory_group32_subtraction2: {
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
    width: 147.56,
    height: 79.72,
    left: 0.84,
    top: 114.67,
  },
  userCategory_group32_takeservice: {
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
    width: 82,
    height: 60,
    left: 33.5,
    top: 124.53,
  },
  userCategory_group32_nopathCopy13: {
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
    width: 77,
    height: 77,
    left: 39,
    top: 25,
  },
  userCategory_subtraction4: {
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
  userCategory_person: {
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
    left: 324.42,
    top: 748,
  },
  userCategory_person_path2: {
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
  userCategory_person_ellipse1: {
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
  userCategory_group30: {
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
  userCategory_group30_labour: {
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
  userCategory_group30_neighbour: {
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
  userCategory_subtraction7: {
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
    height: 70,
    left: 0,
    top: 748,
  },
  userCategory_ellipse26: {
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
    width: 76,
    height: 64,
    left: 146,
    top: 748,
  },
  userCategory_icons8Service64: {
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
  userCategory_barstimeBlack: {
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
    top: 8.27,
  },
  userCategory_barstimeBlack_background: {
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
});
