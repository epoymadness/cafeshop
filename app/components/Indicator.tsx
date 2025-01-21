import { View, Text, StyleSheet } from 'react-native'; 



export default function Indicator() {
  return (
              <View style={styles.main}>
                <Text>Name</Text>
                <Text>quantity | price</Text>
              </View> 
  );
}



const styles = StyleSheet.create({
  main: {
    width: 400,
    height: 50,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: "center",
    gap: '60%',
    flexDirection: 'row',
    padding: 10,
  }
})



