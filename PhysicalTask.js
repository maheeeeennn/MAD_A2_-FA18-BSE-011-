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

export default class PhysicalTask extends Component {
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
        data-layer="99f85c04-0e49-4ed3-ac0d-f8b90572d9d3"
        style={styles.physicalTask}>
        <ReactImage
          data-layer="f6c0640e-a823-4d72-966d-5a779d20db6f"
          source={require("./assets/rectangle15.png")}
          style={styles.physicalTask_rectangle15}
        />
        <ReactImage
          data-layer="29478a49-f7de-4bb4-ab78-7855472654ab"
          source={require("./assets/rectangle13.png")}
          style={styles.physicalTask_rectangle13}
        />
        <Text
          data-layer="93e6d77a-d824-42f8-95ff-bd8b6fecf6d3"
          style={styles.physicalTask_makeUp63d9649e}>
          Make-up
        </Text>
        <Text
          data-layer="651e6ea8-6402-4125-936c-df93bb49740a"
          style={styles.physicalTask_artist275de95c}>
          Artist
        </Text>
        <Text
          data-layer="09a79eb7-8e4b-418b-821e-d1dba6c5c563"
          style={styles.physicalTask_carpentar333baea2}>
          Carpentar
        </Text>
        <View
          data-layer="517f93db-342d-4a56-810d-180a462bdd34"
          style={styles.physicalTask_group28}>
          <ReactImage
            data-layer="c839f181-73d3-4e07-89e2-1988ca6f7052"
            source={require("./assets/rectangle16.png")}
            style={styles.physicalTask_group28_rectangle16}
          />
          <ReactImage
            data-layer="591ff0e3-76ad-4330-bc55-b93d692df76b"
            source={require("./assets/rectangle18.png")}
            style={styles.physicalTask_group28_rectangle18}
          />
          <ReactImage
            data-layer="13ff0674-68c1-4327-a35b-98799d8a8938"
            source={require("./assets/rectangle20.png")}
            style={styles.physicalTask_group28_rectangle20}
          />
          <ReactImage
            data-layer="f9afa846-57b3-40bd-98af-314a50765dac"
            source={require("./assets/rectangle87.png")}
            style={styles.physicalTask_group28_rectangle87}
          />
          <ReactImage
            data-layer="9be98981-376a-47df-8930-d8557288aa5c"
            source={require("./assets/rectangle17.png")}
            style={styles.physicalTask_group28_rectangle17}
          />
          <ReactImage
            data-layer="89917c85-ff48-4cb9-85b9-8e1b37486195"
            source={require("./assets/rectangle19.png")}
            style={styles.physicalTask_group28_rectangle19}
          />
          <ReactImage
            data-layer="66d5ec84-56ec-49dd-bd91-957e62b7ba48"
            source={require("./assets/rectangle21.png")}
            style={styles.physicalTask_group28_rectangle21}
          />
          <ReactImage
            data-layer="3be9bad4-5f57-45c8-a10b-55ce574dfa54"
            source={require("./assets/rectangle85.png")}
            style={styles.physicalTask_group28_rectangle85}
          />
          <View
            data-layer="4f1a00aa-9022-4632-b20a-c6b9d6f34923"
            style={styles.physicalTask_group28_rectangle25}></View>
          <View
            data-layer="b528663b-466c-4a60-861e-7c6246539647"
            style={styles.physicalTask_group28_rectangle24}></View>
          <View
            data-layer="d6bd4456-47c7-4542-aa77-6ac18824c5cd"
            style={styles.physicalTask_group28_rectangle26}></View>
          <ReactImage
            data-layer="61309ae4-fdd2-4116-bf73-a33d477bbcf6"
            source={require("./assets/nopathCopy15.png")}
            style={styles.physicalTask_group28_nopathCopy15}
          />
          <ReactImage
            data-layer="2dcb4ccc-6420-4d39-98f1-6b9a897dc1ab"
            source={require("./assets/nopathCopy17.png")}
            style={styles.physicalTask_group28_nopathCopy17}
          />
          <View
            data-layer="8f46b921-8f3e-48d5-beb1-43e9900668e7"
            style={styles.physicalTask_group28_rectangle23}></View>
          <ReactImage
            data-layer="30ece0a3-ce56-45ae-996c-e778da366189"
            source={require("./assets/nopathCopy19.png")}
            style={styles.physicalTask_group28_nopathCopy19}
          />
          <ReactImage
            data-layer="6e541b99-3ea7-43be-8817-dd12bfb194b1"
            source={require("./assets/nopathCopy18.png")}
            style={styles.physicalTask_group28_nopathCopy18}
          />
          <Text
            data-layer="7c33ebc9-5dea-4937-ba24-f15b812adbbc"
            style={styles.physicalTask_group28_electrician}>
            Electrician
          </Text>
          <Text
            data-layer="dc1cb600-be84-4537-b0ae-89ca33166e3e"
            style={styles.physicalTask_group28_painter}>
            Painter
          </Text>
          <Text
            data-layer="0a3da97a-cf0e-4bde-a924-c42a68252ddd"
            style={styles.physicalTask_group28_makeUp}>
            Make-up
          </Text>
          <View
            data-layer="b03323c3-8972-4b23-9c7b-e3154cfc5a5a"
            style={styles.physicalTask_group28_rectangle22}></View>
          <Svg
            data-layer="30002d49-00d1-48e5-944a-d7daf44ab0f7"
            style={styles.physicalTask_group28_path37}
            preserveAspectRatio="none"
            viewBox="-1.5 -1.5 80.5 89.5"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 0 0 L 71 0 L 71 77 L 0 77 L 0 0 Z" />
          </Svg>
          <View
            data-layer="fca3f37a-7709-43a6-94a6-0537b3b1131c"
            style={styles.physicalTask_group28_rectangle27}></View>
          <View
            data-layer="cd29b718-539a-4ed3-8fb1-44279d2e2d1f"
            style={styles.physicalTask_group28_rectangle86}></View>
          <Text
            data-layer="2a8f3b3c-0e40-454f-b8dc-363f79a96f78"
            style={styles.physicalTask_group28_artist}>
            Artist
          </Text>
          <Text
            data-layer="80cc22a6-59c4-4708-af6c-ec5ea113c48f"
            style={styles.physicalTask_group28_gardening}>
            Gardening{" "}
          </Text>
          <Text
            data-layer="c3711d16-92db-4e00-9511-6cc1ff4fa30d"
            style={styles.physicalTask_group28_carWash}>
            Car Wash
          </Text>
          <Text
            data-layer="8c0317b1-fe4e-4200-b709-9abe4a964fcb"
            style={styles.physicalTask_group28_carpentar}>
            Carpentar
          </Text>
          <ReactImage
            data-layer="ba3b424a-7c38-4b6e-819d-c4f25c51cede"
            source={require("./assets/nopathCopy20.png")}
            style={styles.physicalTask_group28_nopathCopy20}
          />
          <ReactImage
            data-layer="af32a978-c1bb-45a7-902e-6a5aeb5b620e"
            source={require("./assets/nopathCopy16.png")}
            style={styles.physicalTask_group28_nopathCopy16}
          />
        </View>
        <View
          data-layer="0124da63-6eb7-40f2-b379-3301f3109c49"
          style={styles.physicalTask_person}>
          <Svg
            data-layer="b8ecf263-8078-4bf6-b39c-531666a3735c"
            style={styles.physicalTask_person_path2}
            preserveAspectRatio="none"
            viewBox="570.7119750976562 464.2452697753906 43.578369140625 27.0477294921875"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 601.9637451171875 464.3019409179688 C 600.6043090820312 464.8003540039062 597.6876831054688 467.0994262695312 593.810791015625 467.8887329101562 C 590.6702880859375 468.5289916992188 586.7880859375 468.052490234375 582.7249755859375 464.3019409179688 C 572.0087280273438 463.2050170898438 569.3085327148438 478.30908203125 571.3336791992188 485.5657348632812 C 573.3587646484375 492.8224487304688 585.2564086914062 491.0504150390625 592.8506469726562 491.1348266601562 C 600.44482421875 491.21923828125 612.2581176757812 492.5693359375 613.861328125 485.5657348632812 C 615.4645385742188 478.5621948242188 612.1737060546875 469.0272216796875 610.5704956054688 468.0990600585938 C 608.96728515625 467.1708374023438 609.2203979492188 464.6394653320312 601.9637451171875 464.3019409179688 Z" />
          </Svg>
          <Svg
            data-layer="dc763ed5-a1aa-49d2-b9a3-87d45ee57045"
            style={styles.physicalTask_person_ellipse1}
            preserveAspectRatio="none"
            viewBox="0 0 25.38037109375 25.38031005859375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 12.69015216827393 0 C 19.69873046875 0 25.38030433654785 5.681574821472168 25.38030433654785 12.69015216827393 C 25.38030433654785 19.69873046875 19.69873046875 25.38030433654785 12.69015216827393 25.38030433654785 C 5.681574821472168 25.38030433654785 0 19.69873046875 0 12.69015216827393 C 0 5.681574821472168 5.681574821472168 0 12.69015216827393 0 Z" />
          </Svg>
        </View>
        <View
          data-layer="d9623ba3-3d05-4825-9f22-4b7a30ff83b5"
          style={styles.physicalTask_tasks}>
          <View
            data-layer="84112886-0e92-4c5d-9024-e293a4734e99"
            style={styles.physicalTask_tasks_rectangle31}></View>
          <Svg
            data-layer="c4023505-1fc1-4ee2-924f-bb9ac8903f47"
            style={styles.physicalTask_tasks_path4}
            preserveAspectRatio="none"
            viewBox="1008.9743041992188 753.8364868164062 11.419921875 9.0130615234375"
            fill="transparent">
            <SvgPath d="M 1011.224304199219 758.7943115234375 L 1012.879089355469 760.5995483398438 L 1018.144348144531 756.0864868164062" />
          </Svg>
          <Svg
            data-layer="b83209ba-9974-4741-98e8-02d0925d020f"
            style={styles.physicalTask_tasks_path5}
            preserveAspectRatio="none"
            viewBox="1008.9743041992188 753.8364868164062 11.419921875 9.0130615234375"
            fill="transparent">
            <SvgPath d="M 1011.224304199219 758.7943115234375 L 1012.879089355469 760.5995483398438 L 1018.144348144531 756.0864868164062" />
          </Svg>
          <Svg
            data-layer="e620fb63-ad4e-4154-85b2-58846c70ca18"
            style={styles.physicalTask_tasks_path6}
            preserveAspectRatio="none"
            viewBox="1008.9743041992188 753.8364868164062 11.419921875 9.0130615234375"
            fill="transparent">
            <SvgPath d="M 1011.224304199219 758.7943115234375 L 1012.879089355469 760.5995483398438 L 1018.144348144531 756.0864868164062" />
          </Svg>
          <View
            data-layer="93da4698-1d71-444b-8913-7e26c893138d"
            style={styles.physicalTask_tasks_rectangle32}></View>
          <View
            data-layer="33cf27d8-fb93-4693-b72b-b71760822166"
            style={styles.physicalTask_tasks_rectangle35}></View>
          <View
            data-layer="e426fdcb-0d3f-43e9-94b7-3ac2c80f036d"
            style={styles.physicalTask_tasks_rectangle33}></View>
          <View
            data-layer="885f95fa-b2a4-4145-80c1-17f4e5571dcf"
            style={styles.physicalTask_tasks_rectangle34}></View>
        </View>
        <ReactImage
          data-layer="e0b053bf-9308-4ab4-be0f-09e9264a6ef2"
          source={require("./assets/chat.png")}
          style={styles.physicalTask_chat}
        />
        <Text
          data-layer="a32f0161-2ffc-4540-92c3-b4a03bbbca49"
          style={styles.physicalTask_physicalTasks}>
          Physical tasks
        </Text>
        <Svg
          data-layer="33db8ce6-9516-4d98-9523-b0e6e9ce6625"
          style={styles.physicalTask_path23}
          preserveAspectRatio="none"
          viewBox="15.246183395385742 912.529052734375 27.74267578125 38"
          fill="transparent">
          <SvgPath d="M 33.98876953125 915.529052734375 L 18.24618339538574 928.1318359375 L 33.98876953125 938.529052734375" />
        </Svg>
        <Text
          data-layer="e05394fb-580f-4e2e-a1e9-e406d589ae28"
          style={styles.physicalTask_plumber}>
          Plumber
        </Text>
        <View
          data-layer="8711bf2c-5b76-4747-89e8-e78a84f0e838"
          style={styles.physicalTask_barstimeBlack}>
          <Svg
            data-layer="3452767c-2718-42b4-b8a4-5d22f0b079ae"
            style={styles.physicalTask_barstimeBlack_background}
            preserveAspectRatio="none"
            viewBox="21 -35 54 16"
            fill="transparent">
            <SvgPath d="M 21 -19 L 75 -19 L 75 -35 L 21 -35 L 21 -19 Z" />
          </Svg>
        </View>
        <Text
          data-layer="85675860-6607-467c-b81b-0e929eec7e57"
          style={styles.physicalTask_mechanic}>
          Mechanic
        </Text>
        <ReactImage
          data-layer="25b5cd7a-0c8e-47b1-9d51-d26d86a9ce4d"
          source={require("./assets/icons8Mechanic64.png")}
          style={styles.physicalTask_icons8Mechanic64}
        />
        <ReactImage
          data-layer="0c696818-ced0-4438-a2c9-76bd9a57ed87"
          source={require("./assets/icons8Plumber50.png")}
          style={styles.physicalTask_icons8Plumber50}
        />
      </ScrollView>
    );
  }
}

