import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const Details = () => {
  const { id, other } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles recibidos</Text>
      <Text>ID: {id}</Text>
      <Text>Otro: {other}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default Details;
