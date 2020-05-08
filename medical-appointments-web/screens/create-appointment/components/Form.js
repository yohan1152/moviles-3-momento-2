import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default function Form(props){

    const [document, setDocument] = useState("");
    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [birth_date, setBirthDate] = useState("");
    const [city_residence, setCityResidence] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [cellphone, setCellphone] = useState("");
    const [appointment_date, setAppointmentDate] = useState("");
    const [appointment_hour, setAppointmentHour] = useState("");

    const create = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/addappointment', { //la función de crear 
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({   
                    // Parámetros que recibe el servicio de addappointment
                    document: document,
                    name: name,
                    last_name: last_name,
                    birth_date: birth_date,
                    city_residence: city_residence,
                    neighborhood: neighborhood,
                    cellphone: cellphone,
                    appointment_date: appointment_date,
                    appointment_hour: appointment_hour
                }),
            });
            const json = await response.json();
            Alert.alert("Successfully added medical appointment.");
        } catch (error) {

        }
    }
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput style={styles.textInput} placeholder="document" keyboardType="default" onChangeText={text => setDocument(text)} />
                    <TextInput style={styles.textInput} placeholder="Name" keyboardType="default" onChangeText={text => setName(text)} />
                    <TextInput style={styles.textInput} placeholder="Last name" keyboardType="default" onChangeText={text => setLastName(text)} />
                    <TextInput style={styles.textInput} placeholder="Birth date" keyboardType="default" onChangeText={text => setBirthDate(text)} />
                    <TextInput style={styles.textInput} placeholder="City residence" keyboardType="default" onChangeText={text => setCityResidence(text)} />
                    <TextInput style={styles.textInput} placeholder="Neighborhood" keyboardType="default" onChangeText={text => setNeighborhood(text)} />
                    <TextInput style={styles.textInput} placeholder="cellphone" keyboardType="phone-pad" onChangeText={text => setCellphone(text)} />
                    <TextInput style={styles.textInput} placeholder="Appointment date" keyboardType="default" onChangeText={text => setAppointmentDate(text)} />
                    <TextInput style={styles.textInput} placeholder="Appointment hour" keyboardType="default" onChangeText={text => setAppointmentHour(text)} />
                    <TouchableHighlight style={styles.createTaskButton} onPress={create}>
                        <Text style={styles.textStyleButton}>Create Appointment</Text>
                    </TouchableHighlight>            
                </View> 
            </View>
        );
}
    
//Styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '82%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  form: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
  textInput: {
        padding: 20,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        width: 250,
        height: 30,
    },
    createTaskButton: {
        marginBottom: 40,
        marginTop: 10,
        padding: 15,
        backgroundColor: 'purple',
        borderRadius: 5,
        width: 250,
        alignItems: 'center'
    },
    textStyleButton: {
        color: 'white',
        fontSize: 16
    },
});