export interface ProtectedRouteProps {
    component: React.ComponentType;
}
export interface RootState {
    auth: {
      value?: {
        token?: string;
        user?: string;
      };
    };
}