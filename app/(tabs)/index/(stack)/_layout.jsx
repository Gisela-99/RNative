import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="productos" options={{ title: "Productos Categoria" }} />
      {/* <Stack.Screen name="productosCategoria" options={{title:"Productos Categoria"}}/> */}
      <Stack.Screen name="Details" options={{ title: "Productos Categoria" }} />
    </Stack>
  );
};

export default _layout;

