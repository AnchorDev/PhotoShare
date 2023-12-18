import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register, Settings, Chat } from "../views";
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
            <Stack.Screen name="Chat" component={Chat} options={optionScreen} />
            <Stack.Screen name="Settings" component={Settings} options={optionScreen} />
         </Stack.Navigator>

    );
}
