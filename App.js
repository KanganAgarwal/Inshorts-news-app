import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import Card from './components/Card';
import Header from './components/Header';

export default function App() {
  const [category, setCategory]=useState("General")
  const[news,setNews]=useState([])
  const getData=async()=>{
    const res=await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=a1aa88bccdc24c20952df47ef92003f0`);
    const data=await res.json();
    const datas=await data.articles;
  console.log(datas);
    setNews([...datas]);
    
  return data;
  }
  useEffect(()=>{
  
   getData()
  },[category])
  return (
    <View style={styles.container}>

      <Header setCategory={setCategory}/>
      <Text style={styles.text}>Top Headlines on {category}</Text>
      <View style={styles.cardContainer}>
        <FlatList data={news} renderItem={({item})=>(<Card item={item}/>)
        }/>
 </View> 
 <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  cardContainer:{
    marginHorizontal: "auto",
    paddingBottom:140
  },
  text: {
    fontWeight:"700",
    fontSize:22,
    marginHorizontal:18,
    marginTop: 15,
    paddingBottom:15
  }
});
