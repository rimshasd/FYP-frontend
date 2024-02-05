import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";

export default function OpenMobCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [ratio, setRatio] = useState("3:2"); // default is 4:3
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (cameraRef.current) {
        const ratios = await cameraRef.current.getSupportedRatiosAsync();
        setRatio(ratios[ratios.length - 1]); // set the last supported ratio
      }
    })();
  }, [cameraRef]);

  const stopCamera = () => {
    navigation.navigate("Home"); // Navigate back to the Home screen
  };

  return (
    <View style={{ flex: 1 }}>
      {hasPermission === null ? (
        <View />
      ) : hasPermission === false ? (
        <Text>No access to camera</Text>
      ) : (
        <>
          <Camera ref={cameraRef} style={{ flex: 1 }} type={cameraType} ratio={ratio} />
          <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }} onPress={stopCamera}>
            <Text style={{ color: "white", fontSize: 18 }}>Stop Mobile Camera</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
