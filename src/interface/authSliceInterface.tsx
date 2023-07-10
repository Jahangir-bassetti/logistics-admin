export interface AuthState {
    user: null | any;
    token: null | any;
}
  
export const initialState: AuthState = {
    user: null,
    token: null,
}
  