import { Text, StyleSheet } from "react-native";

export default STextS = (props) => {
  return (
    <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "Rubik",
    fontSize: 14,
    lineHeight: 28,
  },
});
