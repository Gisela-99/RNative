import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {useCart} from '../../Cart';

const Details = () => {
  const { id } = useLocalSearchParams(); 
  const [producto, setProducto] = useState(null);
  const {addToCart} = useCart();

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
      <Text>Precio vdgr: ${producto.price}</Text>
      <Text>Descripción: {producto.description}</Text>

      <Pressable style={styles.boton} onPress={() => addToCart(producto)}> 
        <Text style={styles.botonText}>Añadir al carrito</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    width: 200,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  }, 
  botonText: {
    color: "white",
    textAlign: "center",
  }
});

export default Details;



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