import * as React from 'react';
import { connect } from '../store';
import { ShopHeader } from '../components/ShopHeader';
import { Card, CardBody, CardImg, CardText, CardColumns, CardTitle, Input, FormGroup, Form, Label, Modal, ModalHeader, ModalBody, Carousel, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption } from 'reactstrap';

export interface IVendasViewState {
    order: string;
    modals: boolean[];
    currentItem: number;
    activeIndex: number;
}

class VendasView extends React.Component<{}, IVendasViewState> {

    public items: any[] = [
        {
            img: "https://img.olx.com.br/images/02/024828087014448.jpg",
            gallery: [],
            title: "Cama Box de Casal King Size com colchão em molas ensacadas e cabeceira de madeira maciça",
            description: "8 anos de uso. Na loja, o colchão custou 2.224,40 reais (tenho a nota). Estou vendendo o colchão + box por R$ 650,00 e cabeceira por R$ 350,00.",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/cama-box-de-casal-king-size-com-colchao-em-molas-ensacadas-e-cabeceira-de-madeira-macica-534241654",
            price: 1000,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/028828087388361.jpg",
            gallery: [
                { src: "/img/vendas/comoda-2.jpeg", altText: "Cômoda aberta", caption: "Cômoda aberta" }
            ],
            title: "Cômoda Sapateira de madeira",
            description: "3 anos de uso.",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/comoda-sapateira-de-madeira-534235872",
            price: 650,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/021828087906782.jpg",
            gallery: [],
            title: "Ar Condicionado Consul 10.000 BTUs",
            description: "6 anos de uso. Está em ótimas condições, acabei de fazer manutenção (limpeza).",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/ar-condicionado-consul-10-000-btus-534219975",
            price: 300,
            sold: true
        },
        {
            img: "https://img.olx.com.br/images/02/025828082943545.jpg",
            gallery: [],
            title: "Sofá com Chaise retrátio e encosto reclinável 2,70 m",
            description: "",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/sofa-com-chaise-retratio-e-encosto-reclinavel-2-70-m-534219140",
            price: 1500,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/022828083237741.jpg",
            gallery: [],
            title: "Ar	Condicionado Samsung 24.000 BTUS Inverter",
            description: "2 anos de uso.",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/ar-condicionado-samsung-24-000-btus-inverter-534215820",
            price: 2200,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/023828086733185.jpg",
            gallery: [],
            title: "Impressora Epson EcoTank L375",
            description: "1 ano de uso.",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/computadores-e-acessorios/impressora-epson-ecotank-l375-534212122",
            price: 750,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/028828085579847.jpg",
            gallery: [],
            title: "Cadeira Exterior Olimpíadas 2016",
            description: "1 ano de uso. Está em excelentes condições.",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/cadeira-exterior-olimpiadas-2016-534266767",
            price: 100,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/02/029828083227719.jpg",
            gallery: [],
            title: "Panela Elétrica de Arroz",
            description: "",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/panela-eletrica-de-arroz-534220754",
            price: 60,
            sold: true
        },
        {
            img: "https://img.olx.com.br/images/09/091805094329801.jpg",
            gallery: [],
            title: "Freezer Flex Brastemp Frost Free Inox",
            description: "",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/freezer-flex-brastemp-frost-free-inox-536770986",
            price: 1600,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/09/095805094302585.jpg",
            gallery: [],
            title: "Armário de Aço Preto TokStok",
            description: "Está em ótimo estado",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/moveis/armario-de-aco-preto-tokstok-536769233",
            price: 500,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/09/099805099858934.jpg",
            gallery: [],
            title: "Lavadora e Secadora Samsung Eco Bubble",
            description: "Com apenas 1 ano de uso",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/lavadora-e-secadora-samsung-eco-bubble-536768576",
            price: 2200,
            sold: true
        },
        {
            img: "https://img.olx.com.br/images/09/090805092891492.jpg",
            gallery: [],
            title: "Fogão Eletrolux 4 bocas",
            description: "Está em ótimo estado",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/fogao-eletrolux-4-bocas-536767569",
            price: 500,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/09/093805090379317.jpg",
            gallery: [],
            title: "Geladeira Eletrolux Frost Free",
            description: "Está em bom estado",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/geladeira-eletrolux-frost-free-536773453",
            price: 450,
            sold: false
        },
        {
            img: "https://img.olx.com.br/images/12/122808093425060.jpg",
            gallery: [],
            title: "Microondas Eletrolux Inox MEC41",
            description: "Com apenas 1 ano de uso",
            link: "https://rj.olx.com.br/rio-de-janeiro-e-regiao/eletrodomesticos/microondas-eletrolux-inox-mec41-537804388",
            price: 500,
            sold: false
        },
        {
            img: "/img/vendas/batedeira.jpeg",
            gallery: [],
            title: "Batedeira Planetária Arno",
            description: "2 anos de uso. Incluído 3 batedores (raquete, globo e gancho).",
            link: "",
            price: 80,
            sold: false
        },
        {
            img: "/img/vendas/piscina-1.jpeg",
            gallery: [
                { src: "/img/vendas/piscina-2.jpeg", altText: "Escada", caption: "Escada" },
                { src: "/img/vendas/piscina-3.jpeg", altText: "Bomba 1", caption: "Bomba 1" },
                { src: "/img/vendas/piscina-4.jpeg", altText: "Bomba 2", caption: "Bomba 2" }
            ],
            title: "Piscina BestWay 9.600 litros",
            description: "2 anos de uso. Está em excelente estado. Possuo escada e duas bombas.",
            link: "",
            price: 500,
            sold: false
        },
        {
            img: "/img/vendas/monitor-22-1.jpeg",
            gallery: [
                { src: "/img/vendas/monitor-22-2.jpeg", altText: "Ligado", caption: "Ligado" }
            ],
            title: "Monitor Samsung SyncMaster P2370 23 polegadas",
            description: "6 anos de uso. Excelente estado",
            link: "",
            price: 250,
            sold: false
        }
    ];
    public animating: boolean = false;
    constructor(props: any) {
        super(props);

        this.handleOrderChange = this.handleOrderChange.bind(this);
        this.compare = this.compare.bind(this);
        this.toggle = this.toggle.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.onExited = this.onExited.bind(this);
        this.onExiting = this.onExiting.bind(this);

        this.state = {
            order: "asc",
            modals: this.items.map(o => false),
            currentItem: 0,
            activeIndex: 0
        };
    }

