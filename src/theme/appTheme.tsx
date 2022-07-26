import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 20,
        marginBottom: 10,
    },
    globalMargin: {
        marginHorizontal: 20,
    },

    primaryButton: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 10,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    row: {
        flexDirection: 'row',
    },
    spaceAround: {
        justifyContent: 'space-around',
    },

    textWhite: {
        color: 'white',
    },
});
