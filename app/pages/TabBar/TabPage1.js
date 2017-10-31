/**
 * Created by liao on 2017/10/31.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class TabPage1 extends Component <{}>  {

    render() {
        return (
            <View style={{paddingTop:50}}>
                <Icon name="ios-person" size={30} color="#4F8EF7" />
                <Text>111111111</Text>
            </View>
        );
    }
}