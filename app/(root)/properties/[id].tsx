import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Property() {
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Property {id}</Text>
    </View>
  );
}
