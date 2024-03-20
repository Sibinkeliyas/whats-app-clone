import UsersList from "@/components/chatlist/userslist";
import useAuth from "@/hooks/useAuth";
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
  const [usersList, setUsersList] = useState<UsersListProps[]>([]);
  const [filteredData, setFilteredData] = useState<UsersListProps[]>([]);
  const [search, setSearch] = useState("");

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
          .includes(search.toLowerCase().replaceAll(" ", ""))
      ),
    ]);
  }, [search]);

  return (
    <View style={styles.container}>
      <UsersList
        usersList={filteredData}
        search={search}
        setSearch={setSearch}
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
