import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../context';
import api from '../utils/api';
import { storeToken } from '../utils/token';

const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();
  const { isMerchant, setIsMerchant } = useContext(AppContext);

  const payload_account  = {
    username: username,
    password: password,
    email: email,
    ismerchant: isSelected
  }

  const payload_login = {
    username: username,
    password: password,
  }

  const postRegister = async (data: object, path: string) => {
    try {
      const response = await api.post(`/${path}`, data);
      console.log(response.data)
      setIsMerchant(response.data.user.isMerchant);
      storeToken(response.data.token)
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    const path = isSelected ? "register" : "login";
    const data = isSelected ? payload_account : payload_login;
    postRegister(data, path);
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
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label_checkbox}>Professionnel</Text>
          </View>
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
          <Text style={isSignUp ? styles.switchTextActive : styles.switchTextInactive}>Cr??er un compte</Text>
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
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: 'center',
    },
    label_checkbox:{
      marginLeft: 5,
      fontWeight: 'bold',
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