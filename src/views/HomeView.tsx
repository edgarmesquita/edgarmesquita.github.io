import * as React from 'react';
import { connect } from '../store';
class HomeView extends React.Component<{}, {}> {

    constructor(props: any) {
        super(props);
    }

    public render()
    {
        return (
            <div>Bem-vindo!!!</div>
        )
    }
}

export default connect(state => ({ token: state.context.token })) (HomeView);