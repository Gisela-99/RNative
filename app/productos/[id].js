import { View, Text, FlatList, } from "react-native-web";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";


const Productos = ()=>{
  const {id} = useLocalSearchParams()
  const [productos, setProductos] = useState ([])

  // useEffect(()=>{
  //   const fetchProductos = async ()=>{
  //       try{
        
  //         setProductos(data)
  //       }catch (error){
  //         console.log("Error al cargar productos",error)
  //       }
  //   }
    
  //   if(id) fetchProductos()
  // },[id])


  return(
    <View>
      <Text>Productos de la categoria {id}</Text>

      <FlatList 
        data={productos}
        keyExtractor={(item)=>item.id}

        renderItem={({item})=>(
          <View>
            <Text>{item.nombre}</Text>
          
          </View>
        )}
      />

      
    </View>
  )
}

export default Productos