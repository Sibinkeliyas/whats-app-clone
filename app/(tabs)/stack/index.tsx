import UsersList from "@/components/chatlist/userslist";
import useAuth from "@/hooks/useAuth";
import { useSelector } from "@/store";
import { getChatedList } from "@/util/api/users";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export type UsersListProps = {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
};

export default function TabOneScreen() {
  const { user } = useAuth();
  const { searchUser } = useSelector((state) => state.userReducer);
  const [usersList, setUsersList] = useState<UsersListProps[]>([]);
  const [filteredData, setFilteredData] = useState<UsersListProps[]>([]);

  useEffect(() => {
    const getUsersList = async () => {
      try {
        const res = await getChatedList(user?.id || 0);
        setUsersList(res.users);
        setFilteredData(res.users);
      } catch (error) {}
    };
    getUsersList();
  }, [user?.id]);

  useEffect(() => {
    const users = [...usersList];
    setFilteredData([
      ...users.filter((user) =>
        user.firstName
          .toLowerCase()
          .replaceAll(" ", "")
          .includes(searchUser.toLowerCase().replaceAll(" ", ""))
      ),
    ]);
  }, [searchUser]);

  return (
    <View style={styles.container}>
      <UsersList usersList={filteredData} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
