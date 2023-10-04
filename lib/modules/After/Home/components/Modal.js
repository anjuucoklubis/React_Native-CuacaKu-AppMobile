import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {format} from 'date-fns';

export default function Modal() {
  const [dataA, setData] = useState(['']);
  const fetchApi = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=-6.2146&lon=106.8451&appid={YOUR API KEY}&units=metric`,
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  };
  console.log(
    '===============================================================================',
  );

  const Waktu1 = () => {
    if (dataA && dataA.list && dataA.list[3] && dataA.list[3].dt_txt) {
      let dt_txt = dataA.list[3].dt_txt;
      let date = new Date(dt_txt);
      let formattedOclock = format(date, 'H a');
      return formattedOclock;
    } else {
      return 'Data cuaca tidak tersedia.';
    }
  };

  const Datee1 = () => {
    if (dataA && dataA.list && dataA.list[3] && dataA.list[3].dt_txt) {
      let dt_txt = dataA.list[3].dt_txt;
      let date = new Date(dt_txt);
      let monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      let formattedDate = date.getDate() + ' ' + monthNames[date.getMonth()];
      return formattedDate;
    } else {
      return 'Data cuaca tidak tersedia.';
    }
  };

  const Temperature1 = () => {
    if (
      dataA &&
      dataA.list &&
      dataA.list[3] &&
      dataA.list[3].main &&
      dataA.list[3].main.temp
    ) {
      let temp = dataA.list[3].main.temp;
      return temp;
    } else {
      return 'Data cuaca tidak tersedia.';
    }
  };

  const Waktu2 = () => {
    if (dataA && dataA.list && dataA.list[4] && dataA.list[4].dt_txt) {
      let dt_txt = dataA.list[4].dt_txt;
      let date = new Date(dt_txt);
      let formattedOclock = format(date, 'H a');
      return formattedOclock;
    } else {
      return 'Data cuaca tidak tersedia.';
    }
  };

  const Datee2 = () => {
    if (dataA && dataA.list && dataA.list[4] && dataA.list[4].dt_txt) {
      let dt_txt = dataA.list[4].dt_txt;
      let date = new Date(dt_txt);
      let monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      let formattedDate = date.getDate() + ' ' + monthNames[date.getMonth()];
      return formattedDate;
    } else {
      return 'Data cuaca tidak tersedia.';
    }
  };

  const Temperature2 = () => {
    if (
      dataA &&
      dataA.list &&
      dataA.list[4] &&
      dataA.list[4].main &&
      dataA.list[4].main.temp
    ) {
      let temp = dataA.list[4].main.temp;
      return temp;
    } else {
      return 'Data cuaca tidak tersedia.';
    }
  };

  const Waktu3 = () => {
    if (dataA && dataA.list && dataA.list[5] && dataA.list[5].dt_txt) {
      let dt_txt = dataA.list[5].dt_txt;
      let date = new Date(dt_txt);
      let formattedOclock = format(date, 'H a');
      return formattedOclock;
    } else {
      return 'Data cuaca tidak tersedia.';
    }
  };

  const Datee3 = () => {
    if (dataA && dataA.list && dataA.list[5] && dataA.list[5].dt_txt) {
      let dt_txt = dataA.list[5].dt_txt;
      let date = new Date(dt_txt);
      let monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      let formattedDate = date.getDate() + ' ' + monthNames[date.getMonth()];
      return formattedDate;
    } else {
      return 'Data cuaca tidak tersedia.';
    }
  };

  const Temperature3 = () => {
    if (
      dataA &&
      dataA.list &&
      dataA.list[5] &&
      dataA.list[5].main &&
      dataA.list[5].main.temp
    ) {
      let temp = dataA.list[5].main.temp;
      return temp;
    } else {
      return 'Data cuaca tidak tersedia.';
    }
  };

  const Waktu4 = () => {
    if (dataA && dataA.list && dataA.list[6] && dataA.list[6].dt_txt) {
      let dt_txt = dataA.list[6].dt_txt;
      let date = new Date(dt_txt);
      let formattedOclock = format(date, 'H a');
      return formattedOclock;
    } else {
      return 'Data cuaca tidak tersedia.';
    }
  };

  const Datee4 = () => {
    if (dataA && dataA.list && dataA.list[6] && dataA.list[6].dt_txt) {
      let dt_txt = dataA.list[6].dt_txt;
      let date = new Date(dt_txt);
      let monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      let formattedDate = date.getDate() + ' ' + monthNames[date.getMonth()];
      return formattedDate;
    } else {
      return 'Data cuaca tidak tersedia.';
    }
  };

  const Temperature4 = () => {
    if (
      dataA &&
      dataA.list &&
      dataA.list[6] &&
      dataA.list[6].main &&
      dataA.list[6].main.temp
    ) {
      let temp = dataA.list[6].main.temp;
      return temp;
    } else {
      return 'Data cuaca tidak tersedia.';
    }
  };

  useEffect(() => {
    fetchApi(setData);
  }, []);
  return (
    <View
      style={{
        gap: 80,
        flexDirection: 'row',
        marginLeft: 60,
        marginRight: 60,
        justifyContent: 'center',
      }}>
      <View>
        <Image
          source={require('../../../../assets/Home/Modal/CardModal.png')}
          style={{
            bottom: 400,
            zIndex: 1,
            alignSelf: 'center',
            position: 'absolute',
          }}
        />

        <Text
          style={{
            bottom: 520,
            color: 'white',
            fontSize: 18,
            position: 'absolute',
            alignSelf: 'center',
            right: -21,
          }}>
          {Waktu1()}{' '}
        </Text>
        <Text
          style={{
            bottom: 470,
            color: 'white',
            fontSize: 17,
            position: 'absolute',
            alignSelf: 'center',
            right: -25,
          }}>
          {Datee1()}{' '}
        </Text>

        <Text
          style={{
            bottom: 430,
            color: 'white',
            fontSize: 18,
            position: 'absolute',
            alignSelf: 'center',
          }}>
          {Temperature1()}°{' '}
        </Text>
      </View>

      <View>
        <Image
          source={require('../../../../assets/Home/Modal/CardModal.png')}
          style={{
            bottom: 400,
            zIndex: 1,
            alignSelf: 'center',
            position: 'absolute',
          }}
        />

        <Text
          style={{
            bottom: 520,
            color: 'white',
            fontSize: 18,
            position: 'absolute',
            alignSelf: 'center',
            right: -21,
          }}>
          {Waktu2()}{' '}
        </Text>
        <Text
          style={{
            bottom: 470,
            color: 'white',
            fontSize: 17,
            position: 'absolute',
            alignSelf: 'center',
            right: -25,
          }}>
          {Datee2()}{' '}
        </Text>

        <Text
          style={{
            bottom: 430,
            color: 'white',
            fontSize: 18,
            position: 'absolute',
            alignSelf: 'center',
          }}>
          {Temperature2()}°{' '}
        </Text>
      </View>

      <View>
        <Image
          source={require('../../../../assets/Home/Modal/CardModal.png')}
          style={{
            bottom: 400,
            zIndex: 1,

            alignSelf: 'center',
            position: 'absolute',
          }}
        />

        <Text
          style={{
            bottom: 520,
            color: 'white',
            fontSize: 18,
            position: 'absolute',
            alignSelf: 'center',
            right: -21,
          }}>
          {Waktu3()}{' '}
        </Text>
        <Text
          style={{
            bottom: 470,
            color: 'white',
            fontSize: 17,
            position: 'absolute',
            alignSelf: 'center',
            right: -25,
          }}>
          {Datee3()}{' '}
        </Text>

        <Text
          style={{
            bottom: 430,
            color: 'white',
            fontSize: 18,
            position: 'absolute',
            alignSelf: 'center',
          }}>
          {Temperature3()}°{' '}
        </Text>
      </View>

      <View>
        <Image
          source={require('../../../../assets/Home/Modal/CardModal.png')}
          style={{
            bottom: 400,
            zIndex: 1,

            alignSelf: 'center',
            position: 'absolute',
          }}
        />

        <Text
          style={{
            bottom: 520,
            color: 'white',
            fontSize: 18,
            position: 'absolute',
            alignSelf: 'center',
            right: -21,
          }}>
          {Waktu4()}{' '}
        </Text>
        <Text
          style={{
            bottom: 470,
            color: 'white',
            fontSize: 17,
            position: 'absolute',
            alignSelf: 'center',
            right: -25,
          }}>
          {Datee4()}{' '}
        </Text>

        <Text
          style={{
            bottom: 430,
            color: 'white',
            fontSize: 18,
            position: 'absolute',
            alignSelf: 'center',
          }}>
          {Temperature4()}°{' '}
        </Text>
      </View>
    </View>
  );
}
