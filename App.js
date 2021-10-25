import { StatusBar } from "expo-status-bar";
import React, { Profiler } from "react";
import { StyleSheet, Text, View } from "react-native";
import GetStarted from "./GetStarted";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";
import UserCategory from "./UserCategory";
import WorkType from "./WorkType";
import PhysicalTask from "./PhysicalTask";
import OnlineTask from "./OnlineTask";
import PostTask from "./PostTask";
import MyPost from "./MyPost";
import SelectTasker from "./SelectTasker";
import Profile from "./Profile";
import FindWork from "./FindWork";
import MyServices from "./MyServices";
import PostRequest from "./PostRequest";
import Confirmation from "./Confirmation";
import Chat from "./Chat";
import Payment from "./Payment";

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpPage />
      <GetStarted />
      <SignInPage />
      <UserCategory />
      <WorkType />
      <PhysicalTask />
      <OnlineTask />
      <PostTask />
      <MyPost />
      <SelectTasker />
      <Profile />
      <FindWork />
      <MyServices />
      <PostRequest />
      <Confirmation />
      <Chat />
      <Payment />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
