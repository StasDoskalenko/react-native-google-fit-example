/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import GoogleFit from 'react-native-google-fit';


export default class googleFitExample extends Component {
    componentDidMount() {
        // const authorize = new Promise((resolve, reject) => {
        //         GoogleFit.authorize((err, result) => {
        //             if (err) {
        //                 reject(err);
        //                 return;
        //             }
        //             resolve(result);
        //         });
        //     })
        //
        // const options = {
        //     startDate: "2017-09-19T00:00:17.971Z",  // required ISO8601Timestamp
        //     endDate: (new Date()).toISOString()     // required ISO8601Timestamp
        // };
      GoogleFit.onAuthorize((response) => {
        console.log('response >>>', response)
        GoogleFit.startRecording((callback) => {
          console.log('callback >>>', callback)
        })
        const options = {
          startDate: "2017-09-19T00:00:17.971Z",  // required ISO8601Timestamp
          endDate: (new Date()).toISOString()     // required ISO8601Timestamp
        }
        GoogleFit.getDailyStepCountSamples(options, (res) => {
          console.log('res >>>', res)
        })
      })

      GoogleFit.onAuthorizeFailure((res) => {
        console.log('response fail >>> ', res)
      })

      GoogleFit.authorize()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('googleFitExample', () => googleFitExample);
