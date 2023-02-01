import './LandingPage.css';
import Icon from '../../assets/img/icon.png';
import Button from '../../components/Button/Button';
import ButtonLarge from '../../components/ButtonLarge/ButtonLarge';

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
                        <p className='responses'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue ut massa accumsan dictum. Nam a malesuada metus. In rhoncus maximus maximus. Phasellus a metus varius, eleifend elit ac, viverra urna.</p>
                        <p className='responses'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue ut massa accumsan dictum. Nam a malesuada metus. In rhoncus maximus maximus. Phasellus a metus varius, eleifend elit ac, viverra urna.</p>
                    </div>
                </div>
                <div className='container-texts-2'>
                    <div className='div-spec'>
                        <p className='icon-espec'>ICON</p>
                        <p className='espec'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue ut massa accumsan dictum. Nam a malesuada metus. In rhoncus maximus maximus. Phasellus a metus varius, eleifend elit ac, viverra urna.</p>
                    </div>
                    <div className='div-spec'>
                        <p className='icon-espec'>ICON</p>
                        <p className='espec'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue ut massa accumsan dictum. Nam a malesuada metus. In rhoncus maximus maximus. Phasellus a metus varius, eleifend elit ac, viverra urna.</p>
                    </div>
                    <div className='div-spec'>
                        <p className='icon-espec'>ICON</p>
                        <p className='espec'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue ut massa accumsan dictum. Nam a malesuada metus. In rhoncus maximus maximus. Phasellus a metus varius, eleifend elit ac, viverra urna.</p>
                    </div>
                </div>
                <div className='container-texts-3'>
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
                    <ButtonLarge text='Quero meu sistema' click={()=> console.log('entrou aqui!')}/>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;