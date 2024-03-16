import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Please Enter Your Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    },
    title: {
        color: 'white'
    }
})

export default Header