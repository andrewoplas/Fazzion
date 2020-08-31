import React, { useCallback } from 'react';
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
  variant: 'default' | 'primary' | 'transparent';
  onPress: () => void;
  style: any;
}

const Button = ({ label, variant, onPress, style }: ButtonProps) => {
  const getBackgroundColor = useCallback(() => {
    switch (variant) {
      case 'primary':
        return palette.shamrock;
      case 'transparent':
        return 'transparent';
      default:
        return 'rgba(12,13,52,0.05)';
    }
  }, [variant]);

  const getTextColor = useCallback(() => {
    switch (variant) {
      case 'primary':
        return palette.white;
      case 'transparent':
        return palette.textTitle;
      default:
        return palette.textTitle;
    }
  }, [variant]);

  return (
    <RectButton
      style={[styles.container, { backgroundColor: getBackgroundColor() }, style]}
      onPress={onPress}
    >
      <Text variant="buttonLabel" style={{ color: getTextColor() }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: 'default',
};

export default Button;
