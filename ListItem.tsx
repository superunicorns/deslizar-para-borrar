import { Text } from "react-native";

function ListItem({item}) {
  return (
    <Text>{item.name}</Text>
  )
}

export default ListItem;