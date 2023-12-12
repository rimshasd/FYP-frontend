import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Home = ({ route }) => {
  const { RecordedVideo } = route.params || { RecordedVideo: [] };
  const navigation = useNavigation();

  const handleCameraPress = () => {
    navigation.navigate("ViewCamera"); // Navigate to the Camera screen
  };

  const handleAlertCameraPress = () => {
    navigation.navigate("GenerateAlert"); // Navigate to the Camera screen
  };

  const handleOpenMobCameraPress = () => {
    navigation.navigate("OpenMobCamera"); // Navigate to the Camera screen
  };

  const handleRecordedVideoPress = () => {
    navigation.navigate("RecordedVideo", { RecordedVideo });
  };

  const handleHealthAnalysisPress = () => {
    // Handle Health Analysis button press
  };

  const handleMedicationsPress = () => {
    // Handle Manage Medications button press
  };

  const handleMealTrackingPress = () => {
    // Handle Track Meal button press
  };

  const handleVoiceCommandPress = () => {
    // Handle Voice Command button press
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>HealthCane</Text>
      </View>
      <Text style={styles.screenLabel}>Home</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleCameraPress} style={styles.button}>
          <Icon name="camera" size={50} color="#00B900" />
          <Text style={styles.buttonText}>View Live Footage</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleAlertCameraPress}
          style={styles.button}
        >
          <Icon name="camera" size={50} color="#00B900" />
          <Text style={styles.buttonText}>View Live Camera Video</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleOpenMobCameraPress}
          style={styles.button}
        >
          <Icon name="camera" size={50} color="#FF0000" />
          <Text style={styles.buttonText}>Open Mob Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleRecordedVideoPress}
          style={styles.button}
        >
          <Icon name="film" size={50} color="#000000" />
          <Text style={styles.buttonText}>Recorded Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleHealthAnalysisPress}
          style={styles.button}
        >
          <Icon name="heartbeat" size={50} color="#0000FF" />
          <Text style={styles.buttonText}>Health Analysis</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleMedicationsPress}
          style={styles.button}
        >
          <Icon name="medkit" size={50} color="#FF0000" />
          <Text style={styles.buttonText}>Manage Medications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleMealTrackingPress}
          style={styles.button}
        >
          <Icon name="cutlery" size={50} color="#FFA500" />
          <Text style={styles.buttonText}>Track Meal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleVoiceCommandPress}
          style={styles.button}
        >
          <Icon name="microphone" size={50} color="#800080" />
          <Text style={styles.buttonText}>Voice Command</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#331959",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  screenLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  button: {
    width: "45%",
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});

export default Home;
