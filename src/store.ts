import { initStore, Store } from 'react-waterfall';
import { devTool } from './devtool';
import { User } from './models/User';

export interface IStoreContext {
    token: any;
}
export interface IStoreState {
    context: IStoreContext;
}

export interface IStoreActions {
    signIn: (email: string, password: string) => string;
}

const store: Store<IStoreState, IStoreActions> = {

    actions: {
        signIn: async (state: IStoreState, email: string, password: string, onSuccess: ((user: User | null) => void) | null = null) => {
            const result = { ...state };
            return result;
        }
    },
    initialState: {

        context: { token: "" }
    }
};

export const {
    actions,
    connect,
    Consumer,
    getState,
    Provider,
    subscribe,
} = initStore(store, devTool);