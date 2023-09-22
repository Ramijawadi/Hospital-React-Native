/* eslint-disable prettier/prettier */
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import MedecinSvg from './../../assets/medecin.svg';
import styles from './style';

const ActivityItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.scrollableListItem}>
      <MedecinSvg height={60} width={60} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );
};

export default ActivityItem;
