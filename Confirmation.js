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

export default class Confirmation extends Component {
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
        data-layer="04bf4a67-4e50-4103-8445-8ed449872dd1"
        style={styles.confirmation}>
        <Svg
          data-layer="bb74762b-7e06-434a-9e00-5243008e4c61"
          style={styles.confirmation_path32}
          preserveAspectRatio="none"
          viewBox="0 0 375 812"
          fill="rgba(245, 245, 245, 1)">
          <SvgPath d="M 0 0 L 375 0 L 375 812 L 0 812 L 0 0 Z" />
        </Svg>
        <Svg
          data-layer="4bd3e28d-75d9-4a7b-aa9c-8873a186810f"
          style={styles.confirmation_ellipse22}
          preserveAspectRatio="none"
          viewBox="0 0 4 4"
          fill="rgba(255, 255, 255, 1)">
          <SvgPath d="M 2 0 C 3.104569435119629 0 4 0.8954305648803711 4 2 C 4 3.104569435119629 3.104569435119629 4 2 4 C 0.8954305648803711 4 0 3.104569435119629 0 2 C 0 0.8954305648803711 0.8954305648803711 0 2 0 Z" />
        </Svg>
        <Svg
          data-layer="aa013e42-643e-4d9b-8eeb-57f1e1924729"
          style={styles.confirmation_subtraction6}
          preserveAspectRatio="none"
          viewBox="2.7008053393728915e-7 3.999598741531372 4.0001220703125 10.0001220703125"
          fill="rgba(255, 255, 255, 1)">
          <SvgPath d="M 4.000100135803223 13.99979782104492 L 3.999599933624268 13.99979782104492 C 1.794212579727173 13.99952411651611 2.700805339372891e-07 11.75648784637451 2.700805339372891e-07 8.999698638916016 C 2.700805339372891e-07 6.242634296417236 1.794437408447266 3.999598741531372 4.000100135803223 3.999598741531372 L 4.000100135803223 13.99917316436768 L 4.000100135803223 13.99979782104492 Z" />
        </Svg>
        <View
          data-layer="da37df1a-1f79-4138-8124-bec3f5ff4e0e"
          style={styles.confirmation_barstimeBlack}>
          <Svg
            data-layer="db613400-fba1-4bb3-9a31-64c6442b9b59"
            style={styles.confirmation_barstimeBlack_background}
            preserveAspectRatio="none"
            viewBox="21 -35 54 16"
            fill="transparent">
            <SvgPath d="M 21 -19 L 75 -19 L 75 -35 L 21 -35 L 21 -19 Z" />
          </Svg>
        </View>
        <View
          data-layer="767bcd66-85ce-4975-9600-b69e136d6339"
          style={styles.confirmation_likea64618a1}>
          <Svg
            data-layer="db3dba61-555d-4022-ad09-af3260b87a1e"
            style={styles.confirmation_likea64618a1_ellipse3}
            preserveAspectRatio="none"
            viewBox="0 0 238 238"
            fill="rgba(248, 248, 248, 1)">
            <SvgPath d="M 119 0 C 184.7218933105469 0 238 53.27811431884766 238 119 C 238 184.7218933105469 184.7218933105469 238 119 238 C 53.27811431884766 238 0 184.7218933105469 0 119 C 0 53.27811431884766 53.27811431884766 0 119 0 Z" />
          </Svg>
          <Svg
            data-layer="fdeb2584-443a-4c8d-bcce-4bd87b03b8fc"
            style={styles.confirmation_likea64618a1_ellipse4}
            preserveAspectRatio="none"
            viewBox="0 0 154 154"
            fill="rgba(238, 238, 238, 1)">
            <SvgPath d="M 77 0 C 119.5259246826172 0 154 34.47407913208008 154 77 C 154 119.5259246826172 119.5259246826172 154 77 154 C 34.47407913208008 154 0 119.5259246826172 0 77 C 0 34.47407913208008 34.47407913208008 0 77 0 Z" />
          </Svg>
          <View
            data-layer="e30f310d-f82e-49cc-b48d-fce3ef3fba12"
            style={styles.confirmation_likea64618a1_like}>
            <View
              data-layer="5bb443b4-98c7-437e-beef-39b551a14cfb"
              style={styles.confirmation_likea64618a1_like_group17}>
              <View
                data-layer="0f4be0dc-f05d-4bb5-a8b1-4bb9e0c793dc"
                style={styles.confirmation_likea64618a1_like_group17_group16}>
                <View
                  data-layer="b3c033f1-653b-4260-95ae-dc645843c7ed"
                  style={
                    styles.confirmation_likea64618a1_like_group17_group16_rectangle23
                  }></View>
                <Svg
                  data-layer="bd27b409-1fb2-4240-9c8f-99af98c529ed"
                  style={
                    styles.confirmation_likea64618a1_like_group17_group16_rectangle23Copy
                  }
                  preserveAspectRatio="none"
                  viewBox="0.0018780231475830078 0 11.443115234375 8.69921875"
                  fill="rgba(102, 166, 255, 1)">
                  <SvgPath d="M 0.0163242369890213 0 L 11.44489574432373 0 L 11.44489574432373 7.69919490814209 C 11.44489574432373 8.251479148864746 10.99717998504639 8.69919490814209 10.44489574432373 8.69919490814209 L 1.001878261566162 8.69919490814209 C 0.4488605558872223 8.69919490814209 0.0008422955870628357 8.250334739685059 0.001880044117569923 7.697318553924561 L 0.0163242369890213 0 Z" />
                </Svg>
                <View
                  data-layer="929b14a4-6bbc-4b17-8ef1-ab7ddf20aa56"
                  style={
                    styles.confirmation_likea64618a1_like_group17_group16_group8c901fe71
                  }>
                  <Svg
                    data-layer="15c7609e-3272-4407-a40b-c5ff24287968"
                    style={
                      styles.confirmation_likea64618a1_like_group17_group16_group8c901fe71_path2397f5c99f
                    }
                    preserveAspectRatio="none"
                    viewBox="-0.75 -0.75 35.69287109375 50.273681640625"
                    fill="rgba(255, 255, 255, 1)">
                    <SvgPath d="M 0.8254907131195068 46.76948928833008 C 0.3479686677455902 46.68485641479492 0 46.26979827880859 0 45.78483200073242 L 0 25.51774597167969 L 2.789596557617188 25.05923080444336 C 3.430588960647583 24.95387268066406 3.9804847240448 24.54376983642578 4.264270305633545 23.95944404602051 L 9.056615829467773 14.09179973602295 C 9.109862327575684 13.98216247558594 9.182703971862793 13.88318347930908 9.271547317504883 13.79974269866943 L 14.32468700408936 9.05390739440918 L 15.2655029296875 0 L 15.2655029296875 0 C 18.32756042480469 0 21.36401748657227 3.036458015441895 21.36401748657227 6.098515510559082 L 21.36401748657227 10.0842456817627 L 19.42490577697754 15.54728317260742 C 18.73177146911621 17.50004386901855 20.17996215820312 19.55079460144043 22.25208854675293 19.55079460144043 L 29.55972671508789 19.55079460144043 C 29.78881072998047 19.55079460144043 30.01095008850098 19.62944984436035 30.18899154663086 19.77360534667969 L 33.09090042114258 22.12318801879883 C 33.7542610168457 22.6602897644043 34.003662109375 23.55919075012207 33.71186447143555 24.36130332946777 L 32.55068588256836 27.55323028564453 L 33.7799186706543 30.40876388549805 C 34.04232788085938 31.01834487915039 33.98526000976562 31.71839141845703 33.62759017944336 32.27742385864258 L 32.01743698120117 34.79407119750977 L 32.95048904418945 37.45203399658203 C 33.20281219482422 38.17082214355469 33.02488708496094 38.97053146362305 32.49161529541016 39.5145378112793 L 30.39984512329102 41.64840316772461 L 30.85928916931152 44.00984191894531 C 31.00687026977539 44.76837158203125 30.70426559448242 45.5440559387207 30.08201789855957 46.00226593017578 L 27.18693923950195 48.13414764404297 C 26.84331512451172 48.38718795776367 26.42776298522949 48.523681640625 26.00102233886719 48.523681640625 L 10.81131935119629 48.523681640625 C 10.75281238555908 48.523681640625 10.69441890716553 48.51854705810547 10.63681030273438 48.50833511352539 L 0.8254907131195068 46.76948928833008 Z" />
                  </Svg>
                  <ReactImage
                    data-layer="e4a34568-94ad-4204-879b-f228d0b49181"
                    source={require("./assets/group89d0dce6e.png")}
                    style={
                      styles.confirmation_likea64618a1_like_group17_group16_group8c901fe71_group89d0dce6e
                    }
                  />
                  <Svg
                    data-layer="e4e8516b-b09b-4f01-848a-1ef9a6ac9a58"
                    style={
                      styles.confirmation_likea64618a1_like_group17_group16_group8c901fe71_combinedShape51cd94b4
                    }
                    preserveAspectRatio="none"
                    viewBox="0.00040818750858306885 -0.00024611185654066503 4.4986572265625 7.45263671875"
                    fill="rgba(216, 216, 216, 1)">
                    <SvgPath d="M 0.1080000028014183 5.523300170898438 C -0.5805618166923523 4.207465171813965 2.193319320678711 1.518226981163025 3.950031995773315 -0.000246111856540665 L 2.666700124740601 3.616199970245361 C 2.090666532516479 5.237462043762207 2.990890979766846 6.925682544708252 4.49902868270874 7.452438354492188 C 3.408114433288574 7.361772537231445 0.877147376537323 6.994469165802002 0.1080000028014183 5.523300170898438 Z" />
                  </Svg>
                  <ReactImage
                    data-layer="a07138d3-f290-4952-a989-4eb695c3bc8f"
                    source={require("./assets/group8.png")}
                    style={
                      styles.confirmation_likea64618a1_like_group17_group16_group8c901fe71_group8
                    }
                  />
                </View>
              </View>
              <Svg
                data-layer="f6776ce6-823f-4392-bff1-3306850ce644"
                style={styles.confirmation_likea64618a1_like_group17_oval12}
                preserveAspectRatio="none"
                viewBox="0 0 3.4285888671875 3.4185791015625"
                fill="rgba(255, 255, 255, 1)">
                <SvgPath d="M 1.714285731315613 0 C 2.661059617996216 0 3.428571462631226 0.7652807831764221 3.428571462631226 1.709302306175232 C 3.428571462631226 2.653323888778687 2.661059617996216 3.418604612350464 1.714285731315613 3.418604612350464 C 0.7675119042396545 3.418604612350464 0 2.653323888778687 0 1.709302306175232 C 0 0.7652807831764221 0.7675119042396545 0 1.714285731315613 0 Z" />
              </Svg>
            </View>
          </View>
        </View>
        <Text
          data-layer="7125ba36-128c-416a-8c65-f3b6255fb0c9"
          style={styles.confirmation_createAddress}>
          Confirmation
        </Text>
        <Text
          data-layer="d97aa005-2cc9-4909-a87f-dca79fd041b4"
          style={
            styles.confirmation_youHaveSuccessfullyPostedARequestWaitForItsAcceptance
          }>
          You have successfully posted a request! Wait for Its Acceptance.
        </Text>
        <ReactImage
          data-layer="8ae04328-ada8-4e2e-b162-7a4214cf2c19"
          source={require("./assets/rectangle56.png")}
          style={styles.confirmation_rectangle56}
        />
        <Text
          data-layer="d19d22c1-1ed2-4e75-b956-47deb1bc482f"
          style={styles.confirmation_backToServces}>
          Back to Servces
        </Text>
      </ScrollView>
    );
  }
}

