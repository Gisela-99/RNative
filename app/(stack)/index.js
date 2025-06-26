import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { FlatList, Pressable } from "react-native";
import { CATEGORIES } from "../data/categories";


const Page1 = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
     
      
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item)=> item.id}
        numColumns={2}
        renderItem={({item})=>(
          <Pressable 
            onPress={()=>router.push(`/productos/${item.id}`)}
            //onPress={()=>router.push(`/productosCategoria/${item.id}`)}
            style={[styles.cuadro, {backgroundColor:item.color}]}>
            <Text style={styles.itemText}>{item.name}</Text>
          </Pressable>
        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  cuadro: {
      flex: 1,
      // cuadrado perfecto
      justifyContent: "center",
      alignItems: "center",
      padding:30,
      height:400,
      width:400,
    },
    itemText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize:25,
    },
 
});

export default Page1;
