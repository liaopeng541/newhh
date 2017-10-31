/**
 * Created by liao on 2017/5/12.
 */
'use strict';
import {Dimensions, Platform} from 'react-native';
import px2dp from '../lib/px2dp';
import Device from 'react-native-device-info';
module.exports = {
    fillWidth: Dimensions.get('window').width,
    fillHeight: Dimensions.get('window').height,
    deviceToken:Device.getUniqueID(),
    TopColor: '#cc0033',//主题色彩  备选：e83e41
    TopBar: {
        height: 64,
    },
    BBar:{
        height:px2dp(57)
    }
};