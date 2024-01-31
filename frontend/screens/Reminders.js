import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import * as Notifications from "expo-notifications";

const Reminders = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");

  const addReminder = async () => {
    const timeParts = time.split(":");
    const trigger = new Date();
    trigger.setHours(timeParts[0]);
    trigger.setMinutes(timeParts[1]);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: `It's time to take your ${name}`,
        body: `Details: ${details}`,
      },
      trigger: {
        hour: trigger.getHours(),
        minute: trigger.getMinutes(),
        repeats: true,
      },
    });

    setName("");
    setTime("");
    setDetails("");
  };

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View>
      <Text>Medication Reminder</Text>
      <TextInput
        placeholder="Medication Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Time (HH:MM)"
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        placeholder="Details"
        value={details}
        onChangeText={setDetails}
      />
      <Button title="Add Reminder" onPress={addReminder} />
    </View>
  );
};

export default Reminders;
