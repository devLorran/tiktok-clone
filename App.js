import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes"
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"transparent"} barStyle="light-content" translucent={true}/>
      <Routes />
    </NavigationContainer>
  );
}
//172.18.96.1.64