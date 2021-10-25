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

export default class MyServices extends Component {
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
        data-layer="af1f123d-9789-4d1a-99df-ae12b83855f1"
        style={styles.myServices}>
        <Svg
          data-layer="b59d242e-fcad-4703-9fca-bc2ad27043d7"
          style={styles.myServices_path46}
          preserveAspectRatio="none"
          viewBox="-0.3916558623313904 -0.24638301134109497 335.39483642578125 39.351318359375"
          fill="rgba(255, 255, 255, 1)">
          <SvgPath d="M 0 0 L 335 0 C 335 -2.0201416015625 335 8.730446815490723 335 19.5 C 335 30.26955413818359 335.0071411132812 40.241455078125 335 39 L 225.5444641113281 39 L 0 39 C 0.44061279296875 38.10382080078125 0 30.26955413818359 0 19.5 C 0 8.730446815490723 -0.8812255859375 0.2095947265625 0 0 Z" />
        </Svg>
        <Text
          data-layer="cbe555ed-971c-4d19-962c-1bba91410a26"
          style={styles.myServices_search}>
          Search
        </Text>
        <ReactImage
          data-layer="d11b9ab0-81be-4cc5-a200-fdf10f76a93c"
          source={require("./assets/rectangle159.png")}
          style={styles.myServices_rectangle159}
        />
        <Svg
          data-layer="c47b9cdf-32a4-4507-b8d3-59f53e77a46b"
          style={styles.myServices_woman1127201}
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
          data-layer="b9016170-8974-424e-86b1-c76ebc6fd675"
          style={styles.myServices_completed}>
          Completed
        </Text>
        <Text
          data-layer="e58c6cd8-1a8b-4142-ae37-5617248c3d67"
          style={styles.myServices_remoteWork}>
          Remote Work
        </Text>
        <ReactImage
          data-layer="e4c41b56-d67b-4211-86c6-86f9a8f6bfbd"
          source={require("./assets/nopathCopy13.png")}
          style={styles.myServices_nopathCopy13}
        />
        <Text
          data-layer="ec5d4856-7d2c-4d92-94fd-9c76da23fecb"
          style={styles.myServices_needAGraphicDesigner}>
          Need A graphic designer
        </Text>
        <Text
          data-layer="dfae0e1f-a969-4c65-b5a4-14a49256bf0a"
          style={styles.myServices_reviews}>
          Reviews:
        </Text>
        <View
          data-layer="4964f202-0ca6-4237-a4e2-9cd9aba57156"
          style={styles.myServices_group46}>
          <View
            data-layer="05d4c08c-c4a3-4e6e-952b-06b804dfbdd4"
            style={styles.myServices_group46_rectangle36ec9ceac7}></View>
          <Svg
            data-layer="bffea699-30e5-4905-ad23-94f8b5d4ad5d"
            style={styles.myServices_group46_subtraction53f3ec07b}
            preserveAspectRatio="none"
            viewBox="2.8839630772381497e-7 0 22.4757080078125 20.11474609375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 11.23787021636963 20.11477661132812 C 8.236237525939941 20.11477661132812 5.414217472076416 19.06859588623047 3.291560888290405 17.1689510345459 C 1.168967366218567 15.2692985534668 2.88396307723815e-07 12.74369144439697 2.88396307723815e-07 10.05738735198975 C 2.88396307723815e-07 7.370921611785889 1.168967366218567 4.845261573791504 3.291560888290405 2.945663928985596 C 5.414121627807617 1.046122312545776 8.236174583435059 0 11.23787021636963 0 C 14.23969173431396 0 17.06177711486816 1.046122312545776 19.18430709838867 2.945663928985596 C 21.30680465698242 4.845215320587158 22.4757080078125 7.370871067047119 22.4757080078125 10.05738735198975 C 22.4757080078125 12.74374580383301 21.30680465698242 15.26934623718262 19.18430709838867 17.1689510345459 C 17.06174659729004 19.06859588623047 14.23966121673584 20.11477661132812 11.23787021636963 20.11477661132812 Z M 11.23787021636963 3.274576663970947 C 7.058817386627197 3.274576663970947 3.658916234970093 6.317333698272705 3.658916234970093 10.05738735198975 C 3.658916234970093 13.79743957519531 7.058817386627197 16.84020042419434 11.23787021636963 16.84020042419434 C 15.41689109802246 16.84020042419434 18.81679153442383 13.79743957519531 18.81679153442383 10.05738735198975 C 18.81679153442383 6.317333698272705 15.41689109802246 3.274576663970947 11.23787021636963 3.274576663970947 Z" />
          </Svg>
        </View>
        <View
          data-layer="6713de76-ce0f-40b0-ad4a-50c2338b68b4"
          style={styles.myServices_barstimeBlack}>
          <Svg
            data-layer="cb53d861-3bae-4bfa-a37a-bb88932b096f"
            style={styles.myServices_barstimeBlack_background}
            preserveAspectRatio="none"
            viewBox="21 -35 54 16"
            fill="transparent">
            <SvgPath d="M 21 -19 L 75 -19 L 75 -35 L 21 -35 L 21 -19 Z" />
          </Svg>
        </View>
        <ReactImage
          data-layer="4bfea67c-49d1-4ec7-baeb-7215be3015f5"
          source={require("./assets/rectangle13.png")}
          style={styles.myServices_rectangle13}
        />
        <Text
          data-layer="3ef00c20-0ca7-4d5f-9e5d-69661a40edde"
          style={styles.myServices_myServicesa5dfcebc}>
          My Services
        </Text>
        <Svg
          data-layer="f9e70523-6289-46fb-b70c-ea53e5065fb6"
          style={styles.myServices_path23}
          preserveAspectRatio="none"
          viewBox="15.246183395385742 912.529052734375 27.74261474609375 38"
          fill="transparent">
          <SvgPath d="M 33.98876953125 915.529052734375 L 18.24618339538574 928.1318359375 L 33.98876953125 938.529052734375" />
        </Svg>
        <ReactImage
          data-layer="faa1b2d7-e0bb-4018-8b76-d2ba22e70782"
          source={require("./assets/rectangle15.png")}
          style={styles.myServices_rectangle15}
        />
        <View
          data-layer="4ec7033e-36fe-47a4-a987-0733ef4e69d1"
          style={styles.myServices_person}>
          <Svg
            data-layer="5db8f81d-84ed-4ac6-aeb6-aaa71a48e396"
            style={styles.myServices_person_path2}
            preserveAspectRatio="none"
            viewBox="570.7119750976562 464.2452697753906 43.578369140625 27.0477294921875"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 601.9637451171875 464.3019409179688 C 600.6043090820312 464.8003540039062 597.6876831054688 467.0994262695312 593.810791015625 467.8887329101562 C 590.6702880859375 468.5289916992188 586.7880859375 468.052490234375 582.7249755859375 464.3019409179688 C 572.0087280273438 463.2050170898438 569.3085327148438 478.30908203125 571.3336791992188 485.5657348632812 C 573.3587646484375 492.8224487304688 585.2564086914062 491.0504150390625 592.8506469726562 491.1348266601562 C 600.44482421875 491.21923828125 612.2581176757812 492.5693359375 613.861328125 485.5657348632812 C 615.4645385742188 478.5621948242188 612.1737060546875 469.0272216796875 610.5704956054688 468.0990600585938 C 608.96728515625 467.1708374023438 609.2203979492188 464.6394653320312 601.9637451171875 464.3019409179688 Z" />
          </Svg>
          <Svg
            data-layer="e775e485-85c7-4b1f-9489-9bc8ce49e24f"
            style={styles.myServices_person_ellipse1}
            preserveAspectRatio="none"
            viewBox="0 0 25.3802490234375 25.3802490234375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 12.69015216827393 0 C 19.69873046875 0 25.38030433654785 5.681574821472168 25.38030433654785 12.69015216827393 C 25.38030433654785 19.69873046875 19.69873046875 25.38030433654785 12.69015216827393 25.38030433654785 C 5.681574821472168 25.38030433654785 0 19.69873046875 0 12.69015216827393 C 0 5.681574821472168 5.681574821472168 0 12.69015216827393 0 Z" />
          </Svg>
        </View>
        <ReactImage
          data-layer="6a3cbb56-fab5-47d6-b52b-9a73a0154086"
          source={require("./assets/chat.png")}
          style={styles.myServices_chat}
        />
        <View
          data-layer="f35b08e3-ab88-4223-a965-1d6d3cb2b01a"
          style={styles.myServices_group47}>
          <View
            data-layer="a968afa3-c9b3-4d1a-be31-25d4fe19b4cb"
            style={styles.myServices_group47_rectangle36}></View>
          <Svg
            data-layer="c6faa33c-cb05-448b-9c22-83ef14967fe1"
            style={styles.myServices_group47_subtraction5}
            preserveAspectRatio="none"
            viewBox="0 0 43.4757080078125 41.11474609375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 21.73788642883301 41.11477279663086 C 15.93170166015625 41.11477279663086 10.47294807434082 38.97637176513672 6.36700439453125 35.09348297119141 C 2.261182308197021 31.21057510375977 0 26.04821395874023 0 20.5573844909668 C 0 15.0662260055542 2.261182308197021 9.903756141662598 6.36700439453125 6.020962238311768 C 10.47276306152344 2.138282775878906 15.93157958984375 0 21.73788642883301 0 C 27.54443550109863 0 33.00331497192383 2.138282775878906 37.10901260375977 6.020962238311768 C 41.21464920043945 9.903661727905273 43.4757080078125 15.06612300872803 43.4757080078125 20.5573844909668 C 43.4757080078125 26.04832458496094 41.21464920043945 31.21067428588867 37.10901260375977 35.09348297119141 C 33.00325393676758 38.97637176513672 27.54437637329102 41.11477279663086 21.73788642883301 41.11477279663086 Z M 21.73788642883301 6.693262577056885 C 13.65416717529297 6.693262577056885 7.077595233917236 12.91268348693848 7.077595233917236 20.5573844909668 C 7.077595233917236 28.20208358764648 13.65416717529297 34.42151260375977 21.73788642883301 34.42151260375977 C 29.82154273986816 34.42151260375977 36.39811325073242 28.20208358764648 36.39811325073242 20.5573844909668 C 36.39811325073242 12.91268348693848 29.82154273986816 6.693262577056885 21.73788642883301 6.693262577056885 Z" />
          </Svg>
        </View>
        <ReactImage
          data-layer="e7f13f03-38b4-4d53-8cf1-ae386f6fcd8e"
          source={require("./assets/nopathCopy24357309e4.png")}
          style={styles.myServices_nopathCopy24357309e4}
        />
        <ReactImage
          data-layer="6d983413-1091-4334-bbe4-0dc7b1ef6f92"
          source={require("./assets/nopathCopy24a1e1f892.png")}
          style={styles.myServices_nopathCopy24a1e1f892}
        />
        <ReactImage
          data-layer="5f2f63c8-d68b-4bbf-b988-29c2936a9704"
          source={require("./assets/nopathCopy24c7e85c07.png")}
          style={styles.myServices_nopathCopy24c7e85c07}
        />
        <ReactImage
          data-layer="d13c32a9-90c7-4972-b3de-eea1c97015d9"
          source={require("./assets/nopathCopy240bd7fb6c.png")}
          style={styles.myServices_nopathCopy240bd7fb6c}
        />
        <ReactImage
          data-layer="1d9a4610-cab3-4306-9c9a-af9be352f705"
          source={require("./assets/nopathCopy24.png")}
          style={styles.myServices_nopathCopy24}
        />
      </ScrollView>
    );
  }
}

