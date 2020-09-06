import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { Box, Button, Text } from '../../elements';
import theme from '../../global/theme';
import { Routes, StackNavigationProps } from '../../types/Navigation';
import { styles } from './styles';

const { width } = Dimensions.get('window');

const picture = {
  src: require('../../assets/images/5.png'),
  width: 3383,
  height: 5074,
};

const Welcome = ({ navigation }: StackNavigationProps<Routes, 'Welcome'>) => (
  <Box flex={1} backgroundColor="white">
    <Box
      flex={1}
      borderBottomRightRadius="xl"
      backgroundColor="gray"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        source={picture.src}
        style={[
          styles.image,
          {
            width: width - 20 - (theme.borderRadii?.xl || 0),
            height: ((width - (theme.borderRadii?.xl || 0)) * picture.height) / picture.width,
          },
        ]}
      />
    </Box>
    <Box flex={1} borderTopLeftRadius="xl">
      <Box backgroundColor="gray" style={StyleSheet.absoluteFillObject}></Box>
      <Box backgroundColor="white" borderTopLeftRadius="xl" style={styles.container}>
        <Text variant="title2" style={styles.title}>
          Let's get started
        </Text>
        <Text variant="body" style={styles.body}>
          Login to your account below or signup for an amazing experience
        </Text>
        <Button
          variant="primary"
          label="Have an account? Login"
          onPress={() => navigation.navigate('Login')}
          style={styles.buttonSpace}
        />
        <Button label="Join us, it's Free" onPress={() => null} style={styles.buttonSpace} />
        <Button
          variant="transparent"
          label="Forgot password?"
          onPress={() => null}
          style={styles.buttonSpace}
        />
      </Box>
    </Box>
  </Box>
);

export default Welcome;
