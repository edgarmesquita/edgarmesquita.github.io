import * as React from 'react';
import { connect } from '../store';
import { Header } from '../components/Header';
import { Card, CardBody, CardImg, CardText, CardColumns, CardTitle, Input, FormGroup, Form, Label } from 'reactstrap';

export interface IVendasViewState {
    order: string;
}
class VendasView extends React.Component<{}, IVendasViewState> {

    public items: any[] = [
        {
            img: "https://img.olx.com.br/images/02/024828087014448.jpg",
            title: "Cama Box de Casal King Size com colchão em molas ensacadas e cabeceira de madeira maciça",
            description: "8 anos de uso. Na loja, o colchão custou 2.224,40 reais (tenho a nota)",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/cama-box-de-casal-king-size-com-colchao-em-molas-ensacadas-e-cabeceira-de-madeira-macica-534241654",
            price: 1200,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/028828087388361.jpg",
            title: "Cômoda Sapateira de madeira",
            description: "",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/comoda-sapateira-de-madeira-534235872",
            price: 650,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/021828087906782.jpg",
            title: "Ar Condicionado Consul 10.000 BTUs",
            description: "",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/ar-condicionado-consul-10-000-btus-534219975",
            price: 300,
            sold: true
        },
        {
            img: "https://img.olx.com.br/images/02/025828082943545.jpg",
            title: "Sofá com Chaise retrátio e encosto reclinável 2,70 m",
            description: "",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/sofa-com-chaise-retratio-e-encosto-reclinavel-2-70-m-534219140",
            price: 1500,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/022828083237741.jpg",
            title: "Ar	Condicionado Samsung 24.000 BTUS Inverter",
            description: "",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/ar-condicionado-samsung-24-000-btus-inverter-534215820",
            price: 2200,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/023828086733185.jpg",
            title: "Impressora Epson EcoTank L375",
            description: "",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/computadores-e-acessorios/impressora-epson-ecotank-l375-534212122",
            price: 750,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/028828085579847.jpg",
            title: "Cadeira Exterior Olimpíadas 2016",
            description: "",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/cadeira-exterior-olimpiadas-2016-534266767",
            price: 100,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/029828083227719.jpg",
            title: "Panela Elétrica de Arroz",
            description: "",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/panela-eletrica-de-arroz-534220754",
            price: 60,
            sold: true
        },
        {
            img: "https://img.olx.com.br/images/09/091805094329801.jpg",
            title: "Freezer Flex Brastemp Frost Free Inox",
            description: "",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/freezer-flex-brastemp-frost-free-inox-536770986",
            price: 1600,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/09/095805094302585.jpg",
            title: "Armário de Aço Preto TokStok",
            description: "Está em ótimo estado",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/armario-de-aco-preto-tokstok-536769233",
            price: 500,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/09/099805099858934.jpg",
            title: "Lavadora e Secadora Samsung Eco Bubble",
            description: "Com apenas 1 ano de uso",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/lavadora-e-secadora-samsung-eco-bubble-536768576",
            price: 2200,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/09/090805092891492.jpg",
            title: "Fogão Eletrolux 4 bocas",
            description: "Está em ótimo estado",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/fogao-eletrolux-4-bocas-536767569",
            price: 500,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/09/093805090379317.jpg",
            title: "Geladeira Eletrolux Frost Free",
            description: "Está em bom estado",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/geladeira-eletrolux-frost-free-536773453",
            price: 450,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/12/122808093425060.jpg",
            title: "Microondas Eletrolux Inox MEC41",
            description: "Com apenas 1 ano de uso",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/microondas-eletrolux-inox-mec41-537804388",
            price: 500,
            sold: false
        }
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

        this.handleOrderChange = this.handleOrderChange.bind(this);
        this.compare = this.compare.bind(this);

        this.state = {
            order: "asc"
        };
    }

    public handleOrderChange(e: any) {
        this.setState({
            order: e.currentTarget.value
        });
    }

    public compare(a: any, b: any) {
        if (a.price < b.price) {
            return this.state.order === "asc" ? -1 : 1;
        }
        if (a.price > b.price) {
            return this.state.order === "asc" ? 1 : -1;
        }
        return 0;
    }
    public render() {

        const items = this.items.sort(this.compare);
        return (
            <React.Fragment>
                <Header />

                <main role="main">

                    <div className="album py-5 bg-light">
                        <div className="container">
                            <Form>
                                <FormGroup>
                                    <Label for="order">Ordenar por:</Label>
                                    <Input type="select" name="order" id="order" onChange={this.handleOrderChange}>
                                        <option value="asc">Menor preço</option>
                                        <option value="desc">Maior preço</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                            <CardColumns>
                                {items.map((item, idx) => {
                                    const props: any = {};
                                    if (item.sold) { props.disabled = true; }
                                    return (
                                        <Card className="mb-4 shadow-sm card-product" key={idx}>
                                            {item.sold && <img src="/img/vendido-300x189.png" className="sold" />}
                                            <CardImg top={true} src={item.img} alt={item.title} />
                                            <CardBody>
                                                <CardTitle>{item.title}</CardTitle>
                                                {item.description !== "" && <CardText>{item.description}</CardText>}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <a href={item.link} className={`btn btn-sm btn-outline-secondary${item.sold ? " disabled" : ""}`} {...props}>
                                                            <img src="https://static.bn-static.com/img-48782/favicon.ico"
                                                                style={{ "width": "16px", "verticalAlign": "middle" }} /> Visualizar
                                                        </a>
                                                    </div>
                                                    <small className="text-muted">{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</small>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    )
                                })}
                            </CardColumns>
                        </div>
                    </div>
                </main>

            </React.Fragment>
        )
    }
}

export default connect(state => ({ token: state.context.token }))(VendasView);