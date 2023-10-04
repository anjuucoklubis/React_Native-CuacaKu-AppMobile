import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function WeatherView() {
  const [api, setApi] = useState([]);
  const [city, setCity] = useState(' ');

  const fetchApi = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=20692a3e8aa2fdff6fb60dbc8432b97f&units=metric`,
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        setApi(data);
      });
  };

  console.log(api.name);

  const Temperature = () => {
    const temperature = api.main && api.main.temp;
    return (
      <View>
        <Text
          style={{
            bottom: 40,
            fontSize: 30,
            color: 'white',
            fontFamily: 'FiraSans-Medium',
          }}>
          {temperature !== undefined ? `${temperature}°C` : ''}
        </Text>
      </View>
    );
  };

  const Vieww = () => {
    const notFound = api.cod === '404';
    if (!notFound) {
      return (
        <ScrollView>
          <View
            style={{
              padding: 20,
            }}>
            <Text
              style={{
                marginLeft: 20,
                color: 'white',
                fontSize: 30,
                fontFamily: 'FiraSans-MediumItalic',
              }}>
              {api.name}
            </Text>
            <View>
              <View
                style={{
                  position: 'relative',
                }}>
                <Image
                  source={require('../../../assets/Weather/Rectangle.png')}
                  style={{
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: 80,
                    left: 20,
                  }}>
                  <Temperature />
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontSize: 23,
                        color: 'white',
                        fontFamily: 'FiraSans-Medium',
                      }}>
                      {api.name}
                      {', '}
                      {api.sys && api.sys.country ? api.sys.country : ''}
                    </Text>

                    <Text
                      style={{
                        fontSize: 23,
                        color: 'white',
                        fontFamily: 'FiraSans-Medium',
                        marginLeft: 30,
                      }}>
                      {api.weather &&
                      api.weather[0] &&
                      api.weather[0].description
                        ? api.weather[0].description
                        : ''}
                    </Text>
                  </View>
                </View>
                <Image
                  source={require('../../../assets/Weather/city.png')}
                  style={{
                    width: 80,
                    height: 80,
                    zIndex: 1,
                    alignSelf: 'flex-end',
                    left: 30,
                    top: -170,
                  }}
                />
              </View>
            </View>

            {/* Kedua */}
            <Text
              style={{
                marginLeft: 20,
                color: 'white',
                fontSize: 30,
                fontFamily: 'FiraSans-MediumItalic',
              }}>
              Coordinat
            </Text>
            <View style={{}}>
              <View
                style={{
                  position: 'relative',
                }}>
                <Image
                  source={require('../../../assets/Weather/Rectangle.png')}
                  style={{
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: 90,
                    left: 20,
                    flexDirection: 'row',
                    gap: 30,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: 'white',
                      fontFamily: 'FiraSans-Medium',
                    }}>
                    lon
                    {': '} {api.coord && api.coord.lon ? api.coord.lon : ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 25,
                      color: 'white',
                      fontFamily: 'FiraSans-Medium',
                    }}>
                    lat
                    {': '} {api.coord && api.coord.lat ? api.coord.lat : ''}
                  </Text>
                </View>
                <Image
                  source={require('../../../assets/Weather/coordinate.png')}
                  style={{
                    width: 70,
                    height: 70,
                    zIndex: 1,
                    alignSelf: 'flex-end',
                    right: 0,
                    top: -180,
                  }}
                />
              </View>
            </View>

            {/* Ketiga */}
            <Text
              style={{
                marginLeft: 20,
                color: 'white',
                fontSize: 30,
                fontFamily: 'FiraSans-MediumItalic',
              }}>
              Cuaca
            </Text>
            <View>
              <View
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  position: 'relative',
                }}>
                <Image
                  source={require('../../../assets/Weather/Rectangle.png')}
                  style={{
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: 'white',
                      fontFamily: 'FiraSans-Medium',
                    }}>
                    Cuaca{': '}{' '}
                    {api.weather && api.weather[0] && api.weather[0].main
                      ? api.weather[0].main
                      : ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      color: 'white',
                      fontFamily: 'FiraSans-Medium',
                    }}>
                    Deskripsi{': '}{' '}
                    {api.weather && api.weather[0] && api.weather[0].description
                      ? api.weather[0].description
                      : ''}
                  </Text>
                </View>
                <Image
                  source={require('../../../assets/Weather/cuaca.png')}
                  style={{
                    width: 70,
                    height: 70,
                    zIndex: 1,
                    alignSelf: 'flex-end',
                    left: 20,
                    top: -170,
                  }}
                />
              </View>
            </View>

            {/* Keempat */}
            <Text
              style={{
                marginLeft: 20,
                color: 'white',
                fontSize: 30,
                fontFamily: 'FiraSans-MediumItalic',
              }}>
              Angin
            </Text>
            <View>
              <View
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  position: 'relative',
                }}>
                <Image
                  source={require('../../../assets/Weather/Rectangle.png')}
                  style={{
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: 'white',
                      fontFamily: 'FiraSans-Medium',
                    }}>
                    Speed{': '}{' '}
                    {api.wind && api.wind.speed ? api.wind.speed : ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 25,
                      color: 'white',
                      fontFamily: 'FiraSans-Medium',
                    }}>
                    deg{': '} {api.wind && api.wind.deg ? api.wind.deg : ''}
                  </Text>
                </View>
                <Image
                  source={require('../../../assets/Weather/angin.png')}
                  style={{
                    width: 90,
                    height: 90,
                    zIndex: 1,
                    alignSelf: 'flex-end',
                    left: 23,
                    top: -170,
                  }}
                />
              </View>
            </View>

            {/* kelima */}
            <Text
              style={{
                marginLeft: 20,
                color: 'white',
                fontSize: 30,
                fontFamily: 'FiraSans-MediumItalic',
              }}>
              Detail Cuaca
            </Text>
            <View>
              <View
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  position: 'relative',
                }}>
                <Image
                  source={require('../../../assets/Weather/Rectangle.png')}
                  style={{
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 50,
                    position: 'absolute',
                    top: 55,
                  }}>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        feels_like{': '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        {api.main && api.main.feels_like
                          ? api.main.feels_like
                          : ''}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        temp_min{': '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        {api.main && api.main.temp_min ? api.main.temp_min : ''}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        temp_max{': '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        {api.main && api.main.temp_max ? api.main.temp_max : ''}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        pressure{': '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        {api.main && api.main.pressure ? api.main.pressure : ''}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        humidity{': '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        {api.main && api.main.humidity ? api.main.humidity : ''}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        sea_level{': '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        {api.main && api.main.sea_level
                          ? api.main.sea_level
                          : ''}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        grnd_level{': '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'white',
                          fontFamily: 'FiraSans-Medium',
                        }}>
                        {api.main && api.main.grnd_level
                          ? api.main.grnd_level
                          : ''}
                      </Text>
                    </View>
                  </View>
                </View>
                <Image
                  source={require('../../../assets/Weather/Detail.png')}
                  style={{
                    width: 90,
                    height: 90,
                    zIndex: 1,
                    alignSelf: 'flex-end',
                    left: 15,
                    top: -200,
                  }}
                />
              </View>
            </View>

            {/* keenam */}
            <Text
              style={{
                marginLeft: 20,
                color: 'white',
                fontSize: 30,
                fontFamily: 'FiraSans-MediumItalic',
                zIndex: 1,
              }}>
              Add's Info{' '}
            </Text>
            <View
              style={{
                marginBottom: 200,
              }}>
              <View
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  position: 'relative',
                }}>
                <Image
                  source={require('../../../assets/Weather/Rectangle.png')}
                  style={{
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 23,
                      color: 'white',
                      fontFamily: 'FiraSans-Medium',
                    }}>
                    Sunrise{': '}{' '}
                    {api.sys && api.sys.sunrise ? api.sys.sunrise : ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 23,
                      color: 'white',
                      fontFamily: 'FiraSans-Medium',
                    }}>
                    sunset{': '}{' '}
                    {api.sys && api.sys.sunset ? api.sys.sunset : ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 23,
                      color: 'white',
                      fontFamily: 'FiraSans-Medium',
                    }}>
                    timezone{': '} {api.timezone ? api.timezone : ''}
                    {api.timezone}
                  </Text>
                </View>
                <Image
                  source={require('../../../assets/Weather/tambahan.png')}
                  style={{
                    width: 70,
                    height: 70,
                    zIndex: 1,
                    alignSelf: 'flex-end',
                    left: 15,
                    top: -180,
                  }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 20,
                  color: 'white',
                  fontSize: 30,
                  fontFamily: 'FiraSans-MediumItalic',

                  alignSelf: 'center',
                }}>
                = Develop by Anju =
              </Text>
            </View>
          </View>
        </ScrollView>
      );
    }
  };

  const NotView = () => {
    const notFound = api.cod === '404';
    if (notFound) {
      return (
        <View
          style={{
            padding: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontFamily: 'FiraSans-MediumItalic',
              alignSelf: 'center',
            }}>
            Daerah tidak ditemukan
          </Text>
        </View>
      );
    }
  };

  useEffect(() => {
    if (city) {
      fetchApi();
    }
  }, [city]);

  console.log(api);
  console.log(city);
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/Weather/Background.png')}
        style={{
          flex: 1,
          width: screenWidth,
          height: screenHeight,
        }}
      />
      <View
        style={{
          padding: 20,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            fontFamily: 'FiraSans-Medium',
          }}>
          Weather
        </Text>
        <View>
          <Image
            source={require('../../../assets/Weather/Search.png')}
            style={{
              zIndex: 1,
              width: 23,
              height: 23,
              top: 35,
              left: 25,
            }}
          />
          <TextInput
            onChangeText={text => setCity(text)}
            placeholder={'Cari daerah...'}
            placeholderTextColor="white"
            style={{
              fontSize: 20,
              backgroundColor: 'gray',
              height: 50,
              width: 330,
              borderRadius: 20,
              alignSelf: 'center',
              paddingLeft: 60,
              color: 'white',
              fontFamily: 'FiraSans-Medium',
            }}
          />
        </View>
      </View>
      <Vieww />
      <NotView />
    </View>
  );
}
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
