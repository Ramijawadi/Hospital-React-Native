/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { PADDING } from '../../outils/constantes';

const DashboardStyle = StyleSheet.create({

    header: {

        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white'
    },

    userImg: {

        height: 50,
        width: 50,
        borderRadius: 50 / 2,
    },
    userName: {

        fontSize: 16,

    },
    //styling flat list
    scrollableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,


    },
    scrollableListItem: {
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginRight: 15,
        backgroundColor: 'white',
        elevation: 3,
    },

    name: {
      fontWeight:'bold',
        fontSize: 16,
    },
    description: {

        marginTop: 3,
        fontSize: 15,
    }

});

export default DashboardStyle;