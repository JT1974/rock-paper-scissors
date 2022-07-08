export default function Hand({ style, hand, handler }) {
	return (
		<div className={style} onClick={handler && (() => handler(hand))}>
			<div className='content--btn__inner-circle'>
				<img src={`/images/icon-${hand}.svg`} alt={hand} />
			</div>
		</div>
	)
}

