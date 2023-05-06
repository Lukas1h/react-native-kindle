# React Native Kindle

`React Native Kindle` is a library that enables developers to run React Native applications on Kindle e-readers.

Similer to [react-native-web](), it replaces some `react-native` components with Kindle platform-specific counterparts.

Additionally, it includes some utilities like `CloseApp` and `ShowDialog`.

It's meant to be used with [KPPLauncher](https://github.com/lukas1h/KPPLauncher), a MRPI package that allows `react-native-kindle` apps to be ran directly from the library, similer to the now unsuportted `kindlets`.

## Compatibility
TL;DR `v5.13.7` or later

Since `React Native Kindle` is build on the new `KPP` framework included in the recent UI update, it should work on any devices running `v5.13.7` or later. It might be possible to run it on older devices (eg. `v5.12.x`) by copying the `/app` folder from the `v5.13.7` update.

Hardware wise, it has only been tested on a PW3, but theres no reason it shouldn't run on devices that meet the software requierments.

## Usage and Installation

### Building
```
$ git clone https://github.com/lukas1h/react-native-kindle-sample/
$ cd react-native-kindle-sample/
$ npm i 
$ npm run build
```

### Running
If you have [KPPLauncher](https://github.com/lukas1h/KPPLauncher) installed (you really should):
- Copy `./build/SampleApp.app` to your `documents` directory on your kindle.
- Run `SampleApp` from your library.

Otherwise:
- Copy `./build/SampleApp.app` to anywhere on your kindle.
- Run `/app/bin/KPPSimpleLauncher -h /app/tools -n DemoApp -s -j /path/to/your/build.app`

## Goals
This library aims to impliment those features that the `KPP` framework doesn't 
support.

This includes:
- [x] Touchable components (Button, Pressable, TouchableOpacity,...)
- [x] Images
- [x] Closing application
- [x] Presenting dialogs
- [ ] Networking
- [ ] File system
- [ ] And more

## Documentation
Coming soon, I hope. In the meantime, dig through the source and check out [react-native-kindle-sampleapp](https://github.com/lukas1h/react-native-kindle-sample/). 


## Contributing
I don't know, just submit a PR.


## Licencing
```
MIT License

Copyright (c) 20023 Lukas Hahn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

```