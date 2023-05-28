import React, { useState } from "react";
import { Text, View } from "react-native";
import Touchable from "./Touchable.js";

const TouchableOpacity = ({ onPress, children, style }) => {
  const [flash, setFlash] = useState(false);

  const handleFlash = () => {
    setFlash(true);
    console.log("Flashing");
    setTimeout(() => {
      setFlash(false);
    }, 200);
  };
  console.log("Flash is ", flash);

  const flashStyle = flash ? { backgroundColor: "black" } : {};

  const childrenWithFlashStyle = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      style: [child.props.style, flashStyle],
    });
  });


  return (
    <>
      <Touchable
        onPress={() => {
          handleFlash();
          onPress();
        }}
        style={[
          {
            backgroundColor: flash ? "black" : "transparent",
          },
          style,
        ]}
      >
        {flash ? childrenWithFlashStyle : children}
      </Touchable>
      {flash && <View></View>}
    </>
  );
};

export default TouchableOpacity;
