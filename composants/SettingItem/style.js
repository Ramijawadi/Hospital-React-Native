/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import { PADDING } from '../../outils/constantes';

const styles = StyleSheet.create({

container:{

    backgroundColor:'white',
    marginTop:15,
    elevation:5,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal :PADDING.horizontal,
    paddingVertical:PADDING.vertical,
},
});

export default styles;