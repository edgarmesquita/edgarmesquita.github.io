import * as React from 'react';


export class ShopHeader extends React.Component<{}, {}>
{

    public render()
    {
        return (
            <header>
                <div className="collapse bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 className="text-white">Meus Anúncios</h4>
                                <p className="text-muted">Lista de móveis, eletrodomésticos e eletro-eletrônicos à venda.</p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Contatos</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="https://api.whatsapp.com/send?phone=5521996688953" className="text-white">
                                            <img src="https://whatsapp.com/favicon.png" style={{"width": "16px", "verticalAlign": "middle"}} /> (21) 99668-8953
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:edgar.rj@gmail.com" className="text-white">
                                            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico" style={{"width": "16px", "verticalAlign": "middle"}} /> edgar.rj@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <a href="https://edgarmesquita.github.io/vendas/" className="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="mr-2">
                                <path d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708" />
                            </svg>
                            <strong>Meus Anúncios</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader"
                        aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}