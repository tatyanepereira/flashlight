import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
  
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });
    
    return () => subscription.remove();
  }, []);

  return (
     <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity  onPress={handleChangeToggle}>
        <Image 
          style={toggle ? style.lightinOn : style.linghtinOff}
          source={
            toggle 
            ? require('./icons/eco-light.png') 
            : require('./icons/eco-light-off.png')
        }
      />
      <Image 
        style={style.dioLogo}
        source={
          toggle
            ? require('./icons/logodio.png')
            : require('./icons/diome-white.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width:150,
    height: 150,
  },
  logoDio: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
});