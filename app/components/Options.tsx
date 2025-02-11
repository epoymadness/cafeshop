import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import { currentState } from "../contexts/OrderReview";
import { Product, RootStackParamList } from "../types/cafe";
import { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Coffee from "./Coffee";

type Nav = StackNavigationProp<RootStackParamList>;

export default function Options() {
  const [data, setData] = useState<Product[]>([]);
  const navigation = useNavigation<Nav>();
  const { setCurrentState } = currentState();

  const addQuantity = (name: string, id: number, price: number) => {
    setCurrentState((prevArray: any) => {
      const arrayObjects = [...prevArray];
      const existingProductIndex = arrayObjects.findIndex(
        (obj) => obj.productName === name
      );

      if (existingProductIndex !== -1) {
        arrayObjects[existingProductIndex].quantity += 1;
      } else {
        const objectArr = {
          productName: name,
          quantity: 1,
          id: id,
          price: price,
        };
        arrayObjects.push(objectArr);
      }
      return arrayObjects;
    });
  };

  useEffect(() => {
    axios
      .get("http://192.168.254.101:3000/product")
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toNextPage = () => {
    navigation.navigate("Review");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.map((item) => (
          <View key={item.id} style={styles.probox}>
            <TouchableOpacity
              onPress={() => addQuantity(item.name, item.id, item.price)}
            >
              <View style={styles.placeholder}>
                <Coffee path={item.picture} />
              </View>
              <Text style={styles.text}>
                {item.name}
                {"\t"}
                {item.price}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Fixed Button */}
      <View style={styles.fixedButton}>
        <Button title="Review" onPress={toNextPage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures full height
  },
  scrollContainer: {
    paddingTop: 10,
    paddingBottom: 100, // Ensures last item isn't hidden behind button
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  probox: {
    margin: 10,
    width: "40%",
    height: 200,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
  fixedButton: {
    position: "absolute",
    bottom: 0, // Keeps it at the very bottom of the screen
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "white", // Optional: background to stand out
    alignItems: "center",
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
