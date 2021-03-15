export type User = {
    name: string;
    email: string;
    password: string;
    contactNo: string;
};

export type FListItem<T> = {
    item: T;
    index: number;
}