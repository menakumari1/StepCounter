import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
import SVG, {Circle} from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type RingProgressProps = {
    radius?: number;
    strokeWidth?: number;
    progress: number;
};

const color="#EE0F55";

const RingProgress = ( { radius = 100, strokeWidth = 35, progress,} : RingProgressProps ) => {
    const innerRadius = radius - (strokeWidth / 2);
    const circumference= 2 * Math.PI * innerRadius;
    const fill= useSharedValue(0);
    useEffect(()=>{
        fill.value= withTiming(progress,{duration:300});
    }, [progress]);
    const animatedProps = useAnimatedProps(() => ({
        strokeDasharray:[circumference * fill.value, circumference],
    }));

  return (
    <View style={{width:radius*2, height:radius*2, alignSelf:'center'}} >
      <SVG>
        <Circle r={innerRadius} cx={radius} cy={radius} strokeWidth={strokeWidth} stroke={color}  opacity={0.2} /> 
        <AnimatedCircle animatedProps={animatedProps} r={innerRadius} cx={radius} cy={radius} originX={radius} originY={radius} stroke={color} strokeWidth={strokeWidth} 
             strokeLinecap='round' rotation='-90' />
      </SVG>
    </View>
  );
};

export default RingProgress