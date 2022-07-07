export default function Hand({ hand, handler }) {
	return (
		<div className={`content--top__btn player-choice ${hand}`} onClick={() => handler(hand)}>
			<div className='btn-inner-circle'>
				<img src={`/images/icon-${hand}.svg`} alt={hand} />
			</div>
		</div>
	)
}

