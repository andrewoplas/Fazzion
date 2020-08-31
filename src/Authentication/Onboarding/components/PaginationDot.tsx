import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';
import { palette } from '../../../global/theme';

export const DOT_SIZE = 8;

const styles = StyleSheet.create({
  dot: {
    marginHorizontal: 4,
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE * 0.5,
    backgroundColor: palette.shamrock,
  },
});

interface PaginationDotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const PaginationDot = ({ index, currentIndex }: PaginationDotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.25, 1, 0.25],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return <Animated.View style={[styles.dot, { opacity, transform: [{ scale }] }]}></Animated.View>;
};

export default PaginationDot;
