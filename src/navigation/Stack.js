import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register } from "../views";
import TabNav from "./Tab";


const Stack = createNativeStackNavigator();

const optionScreen = {
    headerShown: false
}

export default function StackNav() {
    return (
         <Stack.Navigator>
             <Stack.Screen name="Login" component={Login} options={optionScreen} />
             <Stack.Screen name="Register" component={Register} options={optionScreen} />
             <Stack.Screen name="TabNav" component={TabNav} options={optionScreen} />
         </Stack.Navigator>

    );
}
