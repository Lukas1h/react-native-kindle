import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image,Touchable} from '.'
import { CloseApp } from "./System.js";

export default function Header({ title, headerButtonRight }) {
  return (
    <>
      <View style={styles.statusBar}></View>
      <View style={styles.header}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "row",
            paddingHorizontal: 36,
            paddingVertical: 14,
          }}
        >
          {typeof headerButton != null ? headerButtonRight : <></>}
          <Text style={styles.headerText}>{title}</Text>
          <Touchable
            onPress={() => {
              console.log("closing.");
              CloseApp();
            }}
          >
            <Image
              style={{ width: 27, height: 27 }}
              source={{
                uri: "file:///app/KPPMainApp/res/KPPUIChrome/Close.svg",
              }}
            />
          </Touchable>
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  statusBar: {
    width: '100%',
    height: 60,
  },
  header: {
    width: '100%',
    height: 60,
    borderBottomWidth: 2,
    borderColor: '#d7d7d7',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '600',
  },
});
