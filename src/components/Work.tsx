import * as React from 'react';

export class Work extends React.Component {
    public render() {
        return (
            <div className="block">
                <h3 className="heading">Work Experience</h3>
                <ul className="work-experience">
                    {this.props.children}
                </ul>
            </div>
        );
    }
}