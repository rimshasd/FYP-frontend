import React from "react";
import { View, StyleSheet } from "react-native";
import Video from "react-native-video";


const RecordedVideo = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require("../assets/Hammering.mp4")} // Replace with the path to your first video file
        style={styles.video}
        controls={true}
        resizeMode="contain"
      />
      <Video
        source={require("../assets/HullaHoop.mp4")} // Replace with the path to your second video file
        style={styles.video}
        controls={true}
        resizeMode="contain"
      />
      <Video
        source={require("../assets/Hammering1.mp4")} // Replace with the path to your first video file
        style={styles.video}
        controls={true}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default RecordedVideo;
