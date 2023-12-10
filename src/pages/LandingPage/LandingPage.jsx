import { useState } from 'react';
import './LandingPage.css';
import caracteristicas from '../../assets/img/Caracteristicas.png';
import desenvolvimento from '../../assets/img/desenvolvimento.png';
import entrega from '../../assets/img/entrega.png';
import ButtonLarge from '../../components/ButtonLarge/ButtonLarge';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';

const LandingPage = () => {

    const [navBar, setNavBar] = useState(false);

    function abreLink(){
        window.open('https://wa.me/5545999587883');
    }

    const changeBackground = () =>{
        if(window.scrollY >= 30){
            setNavBar(true)
        }else{
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)
    
    return (
        <div id='inicio'>
            <div className="header">
                <div className='top-header'>
                    <div className={navBar ? 'menu-div sticky' : 'menu-div'}>
                        <Menu inicio='#inicio' cme='#cme' beneficio='#beneficio' etapa='#etapa' beneficio2='#beneficio2'/>
                    </div>
                </div>
                <div className='title-content'>
                    <p className='title'>LetsInove Web Solutions</p>
                </div>
            </div>
            <div className='mid-page'>
                <div id='cme' className='container-texts-1'>
                    <div className='text-questions'>
                        <p>Você já tem um sistema para sua empresa?</p>
                        <p>Como está o controle e gestão da sua empresa?</p>
                    </div>
                    <div className='response-questions'>
                        <p className='responses'>A gestão da empresa é algo vital para o negócio, sendo importantíssimo uma boa organização nos dados gerais, desde uma venda até a organização de seu estoque e a gerencia de seus funcionários.</p>
                        <p  id='beneficio2' className='responses'>Um sistema de gestão de fácil acesso, intuitivo para novos funcionários utilizarem, com tecnologias modernas , sendo possível acessar todas as informações nos smartphones ou computadores.</p>
                    </div>
                </div>
                <div id='beneficio' className='container-texts-2'>

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

                <div className='scrolling-wrapper'>
                    <div className='div-spec-scroll'>
                        <p className='icon-espec'>Organização</p>
                        <p className='espec-scroll'>É possível se organizar muito mais quando a empresa tem um sistema adaptado para todas suas necessidades, e essa é a proposta que apresentamos. </p>
                    </div>
                    <div className='div-spec-scroll'>
                        <p className='icon-espec'>Estatísticas de vendas</p>
                        <p className='espec-scroll'>Contem uma dashboard com todas as informações gerais de como suas vendas estão ocorrendo na semana, mês, ano.</p>
                    </div>
                    <div className='div-spec-scroll'>
                        <p className='icon-espec'>Negócio Digital</p>
                        <p className='espec-scroll'> Tenha sua identidade visual na internet, com visualização do negócio e gerenciamento em um click.</p>
                    </div>
                    <div className='div-spec-scroll'>
                        <p className='icon-espec'>Controle de produtos</p>
                        <p className='espec-scroll'> No sistema é possível contabilizar uma infinidade de produtos contendo todas as informações do mesmo, como preço, descrição, fornecedor, etc.</p>
                    </div>
                    <div className='div-spec-scroll'>
                        <p className='icon-espec'>Gerenciamento de Gastos</p>
                        <p className='espec-scroll'>A aplicação contará com um sistema de gerenciamento de gastos podendo ser visualizado todos os gastos contabilizados. Facilitando assim seu gerenciamento.</p>
                    </div>
                    <div className='div-spec-scroll'>
                        <p className='icon-espec'>Gerenciamento de Equipes</p>
                        <p className='espec-scroll'>Controle de maneira mais efetiva sua equipe de funcionários. Podendo visualizar alterações realizadas no seu sistema e contabilização do seus funcionários.</p>
                    </div>
                </div>

                <div id='etapa' className='container-texts-3'>
                    <p className='title-plan'>Etapas para o Desenvolvimento do seu Sistema! :D</p>
                    <div className='divs-plan'>
                        <div className='div-plan'>
                            <div className='icon-plan'>
                                <img src={caracteristicas} alt='caracteristicas' />
                                <p className='text-plan'>Características do sistema</p>
                            </div>
                            <p className='plan'>Com nossa equipe de profissionais iremos coletar as características e funcionalidades da aplicação. De acordo com a necessidade de seu negócio.</p>
                        </div>
                        <div className='div-plan'>
                            <div className='icon-plan'>
                                <img src={desenvolvimento} alt='desenvolvimento' />
                                <p className='text-plan'>Desenvolvimento</p>
                            </div>
                            <p className='plan'>Nessa etapa é desenvolvido o seu sistema completo de acordo com as especificações da etapa anterior. Durante essa etapa você pode dar feedbacks e solicitar alterações.</p>
                        </div>
                        <div className='div-plan'>
                            <div className='icon-plan'>
                                <img src={entrega} alt='entrega' />
                                <p className='text-plan'>Entrega</p>
                            </div>
                            <p className='plan'>Você recebe o sistema completo com todas as funcionalidades solicitadas e com possibilidade de manutenção mensal em seu sistema!</p>
                        </div>
                    </div>
                    <ButtonLarge text='Quero meu sistema' click={() => abreLink()} />
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default LandingPage;