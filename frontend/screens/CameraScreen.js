import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
// import {} from "react-native";
import { globalStyles } from "../globalstyles";

function CameraScreen({ setImage, setIsCameraActive }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      // 'photo' object will contain the captured image
      setImage(photo.uri);
      setIsCameraActive(false);
      console.log(photo);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text style={globalStyles.regularText}>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        ref={(ref) => setCameraRef(ref)}
      >
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={takePicture}>
            <Text style={[globalStyles.regularText, styles.buttonText]}>
              Click
            </Text>
          </Pressable>
        </View>
      </Camera>
    </View>
  );
}

export default CameraScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 5,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "rgba(31,139,113,0.7)",
    // marginLeft: 10,
    // marign: 10,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    borderRadius: 4,
  },
  buttonText: { fontSize: 18, color: "white" },
});
