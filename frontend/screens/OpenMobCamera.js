import React, { useState, useEffect, useRef } from "react";
import { Text, View } from "react-native";
import { RNCamera } from "react-native-camera";

export default function OpenMobCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);
  const [ratio, setRatio] = useState("3:2"); // default is 4:3
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await RNCamera.requestPermissionsAsync();
      setHasPermission(cameraStatus === "granted");
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

  return (
    <View style={{ flex: 1 }}>
      {hasPermission === null ? (
        <View />
      ) : hasPermission === false ? (
        <Text>No access to camera</Text>
      ) : (
        <RNCamera
          ref={cameraRef}
          style={{ flex: 1 }}
          type={cameraType}
          ratio={ratio}
        />
      )}
    </View>
  );
}
