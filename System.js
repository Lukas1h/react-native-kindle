import {NativeModules, AppRegistry, requireNativeComponent} from 'react-native';

function CloseApp() {
  AppRegistry.unmountApplicationComponentAtRootTag(1);
}

function ShowDialog(title, message, callback) {
  console.log('Showing Popup');
  const windowManager = {A: 'mainWindow'};
  var config = {
    winMgr: windowManager,
    title: title,
    message: message,
    buttons: {0: 'Okay'},
  };

  UIManager.startSimpleDialog(config, function (t, n) {
    callback(t, n);
  });
}

export {CloseApp, ShowDialog};
