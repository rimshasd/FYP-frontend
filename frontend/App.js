import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import ViewCamera from "./screens/ViewCamera";
import GenerateAlert from "./screens/GenerateAlert";
import OpenMobCamera from "./screens/OpenMobCamera";
import RecordedVideo from "./screens/RecordedVideo";
import VideoPlayer from "./screens/VideoPlayer";


const Stack = createNativeStackNavigator();

export default function App() {
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

      </Stack.Navigator>
    </NavigationContainer>
  );
}
