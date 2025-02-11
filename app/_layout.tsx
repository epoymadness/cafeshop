import { createStackNavigator } from "@react-navigation/stack";
import { OrderProvider } from "./contexts/OrderReview";
import { RootStackParamList } from "./types/cafe";
import React from "react";
import Homescreen from "./Homescreen";
import Menu from "./Menu";
import Review from "./Review";
import WaitPage from "./WaitPage";

export default function RootLayout() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <OrderProvider>
      <Stack.Navigator initialRouteName="Homescreen">
        <Stack.Screen
          name="Homescreen"
          options={{ headerShown: false }}
          component={Homescreen}
        />

        <Stack.Screen name="Menu" component={Menu} />

        <Stack.Screen name="Review" component={Review} />

        <Stack.Screen
          name="Ordered"
          component={WaitPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </OrderProvider>
  );
}
