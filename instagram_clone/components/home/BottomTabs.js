import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/material/50/ffffff/home--v5.png",
    inactive: "https://img.icons8.com/material-outlined/50/ffffff/home--v2.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/50/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/50/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/50/ffffff/instagram-reel.png",
  },
  {
    name: "likes",
    active: "https://img.icons8.com/ios-glyphs/30/ffffff/filled-like.png",
    inactive:
      "https://img.icons8.com/material-outlined/24/ffffff/filled-like.png",
  },
  {
    name: "Profile",
    active:
      "https://lh3.googleusercontent.com/Ua2k5pxvxafx5bExqq4QRjeE_yCIsDN87foPuxdW1OREn7nzUHTw5TVqNvy2mGoK4VC_2FBeqHZR0j-FmN9fvokw4nRhTI0uQTSMfKg21wLmJZADF-I1zNxiM8hy_eb6tKLflG06Ya5HRbENmF5R5BRfV66r498qSuy079JdT6GwV29bzuocX3-tWB9oNRdcS1dyiKMPj65t0tgzv8H97Q0WinNXOZYNfKKWM0BJMW6mB1aTKxxUkV_5ndblhMM-V3o9qOyO8ltx6jic6uakJyl7bPZwLOuYEa8nvihzp6b99KbpTrFbqTsooVKlBXs91HKeKjqAx6g7cwyJrIVsP7d3gjbuBt0yea3Acrhx5HDCHUrPPE7mnNYPkaolK2leQ39GNCk7VddK2HXVZZ_jIg_0LOkoP_8TWS-0642TEbklGzxSecpHuxVWEf-LTwtHWN6Sog4iuT_oE5Fsu2-ns5f_2pYRFeZzQudvitMLkGdbQ4MCEn99RvwaXNo2vTJia7Gb2ZMo66VkZjOyCJxS3JwvX2DioduAiy3Zp47brEF1ANxt4c3-r4o1MY61_X9DOyqTvyd-ipOoe484seT9SJ6t4pmnNRaWpBtqmTcSfy0lMSDmE892GrcvLe36Vd8bVhGwQxPZs-KOryIvWfSgM_-Mv5zJPd1sQceWpW09qQMMb9SzzNWouirDLYc51F9HwRqbpjQ0AiQBIS_-4LhoNuY=w635-h636-no?authuser=0",

    inactive:
      "https://lh3.googleusercontent.com/Ua2k5pxvxafx5bExqq4QRjeE_yCIsDN87foPuxdW1OREn7nzUHTw5TVqNvy2mGoK4VC_2FBeqHZR0j-FmN9fvokw4nRhTI0uQTSMfKg21wLmJZADF-I1zNxiM8hy_eb6tKLflG06Ya5HRbENmF5R5BRfV66r498qSuy079JdT6GwV29bzuocX3-tWB9oNRdcS1dyiKMPj65t0tgzv8H97Q0WinNXOZYNfKKWM0BJMW6mB1aTKxxUkV_5ndblhMM-V3o9qOyO8ltx6jic6uakJyl7bPZwLOuYEa8nvihzp6b99KbpTrFbqTsooVKlBXs91HKeKjqAx6g7cwyJrIVsP7d3gjbuBt0yea3Acrhx5HDCHUrPPE7mnNYPkaolK2leQ39GNCk7VddK2HXVZZ_jIg_0LOkoP_8TWS-0642TEbklGzxSecpHuxVWEf-LTwtHWN6Sog4iuT_oE5Fsu2-ns5f_2pYRFeZzQudvitMLkGdbQ4MCEn99RvwaXNo2vTJia7Gb2ZMo66VkZjOyCJxS3JwvX2DioduAiy3Zp47brEF1ANxt4c3-r4o1MY61_X9DOyqTvyd-ipOoe484seT9SJ6t4pmnNRaWpBtqmTcSfy0lMSDmE892GrcvLe36Vd8bVhGwQxPZs-KOryIvWfSgM_-Mv5zJPd1sQceWpW09qQMMb9SzzNWouirDLYc51F9HwRqbpjQ0AiQBIS_-4LhoNuY=w635-h636-no?authuser=0",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{
          uri: activeTab === icon.name ? icon.active : icon.inactive,
        }}
        // styling only the profile picture instead of all icons.
        style={[
          styles.icon, //regular styling
          icon.name === "Profile" ? styles.profilePic : null,
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider
        style={{ backgroundColor: "#595959" }}
        width={1}
        orientation="vertical"
      />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

//StyleSheet

const styles = StyleSheet.create({
  wrapper: {
    position: "fixed",
    width: "100%",
    zIndex: 999,
    bottom: "0%",
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },

  profilePic: {
    borderRadius: 50,
    borderColor: "#fff",
  },
});
export default BottomTabs;
