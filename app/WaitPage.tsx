import { Text, View, StyleSheet } from "react-native";
import { useCurrentOrder } from "./contexts/OrderReview";

export default function WaitPage() {
  const { order } = useCurrentOrder();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>{order}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
  },
  main: {
    width: 350,
    height: 600,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
