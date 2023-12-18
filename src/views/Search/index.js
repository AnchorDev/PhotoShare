import {Text, View, Pressable} from "react-native";
import {styles} from "./style";

export function Search({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#101010' }}>
            <Text style={{color: 'white'} }>Search</Text>
        </View>
    );
}
