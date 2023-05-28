import React, { useEffect, useState } from "react";
import {
  requireNativeComponent,
} from "react-native-kindle";
const KPPScrollView = requireNativeComponent("KPPPaginatedScrollView");
export default function ScrollView(props) {
  const scrollViewStyle = {
    width: "100%",
    height: "92%",
    borderWidth: 1,
    ...props.style,
  };

  return (
    <KPPScrollView style={scrollViewStyle}>{props.children}</KPPScrollView>
  );
}
