import { View, Text, StyleSheet } from "react-native";

type Product = {
  prop: string;
};

export default function Product({ prop }: Product) {
  return (
    <View style={styles.product}>
      <Text style={styles.text}>{prop}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    width: 100,
  },
  text: {
    fontSize: 15,
    color: "black",
  },
});
