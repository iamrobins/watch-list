import { TextInput, StyleSheet } from "react-native";
import { SHeading } from ".//globals";
import { useState } from "react";

export default function Search({ navigation }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <SHeading>Search</SHeading>
      <TextInput
        style={styles.search}
        placeholder="Search a song 🎵"
        onChangeText={(newText) => setSearch(newText)}
        defaultValue={search}
      />
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    fontFamily: "Rubik-Medium",
    height: 50,
    marginVertical: 20,
    padding: 10,
    width: "100%",
    borderRadius: 6,
    backgroundColor: "white",
  },
});
