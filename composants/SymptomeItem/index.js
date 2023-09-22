/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { styles } from './style';

const SymptomItem = ({ item }) => {
    return (
        <TouchableOpacity >
            <View style={styles.item}>
                <Image style={styles.itemImage} source={require(`../../assets/img.jpg`)} />
                <Text>{item.libelle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SymptomItem