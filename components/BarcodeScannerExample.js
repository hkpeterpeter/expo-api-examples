import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Permissions, BarCodeScanner } from 'expo';

export default class BarcodeScannerExample extends Component {
  state = {
    hasCameraPermission: null,
    barcodeData: '',
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{flex: 1}}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
          <Text>{this.state.barcodeData}</Text>
        </View>
      );
    }
  }

  _handleBarCodeRead = (data) => {
    //alert(JSON.stringify(data));
    this.setState( {barcodeData: JSON.stringify(data) });
  }
}
