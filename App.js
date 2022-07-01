import axios from "axios";
import React, { useEffect } from "react";
import { View, Linking} from "react-native";
import {WebView} from "react-native-webview";

const App = () => {

  useEffect(()=>{
    axios.get('http://apl.celtis.net/test.php?i').then(res=>{
      alert(res)
    }).then (response => {
      if (response.status === 200) {
        Linking.openURL('http://apl.celtis.net/test.php')
      }
    })
    .catch(err=>{
      if (err.response.status===500) {
        Linking.openURL('http://192.168.0.122:8085/')
      // Linking.openURL('file:///android_asset/HTML5/index.html')
      }
    })
  },[])


  return(

    <View style={{flex:1}}>
      {}
    </View>
  );
}

export default App;