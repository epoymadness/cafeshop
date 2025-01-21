import { useState } from 'react';
import { View, Button , TextInput, StyleSheet } from "react-native"; 
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "./types/cafe";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCurrentUser, Error } from './contexts/OrderReview';
import axios from 'axios';


type Nav = StackNavigationProp<RootStackParamList>;



export default function Homescreen() {
  const [name, setName] = useState<string>('');
  const navigation = useNavigation<Nav>();
  const { setUser } = useCurrentUser();
  const { setErr,err } = Error();


  const handleChange = (input: string ) => {
    setName(input);
  }

  const postData = {
    name: name,
  }

  const nextPage = () => {
    navigation.push('Menu');  

  }


  const toMenu = () => {
    navigation.push('Menu');  
    
    axios.post('http://192.168.254.103:3000/newuser', postData)
     .then(response => {
      setUser(response.data.data);
      setErr(true);
      })
      .catch(error => {
        console.error('Error saving post:', error);
        setErr(false);
      })
  }

  return(
    <View style={style.container}>
        <TextInput style={style.btnWidth} value={name} onChangeText={handleChange} placeholder='Enter your name'/>
        <Button title='Proceed' onPress={toMenu} />
    </View>
  );
}



const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    textAlign: "center",
    fontSize: 20,
  },
  btnWidth: {
    justifyContent: "center",
    alignItems: 'center',
    width: 100,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
  }
});