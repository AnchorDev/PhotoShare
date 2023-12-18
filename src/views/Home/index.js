import { Text, View, TouchableOpacity } from "react-native";


export function Home({ navigation }) {
    const openChat = () => {
        navigation.navigate('Chat');
    };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#101010' }}>
            <Text style={{ color: 'white' }}>Home</Text>
            <TouchableOpacity onPress={openChat}>
                <Text style={{ color: 'white' }}>Komunikator</Text>
            </TouchableOpacity>
        </View>
    );
}
