export default function Hand({ hand, handler }) {
	return (
		<div className={`content--btn player-choice ${hand}`} onClick={handler && (() => handler(hand))}>
			<div className='content--btn__inner-circle'>
				<img src={`/images/icon-${hand}.svg`} alt={hand} />
			</div>
		</div>
	)
}

