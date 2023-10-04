import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';

export default function Time() {
  async function getData() {
    try {
      const response = await fetch(
        'https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jakarta',
      );
      const actualData = await response.json();
      setTime(actualData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const [time, setTime] = useState({timeZone: ''});

  console.log(time);

  const [date, setDate] = useState(dayjs());
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <View>
      <Text
        style={{
          bottom: 300,
          fontSize: 30,
          color: '#C3FFFE',
          position: 'absolute',
          left: 0,
          right: 0,
          textAlign: 'center',
          zIndex: 1,
          fontFamily: 'FiraSans-Medium',
        }}>
        {date.format('dddd')}
      </Text>
      <Text
        style={{
          bottom: 270,
          fontSize: 20,
          fontWeight: '500',
          color: '#C3FFFE',
          position: 'absolute',
          left: 0,
          right: 0,
          textAlign: 'center',
          fontFamily: 'FiraSans-Medium',
        }}>
        {date.format('DD MMMM')} {time.year}
      </Text>
      <Text
        style={{
          bottom: 150,
          fontSize: 82,
          color: '#C3FFFE',
          position: 'absolute',
          left: 0,
          right: 0,
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'FiraSans-Medium',
        }}>
        {date.format('hh:mm')}
      </Text>

      <Text
        style={{
          bottom: 100,
          fontSize: 20,
          color: '#C3FFFE',
          position: 'absolute',
          left: 0,
          right: 0,
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'FiraSans-MediumItalic',
        }}>
        {time.timeZone}
      </Text>
    </View>
  );
}
