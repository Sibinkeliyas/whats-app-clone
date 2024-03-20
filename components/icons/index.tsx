import FontAwesome from "@expo/vector-icons/FontAwesome";


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
const Icon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  size?:number
}) => {
  return <FontAwesome size={props.size} style={{ marginBottom: -3 }} {...props} />;
};

export default Icon