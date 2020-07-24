import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange , onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        placeholderTextColor="#1f4068"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#ebecf1",
    height: 50,
    borderRadius: 7,
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: "row",
  },
  inputStyle: {
    fontSize: 20,
    color: "#1f4068",
    flex: 1,
    
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
    color: "#1f4068",
  },
});
export default SearchBar;
