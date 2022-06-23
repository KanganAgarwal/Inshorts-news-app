import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity } from 'react-native'

import React,{useState} from 'react'

import { XIcon,MenuIcon } from "react-native-heroicons/solid";

import datas from '../datas.js'
const Header = ({setCategory}) => {
      const[open,setOpen]= useState(false)

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Image source={require('../assets/inshorts.png')} style={styles.image}/>
      <TouchableOpacity onPress={()=>{setOpen(!open)}}>
     {!open ?<MenuIcon style={styles.menu}/>:
      <XIcon style={styles.menu}/>}
      </TouchableOpacity>
    </View>
     {open &&  
   <View style={styles.sidebar}>
    <View styles={styles.sidebarHeader}> 
    <Text style={styles.textBig}>Explore Categories</Text>
    </View>
      
    <View style={styles.categories}>
    <FlatList data={datas} renderItem={({item})=>(
      <TouchableOpacity onPress={()=>{setCategory(item);
        setOpen(false)}}><Text style={styles.text}>{item}</Text></TouchableOpacity>
    )}
   keyExtractor={item=>item}
    />
    </View>
    </View>
}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop:10
  },
    header:{
      display:"flex",
     flexDirection:"row",
     alignItems: "center",
     justifyContent:"space-between",
        marginTop:10,
        width: '100%',
      borderBottomColor:"gray",
      padding: 10,
      borderBottomWidth:1
    },
    image: {
        width: 150,
        height: 40,

    },
    sidebarHeader:{
   
     marginVertical:30,
        height: 40,
    
    padding:10,
     
    
    },
    menu: {
      height:25,
      width:25,
      color: 'black',
      cursor: 'pointer'
    },
    sidebar:{
      height: 700,
      width:"100%",
     paddingHorizontal:20,
      backgroundColor:"gray",
    },
    categories:{
      height:500,
      width:"100%",
     
     
    },
    text:{
      fontSize:20,
      borderBottomColor:"white",
    padding: 10,
      borderBottomWidth:1,
      color: "white",
      marginVertical:10
    },
    textBig:{
      fontSize:25,
      fontWeight:"bold",
    paddingVertical: 10,
      color: "white",
      marginVertical:10,
      paddingHorizontal:5
    }

})