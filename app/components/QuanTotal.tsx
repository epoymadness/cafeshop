import { View, Text, StyleSheet } from "react-native";

type Item = {
  item: number;
  price: number;
};

export default function QuanTotal({ item, price }: Item) {
  return (
    <View style={styles.container}>
      <View style={styles.quanPrice}>
        <Text style={styles.text}>{item}</Text>
      </View>
      <View style={styles.quanPrice}>
        <Text style={styles.text}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: 100,
    gap: 20,
    marginLeft: 20,
  },
  quanPrice: {
    width: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
