import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Button,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { Audio, Font } from 'expo';
import {
  Ionicons,
  Entypo,
  FontAwesome,
  Foundation,
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Octicons,
} from '@expo/vector-icons';

import AudioDemo from './components/AudioDemo';
import AudioRecording from './components/AudioRecording';
import VideoDemo from './components/VideoDemo';
import ImagePickerExample from './components/ImagePickerExample';
import MapViewDemo from './components/MapViewDemo';
import AccelerometerSensor from './components/AccelerometerSensor';
import BarcodeScannerExample from './components/BarcodeScannerExample';
import GyroscopeSensor from './components/GyroscopeSensor';
import NativeBaseDemo from './components/NativeBaseDemo';

import I18n from './I18n';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  async componentWillMount() {
   await I18n.initAsync();

   // For native-base
   await Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
 }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>{I18n.t('GettingStarted')}</Text>

        <View style={{flexDirection: 'row'}}>
          <Button
           title="EN"
           onPress={ () => {I18n.locale = 'en'; this.forceUpdate(); } }
         />
         <Button
          title="䌓"
          onPress={ () => {I18n.locale = 'zh'; this.forceUpdate(); } }
        />
        <Button
         title="简"
         onPress={ () => {I18n.locale = 'cn'; this.forceUpdate(); } }
       />


        </View>

        <View style={{flexDirection: 'row'}}>
          <Ionicons name="md-checkmark-circle" size={32} color="green" />
          <Entypo name="github-with-circle" size={32} color="red" />
          <FontAwesome name="info-circle" size={32} color="blue" />
          <Foundation name="bitcoin-circle" size={32} />
          <MaterialIcons name="account-circle" size={32} />
          <MaterialCommunityIcons name="account-circle" size={32} />
          <SimpleLineIcons name="arrow-up-circle" size={32} />
          <Octicons name="circle-slash" size={32} />
        </View>

        <Button
         title="NativeBaseDemo"
         onPress={ () => {navigate('NativeBaseDemo');} }
       />

        <Button
         title="Audio Demo"
         onPress={ () => {navigate('AudioDemo');} }
       />
       <Button
        title="Audio Recording"
        onPress={ () => {navigate('AudioRecording');} }
      />
      <Button
       title="Video Demo"
       onPress={ () => {navigate('VideoDemo');} }
      />
       <Button
        title="ImagePicker"
        onPress={ () => {navigate('ImagePickerExample');} }
      />
      <Button
       title="MapViewDemo"
       onPress={ () => {navigate('MapViewDemo');} }
     />
     <Button
      title="AccelerometerSensor"
      onPress={ () => {navigate('AccelerometerSensor');} }
    />
      <Button
       title="BarcodeScannerExample"
       onPress={ () => {navigate('BarcodeScannerExample');} }
     />
     <Button
      title="GyroscopeSensor"
      onPress={ () => {navigate('GyroscopeSensor');} }
    />
      </View>
    );
  }
};


const MainNavigator = StackNavigator({
    Home: {
      screen: Home,
    },
    AudioDemo: {
      screen: AudioDemo,
    },
    AudioRecording: {
      screen: AudioRecording,
    },
    VideoDemo: {
      screen: VideoDemo,
    },
    ImagePickerExample: {
      screen: ImagePickerExample,
    },
    MapViewDemo: {
      screen: MapViewDemo,
    },
    AccelerometerSensor: {
      screen: AccelerometerSensor,
    },
    BarcodeScannerExample: {
      screen: BarcodeScannerExample,
    },
    GyroscopeSensor: {
      screen: GyroscopeSensor,
    },
    NativeBaseDemo: {
      screen: NativeBaseDemo,
    },
  },
  {
    initialRouteName: 'Home',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  },
);


export default () => <MainNavigator />;
