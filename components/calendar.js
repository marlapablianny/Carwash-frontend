import React, {useState} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MyButton from './Button';
import MyButton1 from './Button1';
import { StatusBar } from 'react-native';

export const Calendar = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textd, setTextdata] = useState('');
  const [texth, setTexthora] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'Android');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setTextdata(fDate + '\n')
    setTexthora(fTime + '\n')
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
        <View style={styles.container1}>
          <View style={styles.data}>
              <Text style={styles.texto1}>Hoje:</Text>
              <Text style={styles.texto2}>{textd}</Text>
              <MyButton1 style={styles.b} onPress={showDatepicker} text="   Data   "/>
          </View>
          <View style={styles.data}>
              <Text style={styles.texto1}>Hora:</Text>
              <Text style={styles.texto2}>{texth}</Text>
              <MyButton1  style={styles.b2} onPress={showTimepicker} text="    Hora    " />

          </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <StatusBar style='auto'></StatusBar>
    </View>
  );
};

const styles = StyleSheet.create({
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'column'
    },
    fucionamento: {
        fontSize: 22,
        color: '#cccccc',
        fontWeight: 'bold',
        padding: 10,
    },
    texto1: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000000',
        justifyContent: 'center',
        padding: 12,
    },
    texto2: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000000',
        marginLeft: 10, 
        alignItems: 'center',
        marginVertical: 11,
    },
    data : {
        flexDirection: 'row',
    },
    b: {
      marginLeft: 40
    },
    b2: {
      marginLeft: 50
    }
})