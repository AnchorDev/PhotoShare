import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#101010',
        alignContent:'center',
    },
    container: {
        marginBottom: 120,
    },
    chatItemContainer: {
    },
    messageProfileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 5,
    },
    sentMessageText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic',
        padding: 5,
        marginLeft: 5,

    },
    sentMessageContainer:
    {
        marginTop: 7,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: 100,
        marginRight: 30,
        padding: 10,
    },
    receivedMessageContainer:
    {
        marginTop: 7,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginRight: 100,
        marginLeft: 30,

    },
    receivedMessageText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        alignContent: 'flex-end',
        padding: 5,
        marginLeft: 5,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 20,
        marginTop: 70,
      },
      sendButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
      },
      sendButton: {
        width: 100,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        marginTop:5,
      },
      input: {
        width: 300,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
      },
      inputContainer:
      {
        position: 'absolute',
        bottom: -120, // Ustawia inputContainer na dole
        left: 0, // Ustawia inputContainer na środku (możesz dostosować to według potrzeb)
        right: 0,
        alignItems: 'center'
    
      }
});