Confirmation.propTypes = {};

Confirmation.defaultProps = {};

const styles = StyleSheet.create({
  confirmation: {
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
  confirmation_path32: {
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
  confirmation_ellipse22: {
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
    width: 4,
    height: 4,
    left: 18,
    top: 790,
  },
  confirmation_subtraction6: {
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
    width: 4,
    height: 10,
    left: 14,
    top: 796,
  },
  confirmation_barstimeBlack: {
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
  confirmation_barstimeBlack_background: {
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
  confirmation_likea64618a1: {
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
    width: 238,
    height: 238,
    left: 69,
    top: 170,
  },
  confirmation_likea64618a1_ellipse3: {
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
    width: 238,
    height: 238,
    left: 0,
    top: 0,
  },
  confirmation_likea64618a1_ellipse4: {
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
    width: 154,
    height: 154,
    left: 42,
    top: 42,
  },
  confirmation_likea64618a1_like: {
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
    width: 47.66,
    height: 48.52,
    left: 95,
    top: 95,
  },
  confirmation_likea64618a1_like_group17: {
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
    width: 47.66,
    height: 48.52,
    left: 0,
    top: 0,
  },
  confirmation_likea64618a1_like_group17_group16: {
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
    width: 47.66,
    height: 48.52,
    left: 0,
    top: 0,
  },
  confirmation_likea64618a1_like_group17_group16_rectangle23: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(153, 196, 255, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(67, 0, 98, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(67, 0, 98, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(67, 0, 98, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(67, 0, 98, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    width: 13.71,
    height: 23.49,
    left: 0,
    top: 23.93,
  },
  confirmation_likea64618a1_like_group17_group16_rectangle23Copy: {
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
    width: 11.44,
    height: 8.7,
    left: 1.13,
    top: 37.6,
  },
  confirmation_likea64618a1_like_group17_group16_group8c901fe71: {
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
    width: 33.94,
    height: 48.52,
    left: 13.71,
    top: 0,
  },
  confirmation_likea64618a1_like_group17_group16_group8c901fe71_path2397f5c99f:
    {
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
      width: 37.44,
      height: 52.02,
      left: -1.5,
      top: -1.5,
    },
  confirmation_likea64618a1_like_group17_group16_group8c901fe71_group89d0dce6e:
    {
      opacity: 1,
      position: "absolute",
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      width: 33.94,
      height: 48.52,
      left: 0,
      top: 0,
    },
  confirmation_likea64618a1_like_group17_group16_group8c901fe71_group89d0dce6e_combinedShape0394a88e:
    {
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
      width: 30.9,
      height: 7.17,
      left: 0,
      top: 41.35,
    },
  confirmation_likea64618a1_like_group17_group16_group8c901fe71_group89d0dce6e_path23:
    {
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
      width: 37.44,
      height: 52.02,
      left: -1.5,
      top: -1.5,
    },
  confirmation_likea64618a1_like_group17_group16_group8c901fe71_combinedShape51cd94b4:
    {
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
      width: 4.5,
      height: 7.45,
      left: 16.76,
      top: 11.93,
    },
  confirmation_likea64618a1_like_group17_group16_group8c901fe71_group8: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    width: 4.5,
    height: 7.45,
    left: 16.76,
    top: 11.93,
  },
  confirmation_likea64618a1_like_group17_group16_group8c901fe71_group8_combinedShape:
    {
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
      width: 4.5,
      height: 7.45,
      left: 0,
      top: 0,
    },
  confirmation_likea64618a1_like_group17_oval12: {
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
    width: 3.43,
    height: 3.42,
    left: 2.29,
    top: 41.76,
  },
  confirmation_createAddress: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(67, 67, 67, 1)",
    fontSize: 30,
    fontWeight: "400",
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
    width: 173,
    height: 40,
    left: 101,
    top: 465,
  },
  confirmation_youHaveSuccessfullyPostedARequestWaitForItsAcceptance: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(101, 101, 101, 1)",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "center",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 264,
    height: 38,
    left: 56,
    top: 518,
  },
  confirmation_rectangle56: {
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
    width: 148,
    height: 37,
    left: 204,
    top: 711,
  },
  confirmation_backToServces: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
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
    width: 132,
    height: 21,
    left: 212,
    top: 719,
  },
});
