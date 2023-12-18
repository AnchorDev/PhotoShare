import {Text, View, Pressable} from "react-native";
import {styles} from "./style";

export function Login({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Pressable style={styles.loginBtn} onPress={() => navigation.navigate('Register') }>
                <Text style={styles.loginText}>Go to register</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('TabNav') }>
                <Text>Go to Home screen</Text>
            </Pressable>
        </View>
    );
}
