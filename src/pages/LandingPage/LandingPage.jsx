import './LandingPage.css';
import Icon from '../../assets/img/icon.png';
import Button from '../../components/Button/Button';
const LandingPage = () => {
    function testebutton() {
        alert('Testing')
    }
    return (
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
    )
}
export default LandingPage;