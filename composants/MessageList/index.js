/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const MessageList = ({item , navigation}) => {
  return (
    <TouchableOpacity style={styles.messagesContainer}  onPress={()=> navigation.navigate('MessageDetails' , {item})} >
      <Image
        style={styles.messageImg}
        source={{
          uri: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
        }}
      />
      <View style={styles.messageInfo}>
        <View style={styles.date_name}>
          <Text style={styles.name}>{item.fullname}</Text>
          <Text>{dayjs(item.date).fromNow(true)}</Text>
        </View>
        <Text>{item.last_message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageList;
