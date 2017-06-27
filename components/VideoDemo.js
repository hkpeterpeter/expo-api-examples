import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
} from 'react-native';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

import { Video } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoContainer: {
    height: VIDEO_CONTAINER_HEIGHT,
  },
  video: {
    maxWidth: DEVICE_WIDTH,
  },
});

const videoFile = require('../assets/bunny.mp4');
const posterSourceFile = require('../assets/bunny.png');
const VIDEO_CONTAINER_HEIGHT = DEVICE_HEIGHT * 2.0 / 5.0;

export default class VideoDemo extends Component {

  constructor(props) {
    super(props);

    this.state = {

      useNativeControls: true,
      videoWidth: DEVICE_WIDTH,
      videoHeight: VIDEO_CONTAINER_HEIGHT,
    };

     this.playbackInstance = null;
  }

  _mountVideo = component => {
    this._video = component;
    this._loadNewPlaybackInstance(false);
  };

  async _loadNewPlaybackInstance(playing) {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setCallback(null);
      this.playbackInstance = null;
    }

     const source = videoFile;

     const initialStatus = {
      shouldPlay: playing,
    };

    //this._video.setCallback(this._callback);
    await this._video.loadAsync(source, initialStatus);
    this.playbackInstance = this._video;
    const status = await this._video.getStatusAsync();

  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.videoContainer}>
            <Video
              ref={this._mountVideo}
              style={[
                styles.video,
                {
                  width: this.state.videoWidth,
                  height: this.state.videoHeight,
                },
              ]}
              resizeMode={Video.RESIZE_MODE_CONTAIN}
              callback={this._callback}
              posterSource={posterSourceFile}

              useNativeControls={this.state.useNativeControls}
            />
            <Text>Video demo...</Text>
          </View>
        </View>
    );
  }


}
