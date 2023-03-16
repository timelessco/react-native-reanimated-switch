import PropTypes from "prop-types";
import React, { useEffect, useMemo } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolateColor,
} from "react-native-reanimated";

const RNSwitch = ({
  handleOnPress,
  activeTrackColor,
  inActiveTrackColor,
  thumbColor,
  value,
}) => {

  const switchTranslate = useSharedValue(0);

  useEffect(() => {
    if (value) {
      switchTranslate.value = withSpring(21, {
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      });
    } else {
      switchTranslate.value = withSpring(0, {
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      });
    }
  }, [value, switchTranslate]);

  const interpolateBackgroundColor = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        switchTranslate.value,
        [0, 22],
        [inActiveTrackColor, activeTrackColor]
      ),
    };
  });

  const memoizedOnSwitchPressCallback = useMemo(() => {
    return () => handleOnPress(!value);
  }, [handleOnPress, value]);

  return (
    <Pressable onPress={memoizedOnSwitchPressCallback}>
      <Animated.View
        style={[styles.containerStyle, interpolateBackgroundColor]}
      >
        <Animated.View
          style={[
            styles.circleStyle,
            { backgroundColor: thumbColor },
            {
              transform: [
                {
                  translateX: switchTranslate,
                },
              ],
            },
            styles.shadowValue,
          ]}
        />
      </Animated.View>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  circleStyle: {
    width: 24,
    height: 24,
    borderRadius: 24,
  },
  containerStyle: {
    width: 50,
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 36.5,
  },
  shadowValue: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

RNswitch.propTypes = {
  handleOnPress: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  activeTrackColor: PropTypes.string,
  inActiveTrackColor: PropTypes.string,
  thumbColor: PropTypes.string,
};

RNswitch.defaultProps = {
  activeTrackColor: "#007AFF",
  inActiveTrackColor: "#F2F5F7",
  thumbColor: "#FFF",
};

export default RNswitch;
