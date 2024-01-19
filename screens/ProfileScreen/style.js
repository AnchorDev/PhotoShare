import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#101010',
    },
    profileText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    profileBackground: {
        width: 68,
        height: 68,
        borderRadius: 35,
        backgroundColor: 'blue',
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    profileName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
    },
    locationText: {
        color: 'white',
        fontSize: 16,
    },
    descriptionText: {
        color: 'gray',
        fontSize: 14,
        marginTop: 10,
    },
    statsContainer: {
        flexDirection: 'row',
    },
    statItem: {
        marginRight: 20,
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        height: 26,
        width: 60,
        textAlign: "center",
        color: 'white',
    },
    statLabel: {
        fontSize: 14,
        color: 'white',
    },
    optionsButton: {
        position: 'absolute',
        top: 38,
        right: 10,
        padding: 10,
    },
    optionsIcon: {
        width: 40,
        height: 40,
        tintColor: 'white',
    },
    userName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
    },
    location: {
        color: 'white',
        fontSize: 14,
        marginTop: 2,
    },
    description: {
        color: 'gray',
        fontSize: 12,
        marginTop: 5,
    },
    userInfo: {
        flexDirection: 'column',
        flex: 1,
    },
    userPhotosContainer: {
        flexDirection: "column",
        flex: 1,
        paddingBottom: 80,
        marginTop: -50,
    },
    userPhotosRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    userPhotos: {
        width: 120,
        height: 130,
        margin: 1,
    },
});
