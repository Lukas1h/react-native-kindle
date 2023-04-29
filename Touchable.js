import React, {useState} from 'react';
import {requireNativeComponent,Text,View} from 'react-native';
const KPPUnifiedButton = requireNativeComponent('KPPUnifiedButton');

const Touchable = ({onPress, title,children,style}) => {
    const [flash, setFlash] = useState(false);



    return (
      <>
        {flash && <View></View>}
        <View
          style={style}>
          <KPPUnifiedButton
            onClicked={() => {
              onPress();
            }}
            style={{
              padding: 8,
              backgroundColor: 'transparent',
            }}>
            {children}
          </KPPUnifiedButton>
        </View>
      </>
    );
};

export default Touchable;
