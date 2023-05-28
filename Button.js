import React, {useState} from 'react';
import {Text,View} from 'react-native';
import Touchable from './Touchable.js';

const Button = ({onPress, title}) => {
    const [flash, setFlash] = useState(false);

    const handleFlash = () => {
        setFlash(true);
        console.log("Flashing")
        setTimeout(() => {
            setFlash(false);
        }, 200);
    };
    console.log("Flash is ",flash);

    return (
      <>
        <Touchable
          onPress={() => {
            handleFlash();
            onPress();
          }}
          style={{
            padding: 8,
            backgroundColor: flash ? 'black' : 'transparent',
            borderWidth:2,
            borderColor:'black',
            borderRadius:8,
            margin:8
          }}>
          <Text
            style={{
              backgroundColor: flash ? 'black' : 'transparent',
              color: flash ? 'black' : 'transparent',
            }}>
            {title}
          </Text>
        </Touchable>
        {flash && <View></View>}
      </>
    );
};

export default Button;
