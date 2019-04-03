/**
 * @format
 */

//Import a Library to help create a component
import { AppRegistry, View, YellowBox } from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//import App from './App';
import { name as appName } from './app.json';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

YellowBox.ignoreWarnings(['Remote debugger']);
//render device onto screen
AppRegistry.registerComponent(appName, () => App);
