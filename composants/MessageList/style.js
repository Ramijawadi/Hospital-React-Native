/* eslint-disable prettier/prettier */
import { PADDING } from '../../outils/constantes';

/* eslint-disable prettier/prettier */
const { StyleSheet } = require('react-native');


const styles = StyleSheet.create({

messagesContainer : {

    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    elevation:5,
    marginTop:15,
    paddingHorizontal:PADDING.horizontal,
    paddingVertical:PADDING.vertical,
},

messageImg : {

    width:50,
    height:50,
    borderRadius:50/2,
    marginRight:15,
},

messageInfo : {

    flexDirection:'column',
    flex:1,
    paddingHorizontal:PADDING.horizontal,
},

date_name : {

    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:5,
},

name : {
fontWeight:'bold',
marginRight:5,

},


});

export  default styles 