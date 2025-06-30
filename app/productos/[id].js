import {  Text, StyleSheet, ScrollView, Pressable, Button, View } from "react-native-web";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { useCart } from "../(tabs)/Cart";
import { TwitterAuthProvider } from "firebase/auth/web-extension";

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const router = useRouter();
  const {addToCart} = useCart()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {productos.map(producto => (
        <View key={producto.id} 
            style={styles.card}>
          <Pressable 
            //onPress={() => router.push(`/details/${producto.id}`)}
            onPress={() => router.push(`/Details?id=${producto.id}`)}
          >
            <Text style={styles.title}>{producto.title}</Text>
            <Text>Precio: {producto.price} $</Text>
          </Pressable>

        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
    backgroundColor: "#cccccc",
    padding: 15,
    borderRadius: 10,
    width: 400,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default ListaProductos;


// import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native-web";
// import { useEffect, useState } from "react";
// import { useRouter } from "expo-router";

// const ListaProductos = () => {
//   const [productos, setProductos] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then(res => res.json())
//       .then(data => setProductos(data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <ScrollView style={styles.container}>
//       {productos.map(producto => (
//         <View key={producto.id} style={styles.card} >
//           <Text style={styles.title}>{producto.title}</Text>
//           <Text>Precio: ${producto.price}</Text>
          
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   card: {
//     marginBottom: 20,
//     backgroundColor: "#cccccc",
//     padding: 15,
//     borderRadius: 10,
//   },
//   title: {
//     fontWeight: "bold",
//     marginBottom: 5,
//   },

// });

// export default ListaProductos;