import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { currentState } from "../contexts/OrderReview";
import { Product, RootStackParamList } from "../types/cafe";
import { useEffect, useState } from "react";
import{ StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";



type Nav = StackNavigationProp<RootStackParamList>;




export default function Options() {
  const [data, setData] = useState<Product[]>([])
  const navigation = useNavigation<Nav>();
  const { setCurrentState } = currentState();

  const addQuantity = (name: string, id: number) => {
    setCurrentState((prevArray: any) => {
        const arrayObjects = [...prevArray];
        const existingProductIndex = arrayObjects.findIndex((obj) => obj.productName === name);
  
        if (existingProductIndex !== -1) {
            arrayObjects[existingProductIndex].quantity += 1;
        } else {``
            const objectArr = {
                productName: name,
                quantity: 1,
                id: id,
            }; 
            arrayObjects.push(objectArr);
        }
        return arrayObjects;
    });
  };


  useEffect(() => {   
    axios
        .get("http://192.168.254.103:3000/product")
        .then((response) => {
            setData(response.data.data); 
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
  }, []);
  

  const toNextPage = () => {
    navigation.navigate("Review");
  }


  
  return(
    <View style={styles.container}>
    {data.map((item, index) => (
        <View key={item.id} style={styles.probox}>
            <TouchableOpacity onPress={() => addQuantity(item.name, item.id)}>
                <View style={styles.placeholder}></View>
                <Text style={styles.text}>
                    {item.name}
                    {"\n"}
                    {item.price}  
                </Text>
            </TouchableOpacity>
        </View>
    ))} 
    <Button title="Review" onPress={toNextPage}/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
  placeholder: {
      width: 100,
      height: 100,
      backgroundColor: "lightgray",
      marginBottom: 25,
  },
  probox: { 
    margin: 10,
    width: "40%",
    height: 200,
    borderWidth: 1,
    fontSize: 18,
    color: "black",
    textAlign: "center",    
    justifyContent: "flex-end",
    alignItems: "center",
},
});