import { Text, StyleSheet } from "react-native";

export default SHeading = (props) => {
  return (
    <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "Rubik-Medium",
    fontSize: 24,
    lineHeight: 32,
  },
});
