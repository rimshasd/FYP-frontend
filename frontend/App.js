import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Permissions from "expo-modules-core"; // Correct import for Expo SDK 42+
//import { useFonts } from "expo-font";
//import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import ViewCamera from "./screens/ViewCamera";
import GenerateAlert from "./screens/GenerateAlert";
import OpenMobCamera from "./screens/OpenMobCamera";
import RecordedVideo from "./screens/RecordedVideo";
import VideoPlayer from "./screens/VideoPlayer";
import MedicationReminder from "./screens/Reminders";

const Stack = createNativeStackNavigator();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   PoppinsRegular: Poppins_400Regular,
  //   PoppinsBold: Poppins_700Bold,});
  //   useEffect(() => {
  //     if (!fontsLoaded) {
  //       // Font not yet loaded, you might want to add a loading indicator
  //     }
  //   }, [fontsLoaded]);
  
  //   if (!fontsLoaded) {
  //     return null; // or a loading indicator
  //   }
  // Request camera permissions
  React.useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this app work!");
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ViewCamera"
          component={ViewCamera}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GenerateAlert"
          component={GenerateAlert}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OpenMobCamera"
          component={OpenMobCamera}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RecordedVideo"
          component={RecordedVideo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayer}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="MedicationReminder"
          component={MedicationReminder}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

   