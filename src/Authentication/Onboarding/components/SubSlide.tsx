import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button } from '../../../elements';
import { Text } from '../../../elements';

const { height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 30,
  },

  title: {
    textAlign: 'center',
  },

  body: {
    marginTop: 12,
    marginBottom: 40,
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
      <Text variant="title2" style={styles.title}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.body}>
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        onPress={onPress}
      />
    </View>
  );
};

export default SubSlide;
