import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Search from "./components/Search";
import CardMd from "./components/cards/CardMd";

export default function App() {
  const [loaded] = useFonts({
    Rubik: require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Search />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardMd
          source={require("./assets/icons/television.png")}
          text="TV Shows"
        />
        <CardMd source={require("./assets/icons/reel.png")} text="Reels" />
        <CardMd source={require("./assets/icons/youtube.png")} text="Youtube" />
        <CardMd
          source={require("./assets/icons/world-wide-web.png")}
          text="Web"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingVertical: 42,
    backgroundColor: "#F8F7F2",
  },
});
