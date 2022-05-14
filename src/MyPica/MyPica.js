import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";

const MyPica = () => {
  const [language, setLanguage] = useState("");
  return (
    <View style={styles.container}>
      <Text>
        {language
          ? `My favourite language is ${language}`
          : "Please select a language"}
      </Text>
      <Text>Hello World!</Text>
      <View
        style={{
          backgroundColor: "red",
          width: "100%",
          color: "white",
          borderRadius: 10,
          height: 50,
          marginTop: 20,
          borderColor: "black",
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RNPickerSelect
          placeholder={{ label: "Select you favourite language", value: null }}
          useNativeAndroidPickerStyle={false}
          onValueChange={(language) => setLanguage(language)}
          items={[
            { label: "JavaScript", value: "JavaScript" },
            { label: "TypeScript", value: "TypeScript" },
            { label: "Python", value: "Python" },
            { label: "Java", value: "Java" },
            { label: "C++", value: "C++" },
            { label: "C", value: "C" },
          ]}
        />
      </View>
    </View>
  );
};

export default MyPica;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

//source https://blog.logrocket.com/how-to-use-react-native-picker-select/
