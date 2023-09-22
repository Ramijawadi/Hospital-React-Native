/* eslint-disable prettier/prettier */
import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {conversation} from '../../fakedata/FakeConversation';
import Message from '../../composants/Message';
import MessageInput from '../../composants/MessageInput';

const MessageDetails = ({route, navigation}) => {
  const {item} = route.params;

  useEffect(() => {
    navigation.setOptions({title: item.fullname});
  });

  return (
    <View style={{flex:1}}>
      <FlatList
        data={conversation}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Message  item={item} />;
        }}/>

        <MessageInput />
    </View>
  );
};

export default MessageDetails;