MyServices.propTypes = {};

MyServices.defaultProps = {};

const styles = StyleSheet.create({
  myServices: {
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
  myServices_path46: {
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
  myServices_search: {
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
  myServices_rectangle159: {
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
  myServices_woman1127201: {
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
  myServices_completed: {
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
  myServices_remoteWork: {
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
    width: 42,
    height: 8,
    left: 109,
    top: 256,
  },
  myServices_nopathCopy13: {
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
  myServices_needAGraphicDesigner: {
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
  myServices_reviews: {
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
    width: 39,
    height: 12,
    left: 237.5,
    top: 247,
  },
  myServices_group46: {
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
  myServices_group46_rectangle36ec9ceac7: {
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
  myServices_group46_subtraction53f3ec07b: {
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
  myServices_barstimeBlack: {
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
  myServices_barstimeBlack_background: {
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
  myServices_rectangle13: {
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
    width: 390,
    height: 54,
    left: 0,
    top: 31,
  },
  myServices_myServicesa5dfcebc: {
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
    width: 174,
    height: 40,
    left: 108,
    top: 36,
  },
  myServices_path23: {
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
  myServices_rectangle15: {
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
    width: 390,
    height: 76,
    left: 0,
    top: 740,
  },
  myServices_person: {
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
    left: 267.42,
    top: 748,
  },
  myServices_person_path2: {
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
  myServices_person_ellipse1: {
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
  myServices_chat: {
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
  myServices_chat_union1: {
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
  myServices_chat_path8: {
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
  myServices_chat_path10: {
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
  myServices_chat_ellipse6: {
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
  myServices_chat_ellipse7: {
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
  myServices_chat_ellipse8: {
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
  myServices_chat_path11: {
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
  myServices_group47: {
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
    width: 57.52,
    height: 55.36,
    left: 77.38,
    top: 753.39,
  },
  myServices_group47_rectangle36: {
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
    width: 30,
    height: 2.92,
    left: 30.72,
    top: 42.42,
  },
  myServices_group47_subtraction5: {
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
    width: 43.48,
    height: 41.11,
    left: 0,
    top: 0,
  },
  myServices_nopathCopy24357309e4: {
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
    left: 290,
    top: 247,
  },
  myServices_nopathCopy24a1e1f892: {
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
    left: 308,
    top: 247,
  },
  myServices_nopathCopy24c7e85c07: {
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
    left: 345,
    top: 247,
  },
  myServices_nopathCopy240bd7fb6c: {
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
    left: 325,
    top: 247,
  },
  myServices_nopathCopy24: {
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
    left: 365,
    top: 247,
  },
});
