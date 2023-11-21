import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Must be exported or Fast Refresh won't update the context
export default function App() {
  return (
    <SafeAreaView>
      <Text>App</Text>
    </SafeAreaView>
  );
}
