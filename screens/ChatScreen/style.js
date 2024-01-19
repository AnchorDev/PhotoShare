import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#101010',
    },
    chatSection: {
        position: 'absolute',
        top: 300,
        left: 10, 
        width: '100%',
        backgroundColor: '#101010',
    },
    chatItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%',
    },
    profilesSection: {
        position: 'absolute',
        top: 150,
        left: 40, 
        width: '100%',
        border: '25px solid gray',
        display: 'flex',
        flexDirection: 'row',
    },
    profileItemContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        maring: 50,

    },
    profileBackground: {
        marginTop: 10,
        width: 65,
        height: 65,
        borderRadius: 50,
        backgroundColor: 'blue',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    mainProfileBackground: {
        width: 85,
        height: 85,
        borderRadius: 50,
        backgroundColor: 'blue',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    mainProfileImage: {
        width: 75,
        height: 75,
        borderRadius: 40,
    },
    chatBackground: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'blue',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 40,
    },
    chatImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    chatInfoContainer: {
        flex: 1,
    },
    chatUsername: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 18,
    },
    chatMessage: {
        fontSize: 16,
        color: 'white',
    },
    chatTimeAgo: {
        fontSize: 14,
        color: 'gray',
    },
});
