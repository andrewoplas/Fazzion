import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import Animated, { divide, multiply, interpolate, Extrapolate } from 'react-native-reanimated';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import theme, { palette } from '../../global/theme';
import PaginationDot from './components/PaginationDot';
import Slide, { SLIDE_HEIGHT } from './components/Slide';
import SubSlide from './components/SubSlide';
import { StackNavigationProps, Routes } from '../../types/Navigation';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: 'cyan',
    borderBottomRightRadius: theme.borderRadii?.xl,
  },

  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomRightRadius: theme.borderRadii?.xl,
  },

  footer: {
    flex: 1,
  },

  footerContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: palette.white,
    borderTopLeftRadius: theme.borderRadii?.xl,
  },

  pagination: {
    ...StyleSheet.absoluteFillObject,
    width,
    height: (theme.borderRadii?.xl || 1) / 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description: "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: palette.mintTulip,
    isRight: false,
    picture: {
      src: require('../../assets/images/1.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Playful',
    subtitle: 'Heat it First, Wear it First',
    description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: palette.padua,
    isRight: true,
    picture: {
      src: require('../../assets/images/2.png'),
      width: 2791,
      height: 3744,
    },
  },
  {
    title: 'Eccentric',
    subtitle: 'Your Style, Your Way',
    description: 'Create your individual & unique style and look amazing everyday',
    color: palette.peach,
    isRight: false,
    picture: {
      src: require('../../assets/images/3.png'),
      width: 2738,
      height: 3244,
    },
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description: 'Discover the latest trends in fashion and explore your personality',
    color: palette.pippin,
    isRight: true,
    picture: {
      src: require('../../assets/images/4.png'),
      width: 1757,
      height: 2551,
    },
  },
];

const Onboarding = ({ navigation }: StackNavigationProps<Routes, 'Onboarding'>) => {
  const scrollRef = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  const onNext = (index: number, isLast: boolean) => {
    if (isLast) {
      navigation.navigate('Welcome');
    } else if (scrollRef.current) {
      scrollRef.current.getNode().scrollTo({
        x: width * (index + 1),
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [-0.5, 0, 0.5].map((n) => (index + n) * width),
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });

          return (
            <Animated.View key={index} style={[styles.underlay, { opacity }]}>
              <Image
                source={picture.src}
                style={{
                  width: width - (theme.borderRadii?.xl || 0),
                  height: ((width - (theme.borderRadii?.xl || 0)) * picture.height) / picture.width,
                }}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map((slide, index) => (
            <Slide key={index} label={slide.title} right={slide.isRight} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />

        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <PaginationDot key={index} index={index} currentIndex={divide(x, width)} />
          ))}
        </View>

        <Animated.View
          style={[
            styles.footerContent,
            // eslint-disable-next-line react-native/no-inline-styles
            { width: width * slides.length, flex: 1, transform: [{ translateX: multiply(x, -1) }] },
          ]}
        >
          {slides.map((slide, index) => {
            const isLast = index === slides.length - 1;
            return (
              <SubSlide
                key={index}
                subtitle={slide.subtitle}
                description={slide.description}
                last={isLast}
                onPress={() => onNext(index, isLast)}
              />
            );
          })}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
