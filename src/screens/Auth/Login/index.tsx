import React, { FC, useRef, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import md5 from "md5";

import { AuthStackParamList, StackNavProps } from 'navigation/types';
import styles from './styles';
import { InputText } from 'components';
import RNButton from 'components/RNButton';
import { strings } from 'config';
import { isValid } from './login.operations';
import { RootState } from 'store/reducers';
import { setUserDetails } from 'store/reducers/userSlice';
import { useAppDispatch } from 'store';
import { showAlert } from 'utils';

const Login: FC<StackNavProps<AuthStackParamList, 'Login'>> = ({
    navigation,
}) => {

    const dispatch = useAppDispatch();
    const registeredUsers = useSelector((state: RootState) => state.registeredUsers);

    const [email, setEmail] = useState('');
    const passwordRef = useRef<TextInput>(null);
    const [password, setPassword] = useState('');

    /**
     * Handles sign text press event and navigates to sign up screen
     */
    const onSignUpPress = () => {
        navigation.navigate('Registration');
    }

    /**
     * Handles sign in button tap event and authanticate user from local storage
     */
    const onSignInPress = () => {
        if (!isValid(email, password)) return;
        const index = registeredUsers.findIndex(e => e.email === email.trim());
        if (index >= 0) {
            const user = registeredUsers[index];
            if (user.password === md5(password)) {
                dispatch(setUserDetails(user));
            } else {
                showAlert(strings.incorectPassword)
            }
        } else {
            showAlert(strings.noUserFound)
        }
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.container}>
                <View />
                <View>
                    <Text style={styles.titleText}>{strings.welcomeBack}</Text>
                    <InputText
                        value={email}
                        placeholder={strings.emailAddress}
                        onChangeText={setEmail}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        returnKeyType={'next'}
                        onSubmitEditing={() => passwordRef.current?.focus()}
                    />
                    <InputText
                        inputRef={passwordRef}
                        value={password}
                        placeholder={strings.password}
                        onChangeText={setPassword}
                        returnKeyType={'done'}
                        secureTextEntry={true}
                    />
                    <RNButton
                        lable={'Sign in'}
                        onPress={onSignInPress}
                    />
                </View>
                <View style={styles.bottomView}>
                    <Text>{strings.dontHaveAccount}</Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={onSignUpPress}
                    >
                        <Text style={styles.signUp}> {strings.signUp}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;
