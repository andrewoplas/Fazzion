import React, { useCallback } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../../../global/styles';

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {
    width,
  },

  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },

  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: fontFamily.bold,
    color: 'white',
    textAlign: 'center',
  },

  footer: {
    flex: 1,
  },
});

interface SlideProps {
  label: string;
  right?: boolean;
}

const Slide = ({ label, right }: SlideProps) => {
  const getTransformStyle = useCallback(
    () => [
      { translateY: (SLIDE_HEIGHT - 100) / 2 },
      { translateX: (right ? width : -width) / 2 - (right ? 50 : -50) },
      { rotate: right ? '-90deg' : '90deg' },
    ],
    [right],
  );

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform: getTransformStyle() }]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

export default Slide;
