import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Touchable from './Touchable.js';

const TouchableOpacity = ({onPress, children, style}) => {
  const [flash, setFlash] = useState(false);

  const handleFlash = () => {
    setFlash(true);
    console.log('Flashing');
    setTimeout(() => {
      setFlash(false);
    }, 200);
  };
  console.log('Flash is ', flash);

  return (
    <>
      <Touchable
        style={style}
        onPress={() => {
          onPress();
          handleFlash();
        }}
        style={{
          backgroundColor: flash ? 'black' : 'transparent',
        }}>
        {children}
      </Touchable>
      {flash && <View></View>}
    </>
  );
};

export default TouchableOpacity;
