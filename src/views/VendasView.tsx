import * as React from 'react';
import { connect } from '../store';
import { Header } from '../components/Header';
class VendasView extends React.Component<{}, {}> {

    public items: any[] = [
        {
            img: "https://img.olx.com.br/images/02/024828087014448.jpg",
            title: "Cama Box de Casal King Size com colchão em molas ensacadas e cabeceira de madeira maciça",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/cama-box-de-casal-king-size-com-colchao-em-molas-ensacadas-e-cabeceira-de-madeira-macica-534241654",
            price: 1200,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/028828087388361.jpg",
            title: "Cômoda Sapateira de madeira",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/comoda-sapateira-de-madeira-534235872",
            price: 650,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/021828087906782.jpg",
            title: "Ar Condicionado Consul 10.000 BTUs",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/ar-condicionado-consul-10-000-btus-534219975",
            price: 300,
            sold: true
        },
        {
            img: "https://img.olx.com.br/images/02/025828082943545.jpg",
            title: "Sofá com Chaise retrátio e encosto reclinável 2,70 m",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/sofa-com-chaise-retratio-e-encosto-reclinavel-2-70-m-534219140",
            price: 1500,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/022828083237741.jpg",
            title: "Ar	Condicionado Samsung 24.000 BTUS Inverter",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/ar-condicionado-samsung-24-000-btus-inverter-534215820",
            price: 2200,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/023828086733185.jpg",
            title: "Impressora Epson EcoTank L375",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/computadores-e-acessorios/impressora-epson-ecotank-l375-534212122",
            price: 750,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/028828085579847.jpg",
            title: "Cadeira Exterior Olimpíadas 2016",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/cadeira-exterior-olimpiadas-2016-534266767",
            price: 100,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/029828083227719.jpg",
            title: "Panela Elétrica de Arroz",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/panela-eletrica-de-arroz-534220754",
            price: 60,
            sold: false
        }
        // {
        //     img: "",
        //     title: "",
        //     link: "",
        //     price: 0,
        //     sold: false
        // },
        // {
        //     img: "",
        //     title: "",
        //     link: "",
        //     price: 0,
        //     sold: false
        // },
        // {
        //     img: "",
        //     title: "",
        //     link: "",
        //     price: 0,
        //     sold: false
        // }
    ];
    constructor(props: any) {
        super(props);
    }

    public render()
    {
        return (
            <React.Fragment>
                <Header />

                <main role="main">

                    <div className="album py-5 bg-light">
                        <div className="container">

                            <div className="row">
                                {this.items.map((item, idx) => {
                                    const props: any = {};
                                    if(item.sold) {props.disabled = true;}
                                    return (
                                        <div className="col-md-4" key={idx}>
                                            <div className="card mb-4 shadow-sm card-product">
                                                {item.sold && <img src="/img/vendido-300x189.png" className="sold" />}
                                                <img className="card-img-top" src={item.img} alt={item.title} />
                                                <div className="card-body">
                                                    <p className="card-text">{item.title}</p>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="btn-group">
                                                            <a href={item.link} className={`btn btn-sm btn-outline-secondary${item.sold ? " disabled": ""}`} {...props}>
                                                                <img src="https://static.bn-static.com/img-48782/favicon.ico"
                                                                    style={{"width": "16px", "verticalAlign": "middle"}} /> Visualizar
                                                            </a>
                                                        </div>
                                                        <small className="text-muted">R$ {item.price.toFixed(2).replace(".",",")}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </main>

            </React.Fragment>
        )
    }
}

export default connect(state => ({ token: state.context.token })) (VendasView);