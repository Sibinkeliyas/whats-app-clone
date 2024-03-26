import React, { Component, PropsWithChildren } from "react";
import { Animated, StyleSheet, Text, View, I18nManager } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { RectButton } from "react-native-gesture-handler";

import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  defaultMessageColor,
  tintColorDark,
  tintColorLight,
} from "@/constants/Colors";
import { UsersListProps } from "@/app/(tabs)/stack";

export default class AppleStyleSwipeableRow extends Component<
  PropsWithChildren<{
    handleUpdateUserStatus: (
      key: "archive" | "pinned" | "readMessage",
      subKey?: string
    ) => void;
    userData: UsersListProps;
  }>
> {
  private renderLeftActions = (
    _progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const trans = dragX.interpolate({
      inputRange: [0, 44],
      outputRange: [-20, 0],
      extrapolate: "extend",
    });

    return (
      <RectButton style={styles.leftAction} onPress={this.archiveHandler}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          Archive
        </Animated.Text>
      </RectButton>
    );
  };

  private renderRightAction = (
    text: string,
    color: string,
    x: number,
    progress: Animated.AnimatedInterpolation<number>,
    label?: "pinned" | "readMessage"
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      this.close();
      label && this.props.handleUpdateUserStatus(label, text);
    };

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={pressHandler}
        >
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  private renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    _dragAnimatedValue: Animated.AnimatedInterpolation<number>
  ) => (
    <View
      style={{
        width: 250,
        flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
      }}
    >
      {/* {this.renderRightAction("More", "#A9A9A9", 250, progress)} */}
      {this.renderRightAction(
        !this.props.userData.pinned ? "Pin" : "Unpin",
        defaultMessageColor,
        250,
        progress,
        "pinned"
      )}
      {this.renderRightAction(
        this.props.userData.readMessage || this.props.userData.unReadCount === 0
          ? "Unread"
          : "Read",
        tintColorLight,
        190,
        progress,
        "readMessage"
      )}
    </View>
  );

  private swipeableRow?: Swipeable;

  private updateRef = (ref: Swipeable) => {
    this.swipeableRow = ref;
  };

  private close = () => {
    this.swipeableRow?.close();
  };

  private archiveHandler = () => {
    this.swipeableRow?.close();
    this.props.handleUpdateUserStatus("archive");
  };
  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={40}
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}
        onSwipeableOpen={(direction) => {
          console.log(`Opening swipeable from the ${direction}`);
        }}
        onSwipeableClose={(direction) => {
          console.log(`Closing swipeable to the ${direction}`);
        }}
      >
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#C8C7CD",
    borderRadius: 4,
  },
  actionText: {
    color: "white",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 10,
  },
  rightAction: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
