import React, { useState, useRef, useEffect } from "react";
import { View } from "react-native";
import Touchable from "./Touchable.js";
import Header from "./Header.js"
import Image from "./Image.js";


const Navigation = ({ initalStack }) => {
  console.log("Child", initalStack);


  const backButton = () => {
    return (
      <Touchable
        onPress={() => {
          popView()
        }}
        style={{ paddingRight: 20 }}
      >
        <Image
          style={{ width: 27, height: 27 }}
          source={{
            uri: "file:///app/KPPMainApp/res/KPPUIChrome/BackArrow.svg",
          }}
        />
      </Touchable>
    );
  };


  const [navigationStack, setNavigationStack] = useState(initalStack);

  const renderCurrentView = () => {
    console.log(navigationStack[navigationStack.length - 1].view);
    return React.cloneElement(
      navigationStack[navigationStack.length - 1].view,
      {
        pushView: pushView,
        popView: popView,
      }
    );
  };

  const currentTitle = () => {
    return navigationStack[navigationStack.length - 1].title;
  };

  const pushView = (view) => {
    setNavigationStack([...navigationStack, view]);
  };

  const popView = () => {
    if (navigationStack.length > 1) {
      setNavigationStack(navigationStack.slice(0, -1));
    }
  };

  return (
    <View>
      <Header
        headerButtonRight={navigationStack.length > 1 ? backButton() : <></>}
        title={currentTitle()}
      />
      {renderCurrentView()}
    </View>
  );
};

export default Navigation;
