import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  Image, 
  SafeAreaView, 
  Button, 
  Alert,
  Platform,
  StatusBar
} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default function App() {

  console.log(useDimensions)

  const handlePress = () => {console.log("Handle Press")}
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello Evan 
      </Text>
      <TouchableOpacity >
        <Image source={require("./assets/10_22_20218_40_23AM.jpg")} style={{ width: 250, height: 350 }} fadeDuration={750}/>
      </TouchableOpacity>
        <Button 
        title="Alert"
        onPress={() =>{Alert.alert("Hungry Squid Game Salem", "This ferocious beast likes to feast on hooman food with her partner in crime Mr. Seymour.", [
          {text: "Yes", onPress: () => console.log("Yes pressed")},
          {text: "No"}
        ])}}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight: 0,
    alignItems: 'center',
  },
});
