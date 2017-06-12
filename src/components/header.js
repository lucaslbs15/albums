//import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';
// make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
//styles
const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    height: 60,
    backgroundColor: '#00FF00',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  }
};
//make the Component available to other parts of the app
export default Header;
