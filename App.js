import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Button,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { Audio } from 'expo';

import AudioDemo from './components/AudioDemo';
import AudioRecording from './components/AudioRecording';
import VideoDemo from './components/VideoDemo';
import ImagePickerExample from './components/ImagePickerExample';
import MapViewDemo from './components/MapViewDemo';
import AccelerometerSensor from './components/AccelerometerSensor';
import BarcodeScannerExample from './components/BarcodeScannerExample';
import GyroscopeSensor from './components/GyroscopeSensor';

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
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>This is an API demo app for Expo</Text>
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
  },
  {
    initialRouteName: 'Home',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  },
);


export default () => <MainNavigator />;