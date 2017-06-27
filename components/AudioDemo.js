import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

import { Audio } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const soundFile = require('../assets/sorry.mp3');

export default class AudioDemo extends Component {

  constructor(props) {
    super(props);

    this.sound = null;
    this.playMusic = this.playMusic.bind(this);
    this.stopMusic = this.stopMusic.bind(this);
    this.pauseMusic = this.pauseMusic.bind(this);
  }
  static navigationOptions = {
    title: 'AudioDemo',
  };

  componentWillUnmount() {
    this.stopMusic();
 }

 async stopMusic () {
    if ( this.sound ) {
      await this.sound.stopAsync();

    }
  }

  async pauseMusic() {
    if ( this.sound ) {
      await this.sound.pauseAsync();
    }
  }

  async playMusic() {
      await Audio.setIsEnabledAsync(true);

      if ( this.sound ) {
        await this.sound.playAsync();
      }
      else {
        const sound = new Audio.Sound();
        await sound.loadAsync(soundFile,  { shouldPlay: true });
        await sound.playAsync();
        this.sound = sound;
      }
 };

  render() {
    return (
        <View style={styles.container}>
          <Button title="Play" onPress={this.playMusic} />
          <Button title="Pause" onPress={this.pauseMusic} />
           <Button title="Stop" onPress={this.stopMusic} />
        </View>
    );
  }
}
