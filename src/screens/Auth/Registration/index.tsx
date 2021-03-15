import React, { FC, useRef, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';
import md5 from "md5";

import { AuthStackParamList, StackNavProps } from 'navigation/types';
import styles from './styles';
import { InputItem, UserDetails } from './types';
import { InputText } from 'components';
import RNButton from 'components/RNButton';
import Header from 'components/Header';
import { strings } from 'config';
import { RootState } from 'store/reducers';
import { showAlert } from 'utils';
import { addUser } from './registration.slice';
import { setUserDetails as saveUser } from 'store/reducers/userSlice';
import { useAppDispatch } from 'store';
import { isValid } from './registration.operations';

const Registration: FC<StackNavProps<AuthStackParamList, 'Registration'>> = ({

}) => {
    const emailRef = useRef<TextInput>(null);
    const contactNoRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);
    const cPasswordRef = useRef<TextInput>(null);

    const registeredUsers = useSelector((state: RootState) => state.registeredUsers);
    const dispatch = useAppDispatch();
    const [userDetails, setUserDetails] = useState<UserDetails>({
        name: '',
        email: '',
        contactNo: '',
        password: '',
        cPassword: '',
    });

    const inputArray: InputItem[] = [
        {
            id: 'name',
            placeholder: strings.name,
            value: userDetails.name,
            returnKeyType: 'next',
        },
        {
            id: 'email',
            placeholder: strings.emailAddress,
            value: userDetails.email,
            inputRef: emailRef,
            returnKeyType: 'next',
            autoCapitalize: 'none',
            keyboardType: 'email-address',
            textContentType: 'emailAddress',
        },
        {
            id: 'contactNo',
            placeholder: strings.contact,
            value: userDetails.contactNo,
            inputRef: contactNoRef,
            returnKeyType: 'done',
            keyboardType: 'phone-pad',
        },
        {
            id: 'password',
            placeholder: strings.password,
            value: userDetails.password,
            inputRef: passwordRef,
            returnKeyType: 'next',
            secureTextEntry: true,
            textContentType: 'password'
        },
        {
            id: 'cPassword',
            placeholder: strings.cPassword,
            value: userDetails.cPassword,
            inputRef: cPasswordRef,
            returnKeyType: 'done',
            secureTextEntry: true,
        },
    ];

    /**
     * Handles text change event for all input
     * @param key field key name
     * @param value fields changed value
     */
    const onChngeInputValue = (key: string, value: string) => {
        setUserDetails(s => ({ ...s, [key]: value }));
    };

    /**
     * Handles keyboard submit event and focuses next input if available
     * @param index of curenlty focused field
     */
    const handleSubmitEditing = (index: number) => {
        if (index !== inputArray.length - 1) {
            inputArray[index + 1]?.inputRef?.current?.focus();
        }
    };

    const onSignUpPress = () => {
        if (!isValid(userDetails)) return;
        const found = registeredUsers.some(e => e.email === userDetails.email);
        if (!found) {
            const { name, email, contactNo, password } = userDetails;
            dispatch(addUser({
                name: name.trim(),
                email: email.trim(),
                contactNo: contactNo.trim(),
                password: md5(password)
            }));
            dispatch(saveUser({
                name: name.trim(),
                email: email.trim(),
                contactNo: contactNo.trim(),
                password: md5(password)
            }));
            showAlert(strings.registerSuccess, 'success');
        } else {
            showAlert(strings.alreadyRegistered)
        }
    }

    const renderInput = (item: InputItem, index: number) => (
        <InputText
            key={item.id}
            {...item}
            onChangeText={(value) => onChngeInputValue(item.id, value)}
            onSubmitEditing={() => handleSubmitEditing(index)}
            containerStyle={styles.inputStyle}
        />
    );

    return (
        <SafeAreaView style={styles.safearea}>
            <Header showBack />
            <KeyboardAwareScrollView
                contentContainerStyle={styles.container}
                enableOnAndroid
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.titleText}>{strings.register}</Text>
                <View>
                    {
                        inputArray.map((e, i) => renderInput(e, i))
                    }
                </View>
                <RNButton
                    lable={strings.signUp}
                    style={styles.buttonStyle}
                    onPress={onSignUpPress}
                />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default Registration;
