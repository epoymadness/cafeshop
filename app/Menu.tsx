import React, { useRef } from "react";
import { ScrollView, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./types/cafe";
import { StackNavigationProp } from "@react-navigation/stack";
import { Error } from "./contexts/OrderReview";
import Options from "./components/Options";
import Blank from "./components/Blank";

type rootParam = StackNavigationProp<RootStackParamList>;

export default function App() {
  const scrollViewRef = useRef<ScrollView>(null);
  const navigation = useNavigation<rootParam>();
  const { err } = Error();

  useFocusEffect(
    React.useCallback(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    }, [])
  );

  const toReview = () => {
    navigation.push("Review");
  };

  return (
    <ScrollView ref={scrollViewRef}>
      {!err ? <Blank /> : <Options />}
    </ScrollView>
  );
}
