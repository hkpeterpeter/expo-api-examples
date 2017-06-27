import React, { Component } from 'react';
import { Button, Image, View, Text } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

export default class ImagePickerExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      video: null,
      cameraPermission: false,
    };

    this._pickImage = this._pickImage.bind(this);
    this._launchCamera = this._launchCamera.bind(this);

  }

  render() {
    let { image, video } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        <Button
          title="Launch Camera"
          onPress={this._launchCamera}
        />
        
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

        <Text>{video}</Text>
      </View>
    );
  }

  async askForPermissions() {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      cameraPermission: status === 'granted',
    });
  };



  async _launchCamera() {
    await this.askForPermissions();
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }

  async _pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}
