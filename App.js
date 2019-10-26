import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from './Camera';
import * as Permissions from 'expo-permissions';

export default function App() {
  getCameraAsync()
  return (
    <Camera />
  );
}

async function getCameraAsync() {
  const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA)
  if (status != 'granted') {
    throw new Error('Ahhh');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});