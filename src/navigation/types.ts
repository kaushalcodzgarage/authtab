import { RouteProp } from "@react-navigation/core";
import { ParamListBase } from "@react-navigation/routers";
import { StackNavigationProp } from "@react-navigation/stack";

export type AuthStackParamList = {
    Login: undefined;
    Registration: undefined;
    Home: undefined;
};

export type BottomTabParamList = {
    Home: undefined;
    Favourites: undefined;
    Places: undefined;
    Profile: undefined;
}

export type StackNavProps<T extends ParamListBase, K extends keyof T> = {
    navigation: StackNavigationProp<T, K>;
    route: RouteProp<T, K>;
};