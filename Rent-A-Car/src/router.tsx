import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { Feather } from "@expo/vector-icons";
import Aluguel from "./pages/view/aluguel";
import Detalhes from "./pages/view/detalhes";
import Finalizacao from "./pages/view/finalizacao";
import Login from "./pages/view/login";
import Perfil from "./pages/view/perfil";
import Registro from "./pages/view/registro";
const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="aluguel" component={Aluguel} />
                <Stack.Screen name="detalhes" component={Detalhes} />
                <Stack.Screen name="finalizacao" component={Finalizacao} />
                <Stack.Screen name="perfil" component={Perfil} />
                <Stack.Screen name="registro" component={Registro} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;