import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";
import { HelperText, Snackbar } from "react-native-paper";
import * as Notifications from "expo-notifications";

const Reminders = () => {
  const [medicationName, setMedicationName] = useState("");
  const [medicationTime, setMedicationTime] = useState("");
  const [medicationDetails, setMedicationDetails] = useState("");
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [reminders, setReminders] = useState([]);

  const addReminder = async () => {
    if (!medicationName || !medicationTime) {
      setSnackbarMessage("Please fill in all fields");
      setSnackbarVisible(true);
      return;
    }

    const timeParts = medicationTime.split(":");
    const trigger = new Date();
    trigger.setHours(timeParts[0]);
    trigger.setMinutes(timeParts[1]);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: `It's time to take your ${medicationName}`,
        body: `Details: ${medicationDetails || "No details provided"}`,
      },
      trigger: {
        hour: trigger.getHours(),
        minute: trigger.getMinutes(),
        repeats: true,
      },
    });

    setReminders((prevReminders) => [
      ...prevReminders,
      { medicationName, medicationTime, medicationDetails },
    ]);

    setSnackbarMessage("Reminder added successfully!");
    setSnackbarVisible(true);
    setMedicationName("");
    setMedicationTime("");
    setMedicationDetails("");
  };

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("NOTIFICATION RECEIVED:", notification);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medication Reminder</Text>
      <View>
        <Text>Medication Name:</Text>
        <TextInput
          style={styles.input}
          value={medicationName}
          onChangeText={setMedicationName}
        />
      </View>
      <View>
        <Text>Time (HH:MM):</Text>
        <TextInput
          style={styles.input}
          value={medicationTime}
          onChangeText={setMedicationTime}
        />
      </View>
      <View>
        <Text>Details:</Text>
        <TextInput
          style={styles.input}
          value={medicationDetails}
          onChangeText={setMedicationDetails}
        />
      </View>
      <HelperText type="info">
        Provide medication details and time for the reminder.
      </HelperText>
      <Button title="Add Reminder" onPress={addReminder} />
      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
      >
        {snackbarMessage}
      </Snackbar>

      <FlatList
        data={reminders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.reminderItem}>
            <Text style={styles.reminderTitle}>{`Medication Name: ${item.medicationName}`}</Text>
            <Text>{`Time: ${item.medicationTime}`}</Text>
            <Text>{`Details: ${item.medicationDetails}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

// ... (Previous code)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins-Bold", // Use Poppins-Bold for the title
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 5,
  },
  reminderItem: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
  },
  reminderTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Bold", // Use Poppins-Bold for the title in the reminder list
    marginBottom: 5,
  },
  reminderText: {
    fontSize: 14,
    fontFamily: "System", // Use a system font for the actual values
  },
});

export default Reminders;
