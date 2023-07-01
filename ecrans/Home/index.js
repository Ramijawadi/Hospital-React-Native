/* eslint-disable prettier/prettier */
import { Text, ScrollView, Image, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import DashboardStyle from './style'
import { activities } from '../../fakedata/FakaActivity';


const Home = () => {
  return (
   
    <ScrollView>
    <View style={DashboardStyle.header}>
      <Text style={DashboardStyle.userName}>Clinique</Text>
      <Image source={require('./../../assets/clinique.png')} style={DashboardStyle.userImg} />
    </View>
<FlatList
horizontal={true} 
data={activities}
style={DashboardStyle.scrollableList}
showsHorizontalScrollIndicator={false}
keyExtractor={item => item.id}
renderItem={({item})=>{

return (
<TouchableOpacity style={DashboardStyle.scrollableListItem}>
  <Text style={DashboardStyle.name} >{item.name}</Text>
  <Text style={DashboardStyle.description} >{item.description}</Text>
</TouchableOpacity>
)
}}

/>

  </ScrollView>
  );
};

export default Home