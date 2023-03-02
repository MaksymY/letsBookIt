import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();


  const handleSubmit = () => {
    // Handle form submission
    // Refacto later
    navigation.navigate('Home');

  };

  const renderForm = () => {
    if (isSignUp) {
      return (
        <>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
          />
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Text style={styles.label}>Confirmez le mot de passe</Text>
          <TextInput
            placeholder="Confirmez le mot de passe"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button title="S'inscrire" onPress={handleSubmit} />
        </>
      );
    } else {
      return (
        <>
          <Text style={styles.label}>Pseudo</Text>
          <TextInput
            placeholder="Pseudo"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            style={styles.input}
          />
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button title="Se connecter" onPress={handleSubmit} />
        </>
      );
    }
  };

  const handleSwitch = () => setIsSignUp(previousState => !previousState);

  return (
    <View>
      <View style={styles.switchContainer}>
        <TouchableOpacity onPress={() => handleSwitch()}>
          <Text style={!isSignUp ? styles.switchTextActive : styles.switchTextInactive}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSwitch()}>
          <Text style={isSignUp ? styles.switchTextActive : styles.switchTextInactive}>Créer un compte</Text>
        </TouchableOpacity>
      </View>
      {renderForm()}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      marginTop: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    input: {
      fontSize: 16,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginBottom: 15,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 4,
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 15,
    },
    switchTextActive: {
      color: '#ffff',
      backgroundColor: '#b63278',
      padding: 20,
      fontWeight: 'bold',
      marginRight: 10,
    },
    switchTextInactive: {
      padding: 20,
      color: '#000',
      fontWeight: 'bold',
      marginLeft: 10,
    },
    buttonContainer: {
      marginTop: 20,
    },
    switchWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
    switchText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginHorizontal: 10,
    },
    switchTextActiveWrapper: {
      backgroundColor: '#81b0ff',
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    switchTextInactiveWrapper: {
      backgroundColor: '#fff',
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderColor: '#81b0ff',
      borderWidth: 1,
    },
  });


export default LoginForm