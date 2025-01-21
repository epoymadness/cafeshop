import { Button } from 'react-native';
import { currentState, useCurrentUser  } from '../contexts/OrderReview'; 
import { useState, useEffect } from "react";
import { Quantity, RootStackParamList } from '../types/cafe';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack"; 
import { useCurrentOrder } from '../contexts/OrderReview'; 
import axios from 'axios';

type Submit = {
  title: string,
}

type Nav = StackNavigationProp<RootStackParamList>;



export default function Submit({ title }: Submit) {
  const [item, setItem] = useState<Quantity[]>([]);
  const { state } = currentState();
  const { user } = useCurrentUser();
  const navigation = useNavigation<Nav>();
  const { setOrder } = useCurrentOrder();


  useEffect(() => {
    setItem(state);
  }, [state]);


  const customerId = user.id;
  const customerItem = item.map((item) => ({
    productId: item.id,
    quantity: item.quantity,
  }));

  const postData = {
    customerId,
    customerItem,
  }

  const nextPage = () => {
    navigation.push('Ordered');
    
  }
  

  const handleSubmit = () => {
    axios.post('http://192.168.254.103:3000/order', postData)
    .then((response) => {
      setOrder(response.data.message);
    }) 
    .catch((error) => {
      console.error("Error submitting order", error);
    });

    navigation.push('Ordered');
  };
  
  

  return(
    <Button  title={title} onPress={handleSubmit}/>
  );
}