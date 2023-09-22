/* eslint-disable prettier/prettier */
import {View, Image, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './style';
import { settings } from '../../fakedata/FakeSettings';
import SettingItem from '../../composants/SettingItem';

const Settings = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Image
          source={require('./../../assets/medicin.png')}
          style={styles.image}
        />

        <View style={styles.userInfo}>
          <Text style={styles.userName}>Rami jawadi</Text>
          <Text style={styles.userEmail}>ramijawadi@gmail.com</Text>
          <Text>+216 55 555 555 </Text>
        </View>
      </View>

      {/* fin header */}

      <FlatList data={settings} keyExtractor={item =>item.id} showsVerticalScrollIndicator ={false}
       renderItem={({item}) => {

        return <SettingItem item={item} />;
       }}
      />
    </View>
  );
};

export default Settings;
