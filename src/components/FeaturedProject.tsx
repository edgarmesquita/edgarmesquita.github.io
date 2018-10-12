import * as React from 'react';
import { NewWindow } from './NewWindow';

export interface IFeaturedProjectProps {
    ribbonText: string;
    img:string;
    title:string;
    subtitle:string;
}
export class FeaturedProject extends React.Component<IFeaturedProjectProps, {}> {
    public render() {
        return (
            <div>
                <h4 className="sub-heading font-size-20 text-center margin-bottom-5">{this.props.title}</h4>
                <p className="text-muted text-center margin-top-0">{this.props.subtitle}</p>
                <div className="position-relative text-center">
                    <div className="ribbon">
                        <span>{this.props.ribbonText === undefined ? 'asdfadsf' : this.props.ribbonText}</span>
                    </div>
                    <NewWindow href="">
                        <img src={this.props.img} alt="" />
                    </NewWindow>
                    {this.props.children}
                    <a className="btn btn-cta-secondary margin-top-30" href="http://themes.3rdwavemedia.com" target="_blank">
                        Back my project <i className="fa fa-thumbs-up margin-right-5" />
                    </a>
                </div>
            </div>
        );
    }
}