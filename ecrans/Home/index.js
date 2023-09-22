/* eslint-disable prettier/prettier */
import {Text, ScrollView, Image, View, FlatList , TouchableOpacity} from 'react-native';
import React from 'react';
import DashboardStyle from './style';
import {activities} from '../../fakedata/FakaActivity';
import ActivityItem from '../../composants/Activities';
import {Symptomes} from '../../fakedata/FakeSymptome';
import SymptomItem from '../../composants/SymptomeItem';
import { doctors } from '../../fakedata/FakeDoctors';

const Home = () => {
  return (
    <ScrollView>
      <View style={DashboardStyle.header}>
        <Text style={DashboardStyle.userName}>Clinique</Text>
        <Image
          source={require('./../../assets/clinique.png')}
          style={DashboardStyle.userImg}
        />
      </View>
      <FlatList
        horizontal={true}
        data={activities}
        style={DashboardStyle.scrollableList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ActivityItem item={item} />;
        }}
      />

      {/* List symptomes */}

      <View style={DashboardStyle.title}>
        <Text style={DashboardStyle.titleBold}>
          {' '}
          Quel symptomes avez vous ?
        </Text>
      </View>
      <FlatList
        horizontal={true}
        data={Symptomes}
        style={DashboardStyle.scrollableList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <SymptomItem item={item} />;
        }}
      />

      {/* fin liste symptomes */}

      {/* Docteurs List */}

      <View style={DashboardStyle.title_spacebetween}>
        <Text style={DashboardStyle.titleBold}>Nos Docteurs</Text>
      <TouchableOpacity>
        <Text  style={DashboardStyle.link}>Afficher tous</Text>
        </TouchableOpacity>
      </View>

<View style={DashboardStyle.doctorContainer}>

{
doctors.map((doctor , index)=> {

  return (

<TouchableOpacity key={doctor.id} style={DashboardStyle.doctorCard}>

<Image  source={{uri:`${doctor.img}`}} style={DashboardStyle.doctorImg} />
<View  style={DashboardStyle.doctorInfo}>
<Text   style={DashboardStyle.doctorName}>{doctor.fullname}</Text>
<Text  style={DashboardStyle.doctorSpec}>{doctor.speciality}</Text>
</View>
</TouchableOpacity>

  );
})
}
</View>

    </ScrollView>
  );
};

export default Home;
