import {StyleSheet, Image} from "react-native";

export const BottomTabIcon = ({ routeName, focused }) => {

    switch (routeName) {
        case 'Home':
            if(focused) {
                return <Image
                    style={styles.imgActive}
                    source={require('./../img/bottomNav/home_active.png')}
                />
            }else{
                return <Image
                    style={styles.img}
                    source={require('./../img/bottomNav/home_inactive.png')}
                />
            }
        case 'History':
            if(focused) {
                return <Image
                    style={styles.imgActive}
                    source={require('./../img/bottomNav/history_active.png')}
                />
            }else{
                return <Image
                    style={styles.img}
                    source={require('./../img/bottomNav/history_inactive.png')}
                />
            }
        case 'Profile':
            if(focused) {
                return <Image
                    style={styles.imgActive}
                    source={require('./../img/bottomNav/profile_active.png')}
                />
            }else{
                return <Image
                    style={styles.img}
                    source={require('./../img/bottomNav/profile_inactive.png')}
                />
            }
        default:
            return <Image
                style={styles.imgActive}
                source={require('./../img/bottomNav/home_active.png')}
            />
    }

}

const styles = StyleSheet.create({
    img:{
        width: 28,
        height: 28
    },
    imgActive: {
        width: 40,
        height: 40
    }
})
