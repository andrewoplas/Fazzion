import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../../../global/styles';
import Animated from 'react-native-reanimated';
import { Button } from '../../../elements';

const { height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  subtitle: {
    fontFamily: fontFamily.semibold,
    fontSize: 24,
    lineHeight: 30,
    color: '#0C0D34',
    textAlign: 'center',
  },

  description: {
    marginTop: 12,
    marginBottom: 40,
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 24,
    color: '#0C0D34',
    textAlign: 'center',
  },
});

interface SubSlideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: SubSlideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        onPress={onPress}
      />
    </View>
  );
};

export default SubSlide;
