import React from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import { Box, Text, Button } from '../../elements';
import theme from '../../global/theme';

const { width } = Dimensions.get('window');

const picture = {
  src: require('../../assets/images/5.png'),
  width: 3383,
  height: 5074,
};

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
    marginTop: 15,
    textAlign: 'center',
  },

  buttonSpace: {
    marginTop: 15,
  },
});

const Welcome = () => (
  <Box flex={1} backgroundColor="white">
    <Box
      flex={1}
      borderBottomRightRadius="xl"
      backgroundColor="gray"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Image
        source={picture.src}
        style={{
          width: width - (theme.borderRadii?.xl || 0),
          height: ((width - (theme.borderRadii?.xl || 0)) * picture.height) / picture.width,
        }}
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
          onPress={() => null}
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
