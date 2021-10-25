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

export default class Profile extends Component {
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
        data-layer="f5816dcf-4041-451e-9833-b58311802f12"
        style={styles.profile}>
        <Svg
          data-layer="8e5d5d7f-c26f-4c5e-a591-584c21d2f8d3"
          style={styles.profile_path35}
          preserveAspectRatio="none"
          viewBox="0 0 375 812"
          fill="rgba(245, 245, 245, 1)">
          <SvgPath d="M 0 0 L 85.77930450439453 0 L 375 0 L 375 812 L 0 812 L 0 0 Z" />
        </Svg>
        <View
          data-layer="4542ccbe-8287-4eab-adfb-a99967d99a7d"
          style={styles.profile_rectangle72}></View>
        <View
          data-layer="de268a98-64f3-4481-9fc0-1be9bdbab9dc"
          style={styles.profile_rectangle74}></View>
        <View
          data-layer="5ea49646-d682-45cf-8652-2f3e6a17717e"
          style={styles.profile_rectangle75}></View>
        <View
          data-layer="198834af-fdcf-4965-b065-1c92e7aeec1e"
          style={styles.profile_rectangle76}></View>
        <ReactImage
          data-layer="9c56abe7-6cc8-46dc-831c-d66a18b135ff"
          source={require("./assets/rectangle77767c60b3.png")}
          style={styles.profile_rectangle77767c60b3}
        />
        <ReactImage
          data-layer="fba14e8a-a4e2-4665-8264-f6d0cc28b050"
          source={require("./assets/rectangle7723332947.png")}
          style={styles.profile_rectangle7723332947}
        />
        <ReactImage
          data-layer="f6afbadd-7df3-41f3-b517-160684f69e23"
          source={require("./assets/rectangle84.png")}
          style={styles.profile_rectangle84}
        />
        <ReactImage
          data-layer="02cb4bfb-c717-417e-b32d-ce9cfb2c93e1"
          source={require("./assets/rectangle77.png")}
          style={styles.profile_rectangle77}
        />
        <ReactImage
          data-layer="029905d0-6017-4f63-bf34-5a9a7bf06747"
          source={require("./assets/rectangle69.png")}
          style={styles.profile_rectangle69}
        />
        <ReactImage
          data-layer="afd0de62-a9bb-4f21-a121-7c37a2686a49"
          source={require("./assets/rectangle78.png")}
          style={styles.profile_rectangle78}
        />
        <ReactImage
          data-layer="2fa0c091-a027-471d-8464-fc85c8792037"
          source={require("./assets/rectangle81.png")}
          style={styles.profile_rectangle81}
        />
        <ReactImage
          data-layer="2b4eb0fa-38fd-4498-88d0-bd491966d46e"
          source={require("./assets/woman3551832.png")}
          style={styles.profile_woman3551832}
        />
        <Svg
          data-layer="de678fc1-8b74-416a-b914-872fc7a3459a"
          style={styles.profile_pexelsTunKitJr1382731}
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 116.5 116.5"
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
                width="115.00px"
                height="115.00px"
              />
            </Pattern>
          </Defs>
          <SvgPath
            d="M 57.5 0 C 89.25637054443359 0 115 25.74362945556641 115 57.5 C 115 89.25637054443359 89.25637054443359 115 57.5 115 C 25.74362945556641 115 0 89.25637054443359 0 57.5 C 0 25.74362945556641 25.74362945556641 0 57.5 0 Z"
            fill="url(#img-pexelsTunKitJr1382731)"
          />
        </Svg>
        <Text
          data-layer="04c6ed19-71fb-4dcf-a79f-2f0bc9c9ab38"
          style={styles.profile_maheenKhan}>
          maheen Khan
        </Text>
        <ReactImage
          data-layer="6b556387-bfd6-429f-8f9f-79db1b5f6891"
          source={require("./assets/nopathCopy24e1aaa239.png")}
          style={styles.profile_nopathCopy24e1aaa239}
        />
        <ReactImage
          data-layer="b9697963-82c8-4b36-8a5e-94f6c39e5758"
          source={require("./assets/nopathCopy241179052a.png")}
          style={styles.profile_nopathCopy241179052a}
        />
        <ReactImage
          data-layer="5ff26d0a-9572-4390-951b-22c005b9922b"
          source={require("./assets/nopathCopy24e79bb074.png")}
          style={styles.profile_nopathCopy24e79bb074}
        />
        <ReactImage
          data-layer="fd2ab243-c864-48e9-8107-b7c54bb237c0"
          source={require("./assets/nopathCopy2467aea1a4.png")}
          style={styles.profile_nopathCopy2467aea1a4}
        />
        <ReactImage
          data-layer="684d8e06-1c3b-440f-bcef-a66100096c0e"
          source={require("./assets/nopathCopy24.png")}
          style={styles.profile_nopathCopy24}
        />
        <View
          data-layer="d7043c02-c65b-416a-92c8-087850239222"
          style={styles.profile_rectangle67}></View>
        <View
          data-layer="9b44d8aa-080f-4402-af16-16102f3852ba"
          style={styles.profile_rectangle68}></View>
        <Text
          data-layer="a6c833a2-c4ec-4fdb-b4f5-2752c28e9d77"
          style={styles.profile_memberSinceAug1947}>
          Member since : AUG 1947
        </Text>
        <Text
          data-layer="16dd1e23-e54c-4f3f-81f3-90dfc1c261f4"
          style={styles.profile_verification}>
          Verification
        </Text>
        <Text
          data-layer="4859d031-206a-4ed4-96fe-2a2851d47b56"
          style={styles.profile_reviews}>
          Reviews
        </Text>
        <Text
          data-layer="b2947664-5a48-4c02-9f3a-3d6abcf157fc"
          style={styles.profile_portfolio}>
          Portfolio
        </Text>
        <Text
          data-layer="c38f98a1-8172-4bcb-8969-98ae3ce879f3"
          style={styles.profile_skills}>
          Skills
        </Text>
        <Text
          data-layer="b199b030-bced-4b43-844e-3f329812ce85"
          style={styles.profile_education}>
          Education
        </Text>
        <Text
          data-layer="7122c3b3-5f68-4fe1-86ad-ebe0bbc7c71e"
          style={styles.profile_languages}>
          Languages
        </Text>
        <Text
          data-layer="0088b725-c2f1-4069-b22f-f3d28dab152e"
          style={styles.profile_specialities}>
          Specialities
        </Text>
        <Text
          data-layer="76145e9c-1aab-44e5-924c-e05ac0049b19"
          style={styles.profile_lahorePunjab}>
          Lahore , Punjab
        </Text>
        <Text
          data-layer="4c8fa83b-baf4-48ed-8ccc-533b9cad6148"
          style={styles.profile_cnicEmailPhone}>
          CNIC , EMAIL ,PHONE
        </Text>
        <Svg
          data-layer="423381f5-0a8b-4f39-b0fa-669c50ffd1f0"
          style={styles.profile_path2177985086}
          preserveAspectRatio="none"
          viewBox="764.3162231445312 1346.249755859375 32.73638916015625 24.839111328125"
          fill="transparent">
          <SvgPath d="M 788.8026123046875 1348.499755859375 L 778.1625366210938 1359.8388671875 L 778.1625366210938 1359.8388671875 L 766.5662231445312 1348.499755859375" />
        </Svg>
        <Svg
          data-layer="d1872101-c72d-4a1f-b701-3c45dc9af5aa"
          style={styles.profile_path2119e13229}
          preserveAspectRatio="none"
          viewBox="764.3162231445312 1346.249755859375 32.73638916015625 24.839111328125"
          fill="transparent">
          <SvgPath d="M 788.8026123046875 1348.499755859375 L 778.1625366210938 1359.8388671875 L 778.1625366210938 1359.8388671875 L 766.5662231445312 1348.499755859375" />
        </Svg>
        <Svg
          data-layer="c3a15fd2-be61-48b7-b16a-1d550143182a"
          style={styles.profile_path22}
          preserveAspectRatio="none"
          viewBox="764.3162231445312 1346.249755859375 32.73638916015625 24.839111328125"
          fill="transparent">
          <SvgPath d="M 788.8026123046875 1348.499755859375 L 778.1625366210938 1359.8388671875 L 778.1625366210938 1359.8388671875 L 766.5662231445312 1348.499755859375" />
        </Svg>
        <Svg
          data-layer="ccac7024-ba9d-4771-a0e2-ab18121491a5"
          style={styles.profile_path21}
          preserveAspectRatio="none"
          viewBox="764.3162231445312 1346.249755859375 32.73638916015625 24.839111328125"
          fill="transparent">
          <SvgPath d="M 788.8026123046875 1348.499755859375 L 778.1625366210938 1359.8388671875 L 778.1625366210938 1359.8388671875 L 766.5662231445312 1348.499755859375" />
        </Svg>
        <View
          data-layer="0c43adba-31a1-4e29-9a21-a6c64ed9db8d"
          style={styles.profile_rectangle79}></View>
        <View
          data-layer="8c0c0a27-d97c-4519-bf14-c2176ac59c15"
          style={styles.profile_rectangle80}></View>
        <View
          data-layer="017a05be-0aef-451f-acd0-70cbcd32ba45"
          style={styles.profile_group20}>
          <View
            data-layer="1eccff0e-dbf4-4f4e-8767-e78a8ef44751"
            style={styles.profile_group20_group19}>
            <ReactImage
              data-layer="738b3d3e-ad47-453c-b12e-809ee40e95eb"
              source={require("./assets/nopathCopy260d2e1c81.png")}
              style={styles.profile_group20_group19_nopathCopy260d2e1c81}
            />
            <ReactImage
              data-layer="527a9af2-4f54-40d5-81ec-422463ac0b74"
              source={require("./assets/nopathCopy2610ace9a8.png")}
              style={styles.profile_group20_group19_nopathCopy2610ace9a8}
            />
            <ReactImage
              data-layer="3c76998d-8ddf-4aed-afac-6632f338a365"
              source={require("./assets/nopathCopy268e3fe7db.png")}
              style={styles.profile_group20_group19_nopathCopy268e3fe7db}
            />
            <ReactImage
              data-layer="afb0a698-fada-402b-a295-eab3bd60a545"
              source={require("./assets/nopathCopy2667d583fc.png")}
              style={styles.profile_group20_group19_nopathCopy2667d583fc}
            />
            <ReactImage
              data-layer="a8dfd10d-011b-4a27-bc71-3120fac97e1e"
              source={require("./assets/nopathCopy261e0fc299.png")}
              style={styles.profile_group20_group19_nopathCopy261e0fc299}
            />
          </View>
          <ReactImage
            data-layer="beeefc5b-4e69-4d03-970d-02d83858540e"
            source={require("./assets/nopathCopy26c1ce3ef6.png")}
            style={styles.profile_group20_nopathCopy26c1ce3ef6}
          />
          <ReactImage
            data-layer="ef1304e2-96c4-4f4d-ab66-ff87af8cdca2"
            source={require("./assets/nopathCopy26ca57508a.png")}
            style={styles.profile_group20_nopathCopy26ca57508a}
          />
          <ReactImage
            data-layer="b09a28a8-7947-4e20-bb4b-271afbcdaa91"
            source={require("./assets/nopathCopy26f6b8c4d3.png")}
            style={styles.profile_group20_nopathCopy26f6b8c4d3}
          />
          <ReactImage
            data-layer="3f49a32d-8f32-41b1-a62c-a27d3fcb0eb9"
            source={require("./assets/nopathCopy2639f51ade.png")}
            style={styles.profile_group20_nopathCopy2639f51ade}
          />
          <ReactImage
            data-layer="65c84aa7-810f-450b-94ee-5f4ae94b317b"
            source={require("./assets/nopathCopy264abe0f37.png")}
            style={styles.profile_group20_nopathCopy264abe0f37}
          />
          <ReactImage
            data-layer="1762d5bc-0b38-48a4-bbd8-11f7b3c72a01"
            source={require("./assets/nopathCopy263de17c29.png")}
            style={styles.profile_group20_nopathCopy263de17c29}
          />
          <ReactImage
            data-layer="4d3f7755-ea50-4445-86ef-8af8b8a0087b"
            source={require("./assets/nopathCopy26157258af.png")}
            style={styles.profile_group20_nopathCopy26157258af}
          />
          <ReactImage
            data-layer="b345b26b-3740-4334-b95e-d7bcc7be7114"
            source={require("./assets/nopathCopy265496020c.png")}
            style={styles.profile_group20_nopathCopy265496020c}
          />
          <ReactImage
            data-layer="9ea0c3ad-f010-4f88-93c3-2512fb801b1c"
            source={require("./assets/nopathCopy2685648c56.png")}
            style={styles.profile_group20_nopathCopy2685648c56}
          />
          <ReactImage
            data-layer="a90e96b9-f660-4b86-9a47-200f02c356d3"
            source={require("./assets/nopathCopy26.png")}
            style={styles.profile_group20_nopathCopy26}
          />
        </View>
        <Text
          data-layer="cd596adf-f657-4c80-92a0-f6c20c4aca0a"
          style={styles.profile_x0164752ac}>
          0
        </Text>
        <Text
          data-layer="dbd62b1f-7ac1-4378-a3a8-b65abb9326c2"
          style={styles.profile_x0565726d6}>
          0
        </Text>
        <Text
          data-layer="02a56900-cf51-46cd-970d-e8af56d0241b"
          style={styles.profile_x02c866a41}>
          0
        </Text>
        <Text
          data-layer="fd9f9257-9f9e-41b4-bc21-989bdbfcb36f"
          style={styles.profile_x091e5f601}>
          0
        </Text>
        <Text
          data-layer="a1d0682a-5aae-402f-9ecf-f99ab9bd2894"
          style={styles.profile_x0}>
          0
        </Text>
        <Svg
          data-layer="e6e2a767-e1ce-441c-a5c0-5361e458a5d6"
          style={styles.profile_path29}
          preserveAspectRatio="none"
          viewBox="15.246183395385742 912.529052734375 24.64940643310547 47.2330322265625"
          fill="transparent">
          <SvgPath d="M 30.89558982849121 915.529052734375 L 18.24618339538574 933.1910400390625 L 30.89558982849121 947.7620849609375" />
        </Svg>
        <View
          data-layer="dacc3bff-2a0c-4fa3-b34c-1dc11ec89f1d"
          style={styles.profile_rectangle153}></View>
        <Svg
          data-layer="51616d49-eb6b-4013-b6e8-710cb8f4c706"
          style={styles.profile_path42}
          preserveAspectRatio="none"
          viewBox="764.3162231445312 1346.249755859375 32.73638916015625 24.839111328125"
          fill="transparent">
          <SvgPath d="M 788.8026123046875 1348.499755859375 L 778.1625366210938 1359.8388671875 L 778.1625366210938 1359.8388671875 L 766.5662231445312 1348.499755859375" />
        </Svg>
        <Text
          data-layer="e8cd6aed-f51d-4c2c-b3d9-16fca56e2d0a"
          style={styles.profile_myTasks}>
          My Tasks
        </Text>
        <ReactImage
          data-layer="794306ce-3ad9-4a19-9fdd-60021d4642e2"
          source={require("./assets/rectangle154.png")}
          style={styles.profile_rectangle154}
        />
        <Svg
          data-layer="8b796ce4-44a8-4d76-8d22-d29bdc6cda2b"
          style={styles.profile_path43}
          preserveAspectRatio="none"
          viewBox="764.3162231445312 1346.249755859375 32.73638916015625 24.839111328125"
          fill="transparent">
          <SvgPath d="M 788.8026123046875 1348.499755859375 L 778.1625366210938 1359.8388671875 L 778.1625366210938 1359.8388671875 L 766.5662231445312 1348.499755859375" />
        </Svg>
        <View
          data-layer="138b9769-24a5-40e6-9a7a-4af302999061"
          style={styles.profile_barstimeBlack}>
          <Svg
            data-layer="3461ab00-f335-4169-addd-2945c10c0e2b"
            style={styles.profile_barstimeBlack_background}
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

Profile.propTypes = {};

Profile.defaultProps = {};

const styles = StyleSheet.create({
  profile: {
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
  profile_path35: {
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
  profile_rectangle72: {
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
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 315,
    height: 31,
    left: 30,
    top: 431,
  },
  profile_rectangle74: {
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
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 315,
    height: 31,
    left: 30,
    top: 539,
  },
  profile_rectangle75: {
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
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 315,
    height: 31,
    left: 30,
    top: 503,
  },
  profile_rectangle76: {
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
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 315,
    height: 31,
    left: 30,
    top: 467,
  },
  profile_rectangle77767c60b3: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 29,
    height: 20,
    left: 312,
    top: 440,
  },
  profile_rectangle7723332947: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 29,
    height: 20,
    left: 312,
    top: 509,
  },
  profile_rectangle84: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 29,
    height: 20,
    left: 312,
    top: 473,
  },
  profile_rectangle77: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 29,
    height: 20,
    left: 312,
    top: 546,
  },
  profile_rectangle69: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    width: 136,
    height: 28,
    left: 30,
    top: 340,
  },
  profile_rectangle78: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    width: 103,
    height: 28,
    left: 30,
    top: 587,
  },
  profile_rectangle81: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    width: 103,
    height: 28,
    left: 30,
    top: 715,
  },
  profile_woman3551832: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 83,
    borderBottomRightRadius: 85,
    width: 375,
    height: 146,
    left: 0,
    top: 30,
  },
  profile_pexelsTunKitJr1382731: {
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
    width: 115,
    height: 115,
    left: 130,
    top: 91,
  },
  profile_maheenKhan: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 33,
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
    width: 218,
    height: 40,
    left: 90,
    top: 204,
  },
  profile_nopathCopy24e1aaa239: {
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
    left: 140,
    top: 249,
  },
  profile_nopathCopy241179052a: {
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
    left: 159,
    top: 249,
  },
  profile_nopathCopy24e79bb074: {
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
    left: 179,
    top: 249,
  },
  profile_nopathCopy2467aea1a4: {
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
    left: 198,
    top: 249,
  },
  profile_nopathCopy24: {
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
    left: 217,
    top: 249,
  },
  profile_rectangle67: {
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
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 315,
    height: 52,
    left: 30,
    top: 274,
  },
  profile_rectangle68: {
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
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 315,
    height: 34,
    left: 30,
    top: 365,
  },
  profile_memberSinceAug1947: {
    opacity: 0.5,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
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
    width: 180,
    height: 17,
    left: 38,
    top: 283,
  },
  profile_verification: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
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
    width: 106,
    height: 23,
    left: 44,
    top: 340,
  },
  profile_reviews: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
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
    width: 76,
    height: 23,
    left: 38,
    top: 587,
  },
  profile_portfolio: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
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
    width: 80,
    height: 23,
    left: 38,
    top: 715,
  },
  profile_skills: {
    opacity: 0.75,
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
    width: 44,
    height: 16,
    left: 31,
    top: 476,
  },
  profile_education: {
    opacity: 0.75,
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
    width: 81,
    height: 16,
    left: 32,
    top: 440,
  },
  profile_languages: {
    opacity: 0.75,
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
    width: 83,
    height: 16,
    left: 31,
    top: 511,
  },
  profile_specialities: {
    opacity: 0.75,
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
    left: 31,
    top: 547,
  },
  profile_lahorePunjab: {
    opacity: 0.5,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
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
    width: 98,
    height: 16,
    left: 38,
    top: 305,
  },
  profile_cnicEmailPhone: {
    opacity: 0.5,
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
    width: 184,
    height: 18,
    left: 97,
    top: 373,
  },
  profile_path2177985086: {
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
    width: 34.24,
    height: 26.34,
    left: 312.5,
    top: 441.5,
  },
  profile_path2119e13229: {
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
    width: 34.24,
    height: 26.34,
    left: 312.5,
    top: 510.5,
  },
  profile_path22: {
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
    width: 34.24,
    height: 26.34,
    left: 312.5,
    top: 474.5,
  },
  profile_path21: {
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
    width: 34.24,
    height: 26.34,
    left: 312.5,
    top: 547.5,
  },
  profile_rectangle79: {
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
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 315,
    height: 84,
    left: 30,
    top: 610,
  },
  profile_rectangle80: {
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
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 315,
    height: 72,
    left: 30,
    top: 740,
  },
  profile_group20: {
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
    width: 76,
    height: 70,
    left: 90,
    top: 617,
  },
  profile_group20_group19: {
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
    width: 76,
    height: 14,
    left: 0,
    top: 0,
  },
  profile_group20_group19_nopathCopy260d2e1c81: {
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
    width: 14,
    height: 14,
    left: 47,
    top: 0,
  },
  profile_group20_group19_nopathCopy2610ace9a8: {
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
    width: 14,
    height: 14,
    left: 62,
    top: 0,
  },
  profile_group20_group19_nopathCopy268e3fe7db: {
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
    width: 14,
    height: 14,
    left: 32,
    top: 0,
  },
  profile_group20_group19_nopathCopy2667d583fc: {
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
    width: 14,
    height: 14,
    left: 16,
    top: 0,
  },
  profile_group20_group19_nopathCopy261e0fc299: {
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
    height: 14,
    left: 0,
    top: 0,
  },
  profile_group20_nopathCopy26c1ce3ef6: {
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
    width: 14,
    height: 15,
    left: 47,
    top: 14,
  },
  profile_group20_nopathCopy26ca57508a: {
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
    width: 14,
    height: 15,
    left: 62,
    top: 14,
  },
  profile_group20_nopathCopy26f6b8c4d3: {
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
    width: 14,
    height: 15,
    left: 32,
    top: 14,
  },
  profile_group20_nopathCopy2639f51ade: {
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
    width: 14,
    height: 15,
    left: 16,
    top: 14,
  },
  profile_group20_nopathCopy264abe0f37: {
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
    width: 14,
    height: 14,
    left: 47,
    top: 29,
  },
  profile_group20_nopathCopy263de17c29: {
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
    width: 14,
    height: 14,
    left: 62,
    top: 29,
  },
  profile_group20_nopathCopy26157258af: {
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
    width: 14,
    height: 14,
    left: 32,
    top: 29,
  },
  profile_group20_nopathCopy265496020c: {
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
    width: 14,
    height: 14,
    left: 47,
    top: 43,
  },
  profile_group20_nopathCopy2685648c56: {
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
    width: 14,
    height: 14,
    left: 62,
    top: 43,
  },
  profile_group20_nopathCopy26: {
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
    width: 14,
    height: 14,
    left: 62,
    top: 56,
  },
  profile_x0164752ac: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
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
    width: 8,
    height: 16,
    left: 175,
    top: 617,
  },
  profile_x0565726d6: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
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
    width: 8,
    height: 16,
    left: 175,
    top: 631,
  },
  profile_x02c866a41: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
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
    width: 8,
    height: 16,
    left: 175,
    top: 645,
  },
  profile_x091e5f601: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
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
    width: 8,
    height: 16,
    left: 175,
    top: 659,
  },
  profile_x0: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
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
    width: 8,
    height: 16,
    left: 175,
    top: 673,
  },
  profile_path29: {
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
    width: 26.65,
    height: 49.23,
    left: 14.35,
    top: 55,
  },
  profile_rectangle153: {
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
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    width: 315,
    height: 24,
    left: 29,
    top: 402,
  },
  profile_path42: {
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
    width: 34.24,
    height: 26.34,
    left: 312.5,
    top: 441.5,
  },
  profile_myTasks: {
    opacity: 0.75,
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
    width: 67,
    height: 16,
    left: 33,
    top: 407,
  },
  profile_rectangle154: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 29,
    height: 20,
    left: 313,
    top: 405,
  },
  profile_path43: {
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
    width: 34.24,
    height: 26.34,
    left: 313.5,
    top: 406.5,
  },
  profile_barstimeBlack: {
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
  profile_barstimeBlack_background: {
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
