import { View, Text, TextInput, Button, StyleSheet, FlatList, ScrollView } from 'react-native'
import { useState } from 'react'
import Header from '../components/Header'
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
    const [display, setDisplay] = useState(false)
    const [items, setItems] = useState([
      {id: Math.floor(Math.random()*100), text: 'Heart'},
      {id: Math.floor(Math.random()*100), text: 'Lung'},
      {id: Math.floor(Math.random()*100), text: 'Liver'},
      {id: Math.floor(Math.random()*100), text: 'Kidney'},
      {id: Math.floor(Math.random()*100), text: 'Brain'},
    ])

    const list = [
      {id: Math.floor(Math.random()*100), text: 'HTML'},
      {id: Math.floor(Math.random()*100), text: 'CSS'},
      {id: Math.floor(Math.random()*100), text: 'Javascript'},
      {id: Math.floor(Math.random()*100), text: 'NodeJS'},
      {id: Math.floor(Math.random()*100), text: 'React'},
    ]

    const handleSubmit = () => {
        // Handle form submission, you can send the data to the server or process it locally
        console.log('Name:', name);
        console.log('Age:', age);
        console.log('Date of Birth:', dob);
        console.log('Country:', country);
        console.log('Weight:', weight);
        console.log('Height:', height);
      };

      const clearForm = () => {
        setDisplay(false);
        setWeight("");
        setName("");
        setAge("");
        setCountry("");
        setDob("")
        setHeight("")
      }

    return(
        <View style={styles.container}>
          <Header/>
        <Text className="text-red-700 font-bold">Name:</Text>
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
        <Button title="Submit" onPress={()=>setDisplay(true)} />
        <Button title="Clear" onPress={clearForm} style={{ margin: 10}}/>
        {display? 
          <View>
            <Text>Name: {name}</Text>
            <Text>Age: {age}</Text>
            <Text>Country: {country}</Text>
            <Text>DOB: {dob}</Text>
            <Text>Weight: {weight}</Text>
            <Text>Height: {height}</Text>

          </View>
          : null  
      }
        <FlatList data={items} renderItem={({item}) => <Text>{item.id} {item.text}</Text>} keyExtractor={item=>item.id}/>

        <View>
          <Text style={{fontSize: 31}}>List with map function</Text>
          <ScrollView>
            {list.map((items)=><Text style={{fontSize: 24, padding: 10, backgroundColor: 'blue', color: '#fff'}}>{item.text}</Text>)}
          </ScrollView>
        </View>

      </View>
      
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default Home