/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
            <View
              style={{
                margin: 30,
              }}>
              {/*Username*/}
              <View
                style={{
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color: 'black',
                  }}>
                  UserName
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 20,
                    }}>
                    <Icon name="user" size={15} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <TextInput style={{}} placeholder={'type your username'} />
                  </View>
                </View>
              </View>

              {/*passWord*/}
              <View>
                <Text
                  style={{
                    color: 'black',
                  }}>
                  PassWord
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 20,
                    }}>
                    <Icon name="lock" size={15} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <TextInput
                      secureTextEntry={true}
                      placeholder={'type your username'}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginTop: 10,
                  alignItems: 'flex-end',
                }}>
                <Text>Forgot password</Text>
              </View>

              {/*Login button*/}
              <View
                style={{
                  marginVertical: 20,
                }}>
                <TouchableOpacity activeOpacity={0.5}>
                  <LinearGradient
                    style={{
                      padding: 10,
                      borderRadius: 50,
                      width: '100%',
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                    colors={['#AED6F1', '#3498DB']}
                    useAngle={true}
                    angle={45}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      LOGIN
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                marginVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                }}>
                Or Sing Up Using
              </Text>

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
                    backgroundColor: '#EA4335',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="google" size={15} color={'white'} />
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
