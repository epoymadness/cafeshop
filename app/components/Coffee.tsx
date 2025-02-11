import { View, Text } from "react-native";
import { FinalCoffee } from "../img/Coffee";

type Path = {
  path?: string;
};

export default function Coffee({ path }: Path) {
  if (!path) {
    return <Text>No coffee image provided</Text>;
  }

  if (path.includes("Coffee.png")) {
    return <FinalCoffee />;
  }
  return null;
}
