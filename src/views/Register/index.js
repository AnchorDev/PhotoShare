import {Pressable, Text, View} from "react-native";
import {styles} from "./style";

export function Register({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Pressable style={styles.registerBtn} onPress={() => navigation.navigate('Login') }>
                <Text style={styles.registerText}>Go to login</Text>
            </Pressable>
        </View>
    );
}
