import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import Home from "./pages/Home";
import Details from "./pages/details";

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;