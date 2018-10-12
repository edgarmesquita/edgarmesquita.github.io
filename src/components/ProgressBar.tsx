import * as React from 'react';

export interface IProgressBarProps {
    fill: number;
}

export class ProgressBar extends React.Component<IProgressBarProps, {}> {
    public render() {
        return (
            <div className="skillbar"><div className="fill" style={{ width: this.props.fill + '%' }} /></div>
        );
    }
}