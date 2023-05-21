import { TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function Search({ navigation }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <TextInput
        style={styles.search}
        placeholder="Search something 💭"
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
