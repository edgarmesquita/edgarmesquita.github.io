import * as React from 'react';
import { connect } from '../store';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Content } from '../components/Content';
class HomeView extends React.Component<{}, {}> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <React.Fragment>
                <Header />
                <Content />
                <Footer />
            </React.Fragment>
        )
    }
}

export default connect(state => ({ token: state.context.token }))(HomeView);