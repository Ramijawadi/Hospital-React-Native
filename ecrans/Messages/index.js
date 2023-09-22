/* eslint-disable prettier/prettier */
import {FlatList} from 'react-native';
import React from 'react';
import {messages} from '../../fakedata/FakeMessages';
import MessageList from '../../composants/MessageList';
import styles from './style';

const Messages = ({navigation}) => {
  return (
    <FlatList
      data={messages}
      style={styles.root}
      showsVerticalScrollIndicator = {false}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return <MessageList item={item} navigation={navigation}/>;
      }}
    />
  );
};

export default Messages;
