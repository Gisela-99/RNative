import { View, Text } from 'react-native'; 
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

const ProductosCategoria = () => {
  const { id } = useLocalSearchParams(); 
  const [producto, setProducto] = useState(null);

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
    </View>
  );
};

export default ProductosCategoria;
