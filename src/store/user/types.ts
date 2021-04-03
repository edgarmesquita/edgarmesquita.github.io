export interface IUserToken {
    access_token?: string;
    expires_at?: number;
    id_token?: string;
}
export interface IUserState {
    token: IUserToken | null,
    isLoadingUser: boolean
}