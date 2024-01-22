import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#101010',
    },
    notificationsText: {
        position: 'absolute',
        top: 78,
        left: 20,
        color: 'white',
        zIndex: 1,
    },
    textStyles: {
        fontSize: 25,
        color: 'white',
    },
    buttonsContainer: {
        position: 'absolute',
        top: 60,
        right: 20,
    },
    ellipseButton: {
        width: 120,
        height: 30,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    activeEllipseButton: {
        backgroundColor: '#0186fc',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
    todaySection: {
        position: 'absolute',
        top: 160,
        left: 10, 
        width: '100%',
    },
    todayHeaderText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    todayItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%',
    },
    todayProfileBackground: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#0186fc',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    todayInfoContainer: {
        flex: 1,
    },
    todayUsername: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 12,
    },
    todayAction: {
        fontSize: 10,
        color: 'white',
    },
    todayTimeAgo: {
        color: 'gray',
    },
    todayActionButton: {
        width: 120,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
    },
    todayActionButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    todayActionButtonFollowed: {
        backgroundColor: '#333',
        borderColor: 'gray',
    },
    todayActionButtonTextFollowed: {
        color: 'white',
        fontWeight: 'bold',
    },
    todayActionButtonStart: {
        backgroundColor: '#0186fc',
        borderColor: 'white',
    },
    todayActionButtonTextStart: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 11,
    },
});
