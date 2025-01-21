import { View, Text, StyleSheet } from 'react-native';
import { User } from '../types/cafe';


export default function CustomerDetails({name, id}: User) {
  return(
      <View style={styles.main}>
        <Text>{name}</Text>
        <Text>{id}</Text>
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