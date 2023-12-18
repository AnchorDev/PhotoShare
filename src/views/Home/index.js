import {Text, View} from "react-native";


export function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#101010' }}>
            <Text style={{color: 'white'} }>Home</Text>
        </View>
    );
}
