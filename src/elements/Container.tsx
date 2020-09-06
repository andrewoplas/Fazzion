import { useTheme } from '@shopify/restyle';
import React, { ReactNode } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Theme } from '../global/theme';
import Box from './Box';
import Button from './Button';
import Text from './Text';

const assets = [
  require('../assets/images/pattern1.png'),
  require('../assets/images/pattern2.png'),
  require('../assets/images/pattern3.png'),
];
const logo = [
  require('../assets/images/logo-facebook.png'),
  require('../assets/images/logo-google.png'),
  require('../assets/images/logo-apple.png'),
];
const aspectRatio = 750 / 1125;
const { width } = Dimensions.get('window');
const height = width * aspectRatio;

const styles = StyleSheet.create({
  logoContainer: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 20,
    height: 20,
  },
});

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const theme = useTheme<Theme>();

  return (
    <Box flex={1} backgroundColor="secondary">
      <Box backgroundColor="white">
        <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61}>
          <Image
            source={assets[0]}
            style={{ width, height, borderBottomLeftRadius: theme.borderRadii?.xl || 0 }}
          />
        </Box>
      </Box>

      <Box flex={1} borderTopLeftRadius={0} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            borderBottomLeftRadius: theme.borderRadii?.xl || 0,
            top: -height * 0.61,
          }}
        />
        <Box borderRadius="xl" borderTopLeftRadius={0} backgroundColor="white" flex={1}>
          {children}
        </Box>
      </Box>

      <Box height={175} justifyContent="center">
        <Box flexDirection="row" justifyContent="center" alignItems="center">
          <View style={styles.logoContainer}>
            <Image source={logo[0]} style={styles.logo} />
          </View>
          <View style={styles.logoContainer}>
            <Image source={logo[1]} style={styles.logo} />
          </View>
          <View style={styles.logoContainer}>
            <Image source={logo[2]} style={styles.logo} />
          </View>
        </Box>
        <Box alignItems="center">
          <Button variant="transparent" onPress={() => null}>
            <Box flexDirection="row">
              <Text variant="buttonLabel" color="white">
                Don't have an account?
              </Text>
              <Text marginLeft="s" variant="buttonLabel" color="primary">
                Sign Up here
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
