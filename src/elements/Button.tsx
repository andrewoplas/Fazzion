import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Text } from '.';
import { palette } from '../global/theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 245,
  },
});

interface ButtonProps {
  label: string;
  variant: 'default' | 'primary';
  onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const backgroundColor = variant === 'primary' ? palette.shamrock : 'rgba(12,13,52,0.05)';
  const color = variant === 'primary' ? palette.white : palette.textTitle;

  return (
    <RectButton style={[styles.container, { backgroundColor }]} onPress={onPress}>
      <Text variant="buttonLabel" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: 'default',
};

export default Button;
