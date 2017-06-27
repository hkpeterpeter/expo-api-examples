import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

import { Audio, Permissions } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class AudioRecording extends Component {

  constructor(props) {
    super(props);

    this.recording = null;

    this.state = {
      haveRecordingPermissions: false,
      debug: '',
    };

    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
  }

  componentDidMount() {
   Audio.setAudioModeAsync({
     allowsRecordingIOS: true,
     interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
     playsInSilentModeIOS: true,
     shouldDuckAndroid: true,
     interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
   });

   this.askForPermissions();
 }


  async askForPermissions() {
    const {status} = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    this.setState({
      haveRecordingPermissions: status === 'granted',
    });
  };

  async startRecording() {

    if ( this.state.haveRecordingPermissions ) {
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync();
      await recording.startAsync();

      this.recording = recording;
      this.setState( {debug: 'recording..'});
    }
 };

 async stopRecording() {

   if ( this.recording ) {
      await this.recording.stopAndUnloadAsync();
      this.setState( { debug: `uri: ${this.recording.getURI()}` } );

      const ret = await this.recording.createNewLoadedSound({ shouldPlay: true });
      await ret.sound.playAsync();
   }
 }

  render() {
    return (
        <View style={styles.container}>
            <Button title="Start" onPress={this.startRecording} />
            <Button title="Stop" onPress={this.stopRecording} />

            <Text>{this.state.haveRecordingPermissions ? 'Yes' : 'No'}</Text>
            <Text>{this.state.debug} </Text>
        </View>
    );
  }
}
