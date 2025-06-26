// import { View, Text, StyleSheet } from "react-native";
// import { useLocalSearchParams } from "expo-router";

// const Details = () => {
//   const { id, other } = useLocalSearchParams();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Detalles recibidos</Text>
//       <Text>ID: {id}</Text>
//       <Text>Otro: {other}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#eef",
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 20,
//     fontWeight: "bold",
//   },
// });

// export default Details;
import { View, Text, StyleSheet } from "react-native-web";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

const  Details= () => {
  const { id } = useLocalSearchParams(); 
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`) 
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!producto) {
    return <Text>Cargando producto...</Text>;
  }

  return (
    <View>
      <Text>Título: {producto.title}</Text>
      <Text>Precio: ${producto.price}</Text>
      <Text>Descripción: {producto.description}</Text>
        <Text style={styles.boton}>Añadir en un carrito</Text>
    </View>
  );
};
const styles = StyleSheet.create({
 boton: {
    padding: 10,
    backgroundColor: "#2e86de",
    color: "#fff",
    marginTop: 20,
    textAlign: "center",
    borderRadius: 5,
    with:50,
  },
})

export default Details;
