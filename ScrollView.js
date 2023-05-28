import React, { useEffect, useState } from "react";
import {
  requireNativeComponent,
} from "react-native-kindle";
const KPPScrollView = requireNativeComponent("KPPPaginatedScrollView");

export default function ScrollView(props){
    return React.cloneElement(
      KPPScrollView,
      Object.assign(
        {},
        {
          width: "100%",
          height: "92%",
          padding: "2%",
          borderWidth: 1,
        },
        props.style
      )
    );
}

