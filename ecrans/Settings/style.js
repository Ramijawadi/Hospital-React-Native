/* eslint-disable prettier/prettier */
import { PADDING } from "../../outils/constantes";

/* eslint-disable prettier/prettier */
const { StyleSheet } = require('react-native');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    header: {
        backgroundColor: 'white',
        elevation: 5,
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
    },

    userInfo: {

        marginLeft: 15,
    },
    userName: {

        fontWeight: 'bold',
        marginBottom: 5,
    },

    userEmail: {

        marginBottom: 5,
    },

});
export default styles;