import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getUserData } from "@/util/api/users";
import { UsersListProps } from "@/app/(tabs)/stack";
import { useDispatch } from "@/store";
import { updateSelectedUser } from "@/store/slice/userProfile";
import ChatCom from "@/components/chat-com";

const Page = () => {
  const dispatch = useDispatch();
  const { userId } = useLocalSearchParams();
  const [userData, setUsersData] = useState<UsersListProps>({
    id: "0",
    firstName: "",
    lastName: "",
    title: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getUserData(`${userId}`);
        dispatch(updateSelectedUser(data));
        setUsersData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [userId]);
  return <ChatCom />;
};

export default Page;
