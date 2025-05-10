import { router, useLocalSearchParams } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";


export default function HomeScreen() {
  const params = useLocalSearchParams();
  console.log(params);
  return (
    <View style={{ padding: 16, paddingTop: 80, backgroundColor: "white" }}>
      <Text>{JSON.stringify(params)}</Text>
      <Text>{params.x ?? "NONE"}</Text>
      <TouchableOpacity onPress={() => router.setParams({ x: "x" })}>
        <Text>X</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.setParams({ x: "y" })}>
        <Text>Y</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.setParams({ x: undefined   })}>
        <Text>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
