import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import { COLORS, icons, images, Sizes } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'


const Home = () => {
    const router = useRouter()
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [country, setCountry] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const handleSubmit = () => {
        // Handle form submission, you can send the data to the server or process it locally
        console.log('Name:', name);
        console.log('Age:', age);
        console.log('Date of Birth:', dob);
        console.log('Country:', country);
        console.log('Weight:', weight);
        console.log('Height:', height);
      };

    return(
        <View style={styles.container}>
        <Text>Name:</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Text>Age:</Text>
        <TextInput
          value={age}
          onChangeText={setAge}
          placeholder="Enter your age"
          keyboardType="numeric"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Text>Date of Birth:</Text>
        <TextInput
          value={dob}
          onChangeText={setDob}
          placeholder="Enter your date of birth"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Text>Country:</Text>
        <TextInput
          value={country}
          onChangeText={setCountry}
          placeholder="Enter your country"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Text>Weight:</Text>
        <TextInput
          value={weight}
          onChangeText={setWeight}
          placeholder="Enter your weight"
          keyboardType="numeric"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Text>Height:</Text>
        <TextInput
          value={height}
          onChangeText={setHeight}
          placeholder="Enter your height"
          keyboardType="numeric"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default Home