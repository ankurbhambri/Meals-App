import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function CustomHeaderButton({icon, color, onSelect}) {
  return (
    <Pressable
      onPress={onSelect}
      style={({pressed}) => pressed && style.pressed}>
      <Icon name={icon} size={25} color={color} />
    </Pressable>
  );
}

const style = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
export default CustomHeaderButton;
