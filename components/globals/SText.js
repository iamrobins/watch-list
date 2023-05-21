import { Text, StyleSheet } from "react-native";

export default SText = (props) => {
  return (
    <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "Rubik-Medium",
    fontSize: 17,
    lineHeight: 28,
  },
});
