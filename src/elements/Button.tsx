import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native';
import { fontFamily } from '../global/styles';

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 245,
  },

  label: {
    fontSize: 15,
    fontFamily: fontFamily.semibold,
    textAlign: 'center',
  },
});

interface ButtonProps {
  label: string;
  variant: 'default' | 'primary';
  onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const backgroundColor = variant === 'primary' ? '#2CB9B0' : 'rgba(12,13,52,0.05)';
  const color = variant === 'primary' ? '#fff' : '#0C0D34';

  return (
    <RectButton style={[styles.container, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: 'default',
};

export default Button;
