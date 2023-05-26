import React, {useState} from 'react';
import {Text,View} from 'react-native';
import Touchable from './Touchable.js';
import TouchableOpacity from './TouchableOpacity.js';

const Button = ({onPress, title,style}) => {

    return (
      <>
        <TouchableOpacity
          onPress={() => {
            onPress();
          }}
          style={[
            {
              padding: 8,
              backgroundColor: flash ? "black" : "transparent",
              borderWidth: 2,
              borderColor: "black",
              borderRadius: 8,
              margin: 8,
            },
            style,
          ]}
        >
          <Text
            style={{
              backgroundColor: flash ? "black" : "transparent",
              color: flash ? "black" : "transparent",
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </>
    );
};

export default Button;
