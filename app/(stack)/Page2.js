import { View, Text, StyleSheet } from "react-native";


const Page2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta es Page2</Text>
      <Text style={styles.paragraph}>
        Has navegado a la segunda pantalla de la app. Aquí podrías mostrar más contenido,
        como detalles, formularios o una lista.
      </Text>

  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffaf0",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#222",
  },
  paragraph: {
    fontSize: 16,
    textAlign: "center",
    color: "#444",
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: "#0066cc",
    textDecorationLine: "underline",
  },
});

export default Page2;
