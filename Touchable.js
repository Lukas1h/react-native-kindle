import React, { useState } from "react";
import { requireNativeComponent, Text, View } from "react-native";
const KPPUnifiedButton = requireNativeComponent("KPPUnifiedButton");

const Touchable = ({ onPress, title, children, style }) => {
  return (
    <>
      <View style={style}>
        <KPPUnifiedButton
          onClicked={() => {
            console.log("Pressed!");
            onPress();
          }}
          style={{
            backgroundColor: "black",
          }}
        >
          {children}
        </KPPUnifiedButton>
      </View>
    </>
  );
};

export default Touchable;
