import { Stack } from "expo-router";
import { CartProvider } from "./(tabs)/Cart";

const _layout = () => {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(stack)" options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
  );
};

export default _layout;

