import { Pressable, View } from "react-native";
import { Stack, useRouter} from "expo-router";
import { useState } from "react";
import { Text, TextInput } from "react-native";


export default function Home() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: "Home" }} />

      <View>
        <Pressable onPress={() => router.navigate("/views/Login")}>
          <Text>afasfafafaf</Text>
        </Pressable>
        {/* <Text>LOGIN</Text>
        <TextInput
          placeholder="Username"
          autoCapitalize="none"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        /> */}
      </View>
    </View>
  );
}