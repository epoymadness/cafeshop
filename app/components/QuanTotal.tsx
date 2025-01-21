import { View, Text, StyleSheet } from "react-native";

type Item = {
  item: number;
}



export default function QuanTotal( { item }: Item ) {
  return(
    <View style={styles.quanPrice}>
      <Text style={styles.text}>{item}</Text>    
    </View>
  );
}


const styles = StyleSheet.create({
  quanPrice: {
    width: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  }
}); 



