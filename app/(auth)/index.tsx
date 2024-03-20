import React from 'react'
import { Text } from 'react-native'
import { useLocalSearchParams } from "expo-router";

const Page = () => {
    const {userId} =  useLocalSearchParams()
  return <Text>{userId}</Text>;
}

export default Page