PhysicalTask.propTypes = {};

PhysicalTask.defaultProps = {};

const styles = StyleSheet.create({
  physicalTask: {
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
  physicalTask_rectangle15: {
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
    top: 740,
  },
  physicalTask_rectangle13: {
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
  physicalTask_makeUp63d9649e: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 23,
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
    width: 92,
    height: 28,
    left: 49,
    top: 675,
  },
  physicalTask_artist275de95c: {
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
    width: 45,
    height: 22,
    left: 71,
    top: 696,
  },
  physicalTask_carpentar333baea2: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 23,
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
    width: 102,
    height: 28,
    left: 220,
    top: 679,
  },
  physicalTask_group28: {
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
    width: 309,
    height: 599,
    left: 37,
    top: 109,
  },
  physicalTask_group28_rectangle16: {
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
    height: 134,
    left: 0,
    top: 0,
  },
  physicalTask_group28_rectangle18: {
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
    top: 152.34,
  },
  physicalTask_group28_rectangle20: {
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
    top: 305.66,
  },
  physicalTask_group28_rectangle87: {
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
    top: 458,
  },
  physicalTask_group28_rectangle17: {
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
    left: 193,
    top: 0,
  },
  physicalTask_group28_rectangle19: {
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
    top: 152.34,
  },
  physicalTask_group28_rectangle21: {
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
    top: 305.66,
  },
  physicalTask_group28_rectangle85: {
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
    top: 458,
  },
  physicalTask_group28_rectangle25: {
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
    width: 68,
    height: 69,
    left: 214,
    top: 168.41,
  },
  physicalTask_group28_rectangle24: {
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
    width: 66,
    height: 60,
    left: 21,
    top: 19,
  },
  physicalTask_group28_rectangle26: {
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
    width: 65,
    height: 61,
    left: 217,
    top: 18,
  },
  physicalTask_group28_nopathCopy15: {
    opacity: 0.6499999761581421,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 55,
    height: 55,
    left: 28,
    top: 21,
  },
  physicalTask_group28_nopathCopy17: {
    opacity: 0.6499999761581421,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 65,
    height: 65,
    left: 214,
    top: 174.41,
  },
  physicalTask_group28_rectangle23: {
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
    width: 66,
    height: 69,
    left: 21,
    top: 168.41,
  },
  physicalTask_group28_nopathCopy19: {
    opacity: 0.6499999761581421,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 58,
    height: 58,
    left: 29.5,
    top: 180.44,
  },
  physicalTask_group28_nopathCopy18: {
    opacity: 0.6499999761581421,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 56,
    height: 56,
    left: 223,
    top: 20,
  },
  physicalTask_group28_electrician: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    width: 93,
    height: 24,
    left: 11,
    top: 99.15,
  },
  physicalTask_group28_painter: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    height: 24,
    left: 25,
    top: 260.05,
  },
  physicalTask_group28_makeUp: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    height: 24,
    left: 17,
    top: 400.29,
  },
  physicalTask_group28_rectangle22: {
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
    height: 69,
    left: 21,
    top: 322.27,
  },
  physicalTask_group28_path37: {
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
    width: 84,
    height: 93,
    left: 19,
    top: 471,
  },
  physicalTask_group28_rectangle27: {
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
    left: 214,
    top: 317.27,
  },
  physicalTask_group28_rectangle86: {
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
    left: 214,
    top: 468,
  },
  physicalTask_group28_artist: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    width: 50,
    height: 24,
    left: 34.03,
    top: 422.88,
  },
  physicalTask_group28_gardening: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    width: 97,
    height: 24,
    left: 202,
    top: 99.15,
  },
  physicalTask_group28_carWash: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    width: 85,
    height: 24,
    left: 209,
    top: 260.05,
  },
  physicalTask_group28_carpentar: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
    width: 89,
    height: 24,
    left: 206,
    top: 407.21,
  },
  physicalTask_group28_nopathCopy20: {
    opacity: 0.6499999761581421,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 65,
    height: 65,
    left: 219,
    top: 328.24,
  },
  physicalTask_group28_nopathCopy16: {
    opacity: 0.6499999761581421,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 54,
    height: 54,
    left: 32,
    top: 327.39,
  },
  physicalTask_person: {
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
    left: 251.42,
    top: 748,
  },
  physicalTask_person_path2: {
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
  physicalTask_person_ellipse1: {
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
  physicalTask_tasks: {
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
    left: 89,
    top: 750,
  },
  physicalTask_tasks_rectangle31: {
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
  physicalTask_tasks_path4: {
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
  physicalTask_tasks_path5: {
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
  physicalTask_tasks_path6: {
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
  physicalTask_tasks_rectangle32: {
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
  physicalTask_tasks_rectangle35: {
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
  physicalTask_tasks_rectangle33: {
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
  physicalTask_tasks_rectangle34: {
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
  physicalTask_chat: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    width: 61.36,
    height: 55.85,
    left: 162.5,
    top: 749,
  },
  physicalTask_chat_union1: {
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
  physicalTask_chat_path8: {
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
  physicalTask_chat_path10: {
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
  physicalTask_chat_ellipse6: {
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
  physicalTask_chat_ellipse7: {
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
  physicalTask_chat_ellipse8: {
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
  physicalTask_chat_path11: {
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
  physicalTask_physicalTasks: {
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
    width: 193,
    height: 38,
    left: 91,
    top: 35,
  },
  physicalTask_path23: {
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
  physicalTask_plumber: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 250, 250, 1)",
    fontSize: 20,
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
    width: 96,
    height: 26,
    left: 56,
    top: 676,
  },
  physicalTask_barstimeBlack: {
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
  physicalTask_barstimeBlack_background: {
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
  physicalTask_mechanic: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 250, 250, 1)",
    fontSize: 20,
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
    width: 90,
    height: 27,
    left: 247,
    top: 669,
  },
  physicalTask_icons8Mechanic64: {
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
    width: 64,
    height: 64,
    left: 255,
    top: 584,
  },
  physicalTask_icons8Plumber50: {
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
    width: 59,
    height: 59,
    left: 64,
    top: 594,
  },
});
