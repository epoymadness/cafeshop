import React, { createContext, useContext, useState } from 'react';
import { Quantity, User, Order } from '../types/cafe';



const CurrentOrder = createContext<any>(null);
const CurrentUser = createContext<any>(null);
const ReviewOrder = createContext<any>(null);
const SetError = createContext<any>(null);

export function Error() {
  return useContext(SetError);
}


export function useCurrentUser() {
  return useContext(CurrentUser);
}

export function useCurrentOrder() {
  return useContext(ReviewOrder);
}

export function currentState() {
  return useContext(CurrentOrder);
} 

export function OrderProvider({ children }: any) {
  const [state, setCurrentState] = useState<Quantity[]>([]);
  const [user, setUser] = useState<User[]>([]);
  const [order, setOrder] = useState<Order[]>([]);
  const [err, setErr] = useState<boolean>(false);

  
return (
    <CurrentOrder.Provider value={{state, setCurrentState}}>
      <CurrentUser.Provider value={{user, setUser}}>
        <ReviewOrder.Provider value={{order, setOrder}}>
          <SetError.Provider value={{err, setErr}}>
            {children}
          </SetError.Provider>
        </ReviewOrder.Provider>
      </CurrentUser.Provider>
    </CurrentOrder.Provider>
  );
}



