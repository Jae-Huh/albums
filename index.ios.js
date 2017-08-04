import React from 'react'
import { AppRegistry, View } from 'react-native'

import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

const App = () => (
  // Adding flex: 1 in the Root container of the app allows <ScrollView> in AlbumList.js to scroll all the way down instead of stopping before it reaches the bottom of the content.
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
)

AppRegistry.registerComponent('albums', () => App)
