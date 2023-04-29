import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image,Touchable} from '.'
import {CloseApp} from '.';

export default function Header(){
	return (
    <>
      <View style={styles.statusBar}></View>
      <View style={styles.header}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: 'row',
            paddingHorizontal: 36,
            paddingVertical: 14,
          }}>
          <Text style={styles.headerText}>Settings</Text>
          <Touchable
            onPress={() => {
              CloseApp();
            }}
          >
            <Image
              style={{width: 27, height: 27}}
              source={{uri: 'file:///app/KPPMainApp/res/KPPUIChrome/Close.svg'}}
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
