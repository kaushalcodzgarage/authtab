import { TextInputProps } from "react-native";
import { User } from "types/common";

export type UserDetails = {
    cPassword: string;
} & User;

export type InputItem = TextInputProps & {
    id: string;
    inputRef?: any;
}