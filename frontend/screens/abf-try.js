import React, { useState } from "react";
import { View, TextInput, Button, Dropdown, Switch } from "react-native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [caretakerBeneficiary, setCaretakerBeneficiary] = useState(false);
  const [emergencyContact, setEmergencyContact] = useState(false);
  const [privacyPreferences, setPrivacyPreferences] = useState({});
  const [termsAndConditionsAccepted, setTermsAndConditionsAccepted] =
    useState(false);

  const handleSubmit = async () => {
    // Validate form inputs
    if (!email || !phoneNumber || !password || !fullName || !dateOfBirth) {
      alert("Please fill out all required fields");
      return;
    }

    // Create user object
    const user = {
      email,
      phoneNumber,
      password,
      fullName,
      dateOfBirth,
      caretakerBeneficiary,
      emergencyContact,
      privacyPreferences,
      termsAndConditionsAccepted,
    };

    // Send request to server to create new user
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("User created successfully!");
      } else {
        throw new Error(`Error creating user: ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
      alert("Error creating user");
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        placeholder="Date of Birth"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
      />
      <Dropdown
        label="Caretaker & Beneficiary"
        options={[
          { label: "Yes", value: true },
          { label: "No", value: false },
        ]}
        value={caretakerBeneficiary}
        onChange={setCaretakerBeneficiary}
      />
      <Dropdown
        label="Emergency Contact"
        options={[
          { label: "Yes", value: true },
          { label: "No", value: false },
        ]}
        value={emergencyContact}
        onChange={setEmergencyContact}
      />
      <Switch
        label="Privacy Preferences"
        value={privacyPreferences}
        onValueChange={setPrivacyPreferences}
      />
      <Switch
        label="Terms and Conditions Acceptance"
        value={termsAndConditionsAccepted}
        onValueChange={setTermsAndConditionsAccepted}
      />
      <Button title="Sign Up" onPress={handleSubmit} />
    </View>
  );
};

export default SignUp;

