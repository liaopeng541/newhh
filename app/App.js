/**
 * Created by liao on 2017/10/31.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    StatusBar,
    View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import MyApp from "./components/RootNavigator"
import Orientation from 'react-native-orientation';
export default class App extends Component<{}> {
    componentDidMount() {
        SplashScreen.hide();
        Orientation.lockToPortrait();//禁止横屏
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="rgba(0,0,0,0)"
                    translucent={true}
                />
                <MyApp/>
            </View>

        );
    }
}