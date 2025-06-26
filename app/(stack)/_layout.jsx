import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="Page2" />
      <Stack.Screen name="Details"/>
    </Stack>
  );
};

export default _layout;

