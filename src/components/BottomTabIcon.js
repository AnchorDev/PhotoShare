import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export const BottomTabIcon = ({ routeName, focused }) => {
    let iconSource;

    switch (routeName) {
        case 'Home':
            iconSource = focused
                ? require('./../img/bottomNav/home.png')
                : require('./../img/bottomNav/home.png');
            break;
        case 'Notification':
            iconSource = focused
                ? require('./../img/bottomNav/heart.png')
                : require('./../img/bottomNav/heart.png');
            break;
        case 'AddPost':
            iconSource = focused
                ? require('./../img/bottomNav/more.png')
                : require('./../img/bottomNav/more.png');
            break;
        case 'Search':
            iconSource = focused
                ? require('./../img/bottomNav/search.png')
                : require('./../img/bottomNav/search.png');
            break;
        case 'Profile':
            iconSource = focused
                ? require('./../img/bottomNav/profile.jpg')
                : require('./../img/bottomNav/profile.jpg');
            break;
        default:
            iconSource = require('./../img/bottomNav/home.png');
    }

    return (
        <View style={styles.iconContainer}>
            <Image
                source={iconSource}
                style={[styles.img, focused && styles.imgActive, routeName === 'Profile' && styles.profileImg]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 28,
        height: 28,
        tintColor: '#999999',
    },
    imgActive: {
        width: 40,
        height: 40,
        tintColor: 'white',
    },
    profileImg: {
        tintColor: null,
        borderRadius: 20,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