    public handleOrderChange(e: any) {
        this.setState({
            order: e.currentTarget.value
        });
    }

    public handleImgClick(e: any, idx: number) {
        e.preventDefault();

        this.setState({ currentItem: idx });
        if (this.items[idx].gallery.length > 0) {
            this.toggle(idx);
        }
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

    public toggle(idx: number) {
        const modals = this.state.modals;
        modals[idx] = !modals[idx];
        this.setState({ modals });
    }

    public onExiting() {
        this.animating = true;
    }

    public onExited() {
        this.animating = false;
    }

    public next() {
        if (this.animating) { return; }
        const nextIndex = this.state.activeIndex === this.items[this.state.currentItem].gallery.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    public previous() {
        if (this.animating) { return; }
        const nextIndex = this.state.activeIndex === 0 ? this.items[this.state.currentItem].gallery.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    public goToIndex(newIndex: number) {
        if (this.animating) { return; }
        this.setState({ activeIndex: newIndex });
    }

    public render() {

        const items = this.items.sort(this.compare);

        return (
            <React.Fragment>
                <ShopHeader />

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
                                    const showBtnText = !(item.link !== "" && item.gallery.length > 0);
                                    return (
                                        <Card className="mb-4 shadow-sm card-product" key={idx}>
                                            {item.sold && <img src="/img/vendido-300x189.png" className="sold" />}
                                            <CardImg top={true} src={item.img} alt={item.title} onClick={(e) => this.handleImgClick(e, idx)} />
                                            <CardBody>
                                                <CardTitle>{item.title}</CardTitle>
                                                {item.description !== "" && <CardText>{item.description}</CardText>}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        {item.link !== "" && <a href={item.link} title="Visualizar no OLX" className={`btn btn-sm btn-outline-secondary${item.sold ? " disabled" : ""}`} {...props}>
                                                            <img src="https://static.bn-static.com/img-48782/favicon.ico"
                                                                style={{ "width": "16px", "verticalAlign": "middle" }} /> {showBtnText && "Visualizar"}
                                                        </a>}{" "}
                                                        {item.gallery.length > 0 && <a href="#" className="btn btn-sm btn-outline-secondary" title="Galeria de fotos" onClick={(e) => this.handleImgClick(e, idx)}>
                                                            <i className="fa fa-photo" /> {showBtnText && "Visualizar fotos"}
                                                        </a>}
                                                    </div>
                                                    <small className="text-muted">{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</small>
                                                </div>
                                            </CardBody>
                                            {item.gallery.length > 0 &&
                                                <Modal isOpen={this.state.modals[idx]} toggle={() => this.toggle(idx)} size="lg">
                                                    <ModalHeader toggle={() => this.toggle(idx)}>{item.title}</ModalHeader>
                                                    <ModalBody>
                                                        <Carousel
                                                            activeIndex={this.state.activeIndex}
                                                            next={this.next}
                                                            previous={this.previous}>
                                                            <CarouselIndicators items={item.gallery} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                                                            {item.gallery.map((img: any) => {
                                                                return (
                                                                    <CarouselItem
                                                                        onExiting={this.onExiting}
                                                                        onExited={this.onExited}
                                                                        key={img.src}>
                                                                        <img src={img.src} alt={img.altText} className="img-fluid" />
                                                                        <CarouselCaption captionText={img.caption} captionHeader={img.caption} />
                                                                    </CarouselItem>
                                                                );
                                                            })}
                                                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                                                        </Carousel>
                                                    </ModalBody>
                                                </Modal>}
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