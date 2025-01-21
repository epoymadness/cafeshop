import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { currentState, useCurrentUser } from "./contexts/OrderReview";
import { Quantity } from "./types/cafe";
import  Indicator  from './components/Indicator';
import QuanTotal from "./components/QuanTotal";
import Product from "./components/Product";
import Submit from "./components/Submit";
import CustomerDetails from "./components/CustomerDetails";



export default function Review() {
  const [order, setOrder] = useState<Quantity[]>([]);
  const { state } = currentState();
  const { user } = useCurrentUser();

  
  useEffect(() => {
    setOrder(state);
  }, [state])


  return (
    <View style={styles.container}>  
        <CustomerDetails name={user.name}/>
        <Indicator />
        {order.map((item: Quantity, indexID: any) => (
          <View key={indexID} style={styles.main}>
            <Product prop={item.productName}/>
            <QuanTotal item={item.quantity}/>
          </View>
        ))}
        <Submit title="Order"/>
    </View>
    );
  }





const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: "center",
  },
  main: {
    width: 400,
    height: 50,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: "center",
    gap: '53%',
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    fontSize: 15, 
    color: 'black',
  },
});