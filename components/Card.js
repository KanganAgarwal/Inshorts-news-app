import { StyleSheet, Text, View ,Image, TouchableOpacity,Linking} from 'react-native'
import React from 'react'

const Card = ({item}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.imageContainer}>
          <Image source={{uri:item.urlToImage}} style={styles.image}/>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.text}>Last Updated : {" "} {item.publishedAt.split('T').join("  IST ").split("Z")}</Text>

      <TouchableOpacity onPress={()=>{Linking.openURL(item.url)}}>
      <Text style={styles.button}>Read More</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
card:{
width: '96%',
padding: 20,
marginVertical:8,
borderBottomWidth:1,
borderBottomColor:"gray",
marginHorizontal:6



},
title:{
    fontSize:20,
    fontWeight:'500',
   
},
image:{
    width: '100%',
    height:200,
    
},
imageContainer:{
    display: 'flex',
    alignItems:"center",
    justifyContent:"center",
    width: '100%',
    marginVertical:20
},
description:{
    fontSize:17,
    fontWeight:'400',
    marginBottom:12
},
button:{
    backgroundColor:"#171A20CC",
    color: '#FFFFFF',
    padding: 15,
    width: 100,
    borderRadius:12,
    marginVertical: 14,
    marginHorizontal:"auto"
},

})