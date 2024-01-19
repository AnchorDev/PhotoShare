import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    settingsPanel: {
        width: 300,
        margin: 20,
        padding: 10,
        backgroundColor: 'black',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 20,
        marginTop: 70,
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Roboto',
        marginLeft: 10,
    },
    settingsText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Roboto',
    },
    settingsTextRed: {
        color: 'red',
        fontSize: 40,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
    },
    settingItemText: {
        marginLeft: 10,
        color: 'white',
        fontSize: 40,
        fontFamily: 'Roboto',
    },
    imageButton: {
        marginTop: 5,
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    imageIcon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
});
