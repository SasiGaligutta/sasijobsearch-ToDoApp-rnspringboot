
import React, { useState } from 'react';
import { Text, TextInput, View, Button, Alert, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';



const Todoapp = () => {
  const [Tsknme, setTsknme] = useState(" ");
  const [Tskdesc, setTskdesc] = useState(" ");

  const [visible, setVisible] = useState(false);

  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timePicker, setTimePicker] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));

  const [priority, setPriority] = useState("High");

  function showDatePicker() {
    setDatePicker(true);
  }

  function showTimePicker() {
    setTimePicker(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  }

  var changedTime = time.toTimeString();
  var changedDate = date.toDateString();

  console.log(changedDate);
  console.log(changedTime);

  
// var myDate = changedDate.split("-");
// var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
// console.log('datestamp:',newDate.getTime().toString());

  var onDate = (new Date(changedDate + ' ' + changedTime).getDate()).toString().concat("-",(new Date(changedDate + ' ' + changedTime).getMonth() + 1).toString());
  
  var atTime = (new Date(changedDate + ' ' + changedTime).getHours()).toString().concat(":",(new Date(changedDate + ' ' + changedTime).getMinutes()).toString());
  
  const task = { Tsknme, Tskdesc,  onDate, priority, atTime }
  
//   function toTimestamp(strDate,strTime){
//     var datum = Date.parse(strDate);
//     var tatum = Time.parse(strTime);
//     return datum+tatum;
//     //return datum/1000;
//  }

// ZonedDateTime ldate = LocalDateTime.parse(str, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS"))
//                                    .atZone(ZoneId.of("Europe/Paris"));
// long time = ldate.toInstant().toEpochMilli();
// System.out.println(time);

  const handleClick = (e) => {
    e.preventDefault()
    setVisible(true);
    //alert(toTimestamp(changedDate,changedTime));
    console.log(task);
    fetch('http://192.168.0.106:8080/task/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("User json ==========" + JSON.stringify(json))
        return json
      })
      .catch((error) => console.error("Error ==========" + error));

  }

  return (

    <View style={{ flexDirection: 'column' }}>
      <TextInput placeholder="Enter Task Name..." onChangeText={(text) => setTsknme(text)}></TextInput>
      <TextInput placeholder="Enter Task Description..." onChangeText={(text) => setTskdesc(text)}></TextInput>

      <Button style={{ marginVertical: 150 }} title="save" onPress={handleClick} />


      {/* {visible && <><Text>{Tsknme} for {Tskdesc} on {date} at {time} is a {priority} task.</Text> </>} */}


      <Button title="select start date" onPress={showDatePicker} />
      {datePicker && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'android' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onDateSelected}
          style={{ color: 'white', backgroundColor: 'blue' }} />
      )}
      <Button title="select start time" onPress={showTimePicker} />
      {timePicker && (<DateTimePicker
        value={time}
        mode={'time'}
        display={Platform.OS === 'android' ? 'spinner' : 'default'}
        is24Hour={true}
        onChange={onTimeSelected}
        style={{ color: 'white', backgroundColor: 'blue' }} />
      )}
      <View style={{ flexDirection: 'column' }}>
        <Text>Priority : </Text>
        <Picker
          selectedValue={priority}
          onValueChange={(itemValue) =>
            setPriority(itemValue)
          }
          style={{ marginLeft: 210, width: 150 }}>
          <Picker.Item label="High" value="high" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Low" value="low" />
        </Picker>
      </View>
    </View>


  );
}

export default Todoapp



// const styles = StyleSheet.create({




// })

