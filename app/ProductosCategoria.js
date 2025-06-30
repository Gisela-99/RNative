import {View, Text, Pressable, StyleSheet} from 'react-native'; 
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import {useCart} from './(tabs)/Cart';

const ProductosCategoria = () => {
  const { id } = useLocalSearchParams(); 
  const [producto, setProducto] = useState(null);
   const {addToCart} = useCart();
  

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products`) 
      .then(res => res.json())
      .then(data => {
        const productoFiltrado = data.find(p => p.id.toString() === id);
        setProducto(productoFiltrado);
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
       <Pressable style={styles.boton} onPress={() => addToCart(producto)}> 
              <Text style={styles.botonText}>Añadir al carritoijfero</Text>
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

export default ProductosCategoria;
