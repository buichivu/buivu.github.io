/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#3498DB',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          margin: 10,
          flex: 1,
          borderRadius: 10,
        }}>
        <View
          style={{
            flex: 1,
            marginVertical: 20,
          }}>
          {/*HESDER*/}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Login
            </Text>
          </View>
          {/*BODY*/}
          <View
            style={{
              flex: 6,
            }}>
            <View style={{}}>
              <Text>Top</Text>
            </View>
            <View
              style={{
                marginVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Or Sing Up Using</Text>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                {/*fb*/}
                <TouchableOpacity
                  style={{
                    width: 35,
                    height: 35,
                    padding: 10,
                    backgroundColor: '#3b5998',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 5,
                  }}>
                  <Icon name="facebook-f" size={20} color={'white'} />
                </TouchableOpacity>
                {/*tw*/}
                <TouchableOpacity
                  style={{
                    width: 35,
                    height: 35,
                    padding: 10,
                    backgroundColor: '#1dcaff',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 5,
                  }}>
                  <Icon name="twitter" size={20} color={'white'} />
                </TouchableOpacity>
                {/*gg*/}
                <TouchableOpacity
                  style={{
                    width: 35,
                    height: 35,
                    padding: 10,
                    backgroundColor: '#3b5998',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="facebook-f" size={20} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/*FOOTER*/}
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Or Sing Up Using</Text>

            {/*Button Sing Up*/}
            <TouchableOpacity
              style={{
                padding: 20,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '500',
                }}>
                SING UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
