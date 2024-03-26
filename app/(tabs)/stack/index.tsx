import UsersList from "@/components/chatlist/userslist";
import useAuth from "@/hooks/useAuth";
import { useSelector } from "@/store";
import { searchTxt } from "@/util";
import { getChatedList } from "@/util/api/users";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export type UsersListProps = {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  archive: boolean;
  pinned: boolean;
  unReadCount: number;
  readMessage: boolean
};

export default function TabOneScreen() {
  const { searchUser } = useSelector((state) => state.userReducer);
  const [usersList, setUsersList] = useState<UsersListProps[]>([]);
  const [filteredData, setFilteredData] = useState<UsersListProps[]>([]);

  // fetch user data
  useEffect(() => {
    (async () => {
      try {
        const res = await getChatedList();
        const updatedData = [
          ...res.users.map((usr: UsersListProps) => ({
            ...usr,
            archive: false,
            pinned: false,
            unReadCount: Math.floor(Math.random() * 6),
            readMessage : false
          })),
        ];
        setUsersList(updatedData);
        setFilteredData(updatedData);
      } catch (error) {}
    })();
  }, []);

  // filter user by searching
  useEffect(() => {
    const users = [...usersList];
    setFilteredData([
      ...users.filter((user) =>
        searchTxt(user.firstName).includes(searchTxt(searchUser))
      ),
    ]);
  }, [searchUser]);

  return (
    <View style={styles.container}>
      <UsersList
        filteredData={filteredData}
        usersList={usersList}
        setFilteredUsersList={setFilteredData}
        setUsersList={setUsersList}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
