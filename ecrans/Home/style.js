/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { COLORS, PADDING } from '../../outils/constantes';

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

    title:{

        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,

    },


    title_spacebetween:{

        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
       flexDirection:'row',
       justifyContent:'space-between',
       marginTop:15,
    },

    titleBold:{
        fontWeight:'bold',
    },
 link:{
    color:COLORS.main,
 },
  

 doctorContainer : {
    marginTop : 15,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,

 },

 doctorCard :{

    flex:1,
    flexDirection :'row',
    backgroundColor:'white',
    elevation:5,
    padding:10,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    marginBottom:20,
    borderRadius:10,

 },

 doctorImg: {

    height:80,
    width:80,
    borderRadius:80/2,
    marginRight:15,
 },
 doctorInfo :{

    flexDirection:'column',
 },

 doctorName : {

    fontWeight:'bold',
    fontSize:16,
    marginBottom:15,

 },
 doctorSpec : {
backgroundColor:COLORS.main,
color:'white',
padding:5,
fontSize:14,
borderRadius:15,
paddingHorizontal: PADDING.horizontal,

 },
});

export default DashboardStyle;