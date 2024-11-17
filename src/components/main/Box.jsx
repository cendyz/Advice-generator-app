import mobileDividerImg from '../../images/pattern-divider-mobile.svg'
import desktopDividerImg from '../../images/pattern-divider-desktop.svg'
import diceImg from '../../images/icon-dice.svg'

const Box = ({advices, fetchAgain}) => {
    const {advice, id} = advices
	return (
		<>
			<div className='main-box'>
				<p className='main-advice-number'>Advice #{id}</p>
				<p className='main-advice-text'>
					"{advice}"
				</p>
                <picture>
                    <source srcSet={desktopDividerImg} media="(min-width: 996px)" />
				<img src={mobileDividerImg} alt='Divider icon' className='main-line-img' />
                </picture>
			</div>

			<div className='dice-box' onClick={fetchAgain}>
				<img src={diceImg} alt='Dice icon' className='dice-icon' />
			</div>
		</>
	);
};
export default Box;
