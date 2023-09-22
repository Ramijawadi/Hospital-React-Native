/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollableListItem: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginRight: 15,
    backgroundColor: 'white',
    elevation: 3,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    marginTop: 3,
    fontSize: 15,
  },
});

export default styles;
