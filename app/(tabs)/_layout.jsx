import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const TabsNavigator = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#9BA1A6",
        tabBarStyle: { backgroundColor: "#fff" }, 
      }}
    >
      <Tabs.Screen
        name="index/(stack)"  
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Cart" 
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsNavigator;
