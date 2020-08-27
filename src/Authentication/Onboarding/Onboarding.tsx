import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, { multiply } from 'react-native-reanimated';
import { interpolateColor, onScrollEvent, useValue } from 'react-native-redash';
import Slide, { SLIDE_HEIGHT } from './components/Slide';
import SubSlide from './components/SubSlide';

const { width } = Dimensions.get('window');

const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: 'cyan',
    borderBottomRightRadius: BORDER_RADIUS,
  },

  footer: {
    flex: 1,
  },

  footerContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description: "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: '#BFEAF5',
    isRight: false,
  },
  {
    title: 'Playful',
    subtitle: 'Heat it First, Wear it First',
    description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
    isRight: true,
  },
  {
    title: 'Eccentric',
    subtitle: 'Your Style, Your Way',
    description: 'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
    isRight: false,
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description: 'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
    isRight: true,
  },
];

const Onboarding = () => {
  const scrollRef = useRef<Animated.ScrollView>(null);

  const x = useValue(0);
  const onScroll = onScrollEvent({ x });

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map(({ color }) => color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScroll}
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
        ></Animated.View>

        <Animated.View
          style={[
            styles.footerContent,
            { width: width * slides.length, flex: 1, transform: [{ translateX: multiply(x, 0) }] },
          ]}
        >
          {slides.map((slide, index) => (
            <SubSlide
              key={index}
              subtitle={slide.subtitle}
              description={slide.description}
              last={index === slides.length - 1}
              onPress={() => {
                if (scrollRef.current) {
                  scrollRef.current.getNode().scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }
              }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
