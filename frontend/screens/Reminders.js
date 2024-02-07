

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from "react-native";
import { HelperText, Snackbar, Portal, Provider } from "react-native-paper";

const MedicationReminder = ({ navigation }) => {
  const [medicationName, setMedicationName] = useState("");
  const [medicationTime, setMedicationTime] = useState("");
  const [medications, setMedications] = useState([]);
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [editingMedicationIndex, setEditingMedicationIndex] = useState(null);

  const addMedication = () => {
    if (!medicationName || !medicationTime) {
      setSnackbarMessage("Please fill in all fields");
      setSnackbarVisible(true);
      return;
    }

    if (editingMedicationIndex !== null) {
      // Edit existing medication
      const updatedMedications = [...medications];
      updatedMedications[editingMedicationIndex] = {
        medicationName,
        medicationTime,
      };
      setMedications(updatedMedications);

      setSnackbarMessage("Medication updated successfully!");
    } else {
      // Add new medication
      setMedications((prevMedications) => [
        ...prevMedications,
        { medicationName, medicationTime },
      ]);

      setSnackbarMessage("Medication added successfully!");
    }

    setSnackbarVisible(true);
    setMedicationName("");
    setMedicationTime("");
    setEditingMedicationIndex(null);
    setModalVisible(false);
  };

  const deleteMedication = (index) => {
    const updatedMedications = [...medications];
    updatedMedications.splice(index, 1);
    setMedications(updatedMedications);
  };

  const openEditModal = (index) => {
    const medicationToEdit = medications[index];
    setMedicationName(medicationToEdit.medicationName);
    setMedicationTime(medicationToEdit.medicationTime);
    setEditingMedicationIndex(index);
    setModalVisible(true);
  };

  return (
    <Provider>
      <View style={styles.container}>
        <ImageBackground
          source={require("C:\Users\Rimsha Syed\Desktop\trash\hn\FYP-frontend\frontend\assets\pillshands.jpg")}
          style={styles.imageBackground}
        >
          {/* Content for the first half of the screen */}
        </ImageBackground>
        <View style={styles.listContainer}>
          <Text style={styles.title}>Medication Reminder</Text>
          <FlatList
            data={medications}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.medicationItem}
                onPress={() => openEditModal(index)}
              >
                {/* Content for displaying medication list */}
                <Text style={styles.medicationName}>{item.medicationName}</Text>
                <Text>{`Time: ${item.medicationTime}`}</Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteMedication(index)}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />
          {medications.length === 0 && (
            <TouchableOpacity
              style={styles.addMedicineButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.addMedicineButtonText}>Add Medicine</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Snackbar, Modal, etc. remain unchanged */}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 0.5, // Take up the first half of the screen
    justifyContent: "center",
    resizeMode: "cover",
  },
  listContainer: {
    flex: 0.5, // Take up the second half of the screen
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  medicationItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  medicationName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#ff6961",
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addMedicineButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  addMedicineButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default MedicationReminder;
