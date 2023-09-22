/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import { PADDING } from '../../outils/constantes';

export const styles = StyleSheet.create({

item:{

    marginRight :15,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:5 ,
    paddingHorizontal:PADDING.horizontal,
    paddingVertical:PADDING.vertical,
},

itemImage : {

    width:30,
    height:30,
    marginRight:5,
},
})