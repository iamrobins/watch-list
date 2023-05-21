import { View, StyleSheet, Image } from "react-native";
import { STextS } from "../globals";

export default CardMd = (props) => {
  return (
    <View style={[styles.defaultStyle, props.style]}>
      <Image
        source={props.source}
        style={[
          {
            width: 50,
            height: 50,
          },
        ]}
      />
      <STextS style={{ textAlign: "center" }}>{props.text}</STextS>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
});
