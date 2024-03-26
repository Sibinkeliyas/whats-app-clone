import AntDesign from "@expo/vector-icons/AntDesign";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
const AndDesignIcon = (props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
  size?: number;
}) => {
  return (
    <AntDesign size={props.size} style={{ marginBottom: -3 }} {...props}  />
  );
};

export default AndDesignIcon;
