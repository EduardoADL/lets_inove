import './LandingPage.css';
import Icon from '../../assets/img/icon.png';
import Button from '../../components/Button/Button';
import ButtonLarge from '../../components/ButtonLarge/ButtonLarge';
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {
    function testebutton() {
        alert('Testing')
    }
    return (
        <div>
            <div className="header">
                <div className='top-header'>
                    <img className='icon' src={Icon} alt='icon' />
                    <div className='menu'>
                        <a>Plano1</a>
                        <a>Plano1</a>
                        <a>Plano1</a>
                        <a>Plano1</a>
                        <Button text='Quero meu site' click={() => testebutton()} />
                    </div>
                </div>
                <div className='title-content'>
                    <p className='title'>LetsInove Web Solutions</p>
                </div>
            </div>
            <div className='mid-page'>
                <div className='container-texts-1'>
                    <div className='text-questions'>
                        <p>Você já tem um sistema para sua empresa?</p>
                        <p>Como está o controle e gestão da sua empresa?</p>
                    </div>
                    <div className='response-questions'>
                        <p className='responses'>A gestão da empresa é algo vital para o negócio, sendo importantíssimo uma boa organização nos dados gerais, desde uma venda até a organização de seu estoque e a gerencia de seus funcionários.</p>
                        <p className='responses'>Um sistema de gestão de fácil acesso, intuitivo para novos funcionários utilizarem, com tecnologias modernas , sendo possível acessar todas as informações nos smartphones ou computadores.</p>
                    </div>
                </div>
                <div className='container-texts-2'>
                    <div className='divBox'>
                        <div className='div-spec'>
                            <p className='icon-espec'>Organização</p>
                            <p className='espec'>É possível se organizar muito mais quando a empresa tem um sistema adaptado para todas suas necessidades, e essa é a proposta que apresentamos. </p>
                        </div>
                        <div className='div-spec'>
                            <p className='icon-espec'>Estatísticas de vendas</p>
                            <p className='espec'>Contem uma dashboard com todas as informações gerais de como suas vendas estão ocorrendo na semana, mês, ano.</p>
                        </div>
                        <div className='div-spec'>
                            <p className='icon-espec'>Negócio Digital</p>
                            <p className='espec'> Tenha sua identidade visual na internet, com visualização do negócio e gerenciamento em um click.</p>
                        </div>
                    </div>
                    <div className='divBox'>
                        <div className='div-spec'>
                            <p className='icon-espec'>Controle de produtos</p>
                            <p className='espec'> No sistema é possível contabilizar uma infinidade de produtos contendo todas as informações do mesmo, como preço, descrição, fornecedor, etc.</p>
                        </div>
                        <div className='div-spec'>
                            <p className='icon-espec'>Gerenciamento de Gastos</p>
                            <p className='espec'>A aplicação contará com um sistema de gerenciamento de gastos podendo ser visualizado todos os gastos contabilizados. Facilitando assim seu gerenciamento.</p>
                        </div>
                        <div className='div-spec'>
                            <p className='icon-espec'>Gerenciamento de Equipes</p>
                            <p className='espec'>Controle de maneira mais efetiva sua equipe de funcionários. Podendo visualizar alterações realizadas no seu sistema e contabilização do seus funcionários.</p>
                        </div>
                    </div>
                </div>
                <div className='container-texts-3'>
                    <p className='title-plan'>PLANOS</p>
                    <div className='divs-plan'>
                        <div className='div-plan'>
                            <p className='icon-plan'>ICON</p>
                            <p className='plan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue ut massa accumsan dictum. Nam a malesuada metus. In rhoncus maximus maximus. Phasellus a metus varius, eleifend elit ac, viverra urna.</p>
                        </div>
                        <div className='div-plan'>
                            <p className='icon-plan'>ICON</p>
                            <p className='plan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue ut massa accumsan dictum. Nam a malesuada metus. In rhoncus maximus maximus. Phasellus a metus varius, eleifend elit ac, viverra urna.</p>
                        </div>
                        <div className='div-plan'>
                            <p className='icon-plan'>ICON</p>
                            <p className='plan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue ut massa accumsan dictum. Nam a malesuada metus. In rhoncus maximus maximus. Phasellus a metus varius, eleifend elit ac, viverra urna.</p>
                        </div>
                    </div>
                    <ButtonLarge text='Quero meu sistema' click={() => console.log('entrou aqui!')} />
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default LandingPage;