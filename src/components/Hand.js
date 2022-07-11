import styled, { css } from 'styled-components'

const Button = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	display: flex;
	place-content: center;
	align-items: center;
	z-index: 1;

	${({ hand }) =>
		hand === 'scissors' &&
		css`
			background: linear-gradient(180deg, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%);
			box-shadow: 0 0.4em 0.4em hsla(0, 0%, 0%, 0.25), inset 0 -0.5em 0 hsla(28, 75%, 44%, 0.7);
		`};

	${({ hand }) =>
		hand === 'paper' &&
		css`
			background: linear-gradient(180deg, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%);
			box-shadow: 0 0.4em 0.4em hsla(0, 0%, 0%, 0.25), inset 0 -0.5em 0 hsl(231, 55%, 37%);
		`};

	${({ hand }) =>
		hand === 'rock' &&
		css`
			background: linear-gradient(180deg, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%);
			box-shadow: 0 0.4em 0.4em hsla(0, 0%, 0%, 0.25), inset 0 -0.5em 0 hsl(348, 75%, 36%);
		`};

	${({ hand }) =>
		hand === 'lizard' &&
		css`
			background: linear-gradient(180deg, hsl(261, 73%, 60%) 0%, hsl(261, 72%, 63%) 100%);
			box-shadow: 0 0.4em 0.4em hsla(0, 0%, 0%, 0.25), inset 0 -0.5em 0 hsl(263, 53%, 45%);
		`};

	${({ hand }) =>
		hand === 'spock' &&
		css`
			background: linear-gradient(180deg, hsl(189, 59%, 53%) 0%, hsl(189, 58%, 57%) 100%);
			box-shadow: 0 0.4em 0.4em hsla(0, 0%, 0%, 0.25), inset 0 -0.5em 0 hsl(192, 59%, 42%);
		`};

	div {
		width: 75%;
		height: 75%;
		border-radius: 50%;
		display: flex;
		place-content: center;
		align-items: center;
		background-color: white;
		box-shadow: inset 0 0.4em 0 hsla(0, 0%, 0%, 0.25);
	}

	img {
		height: 50%;
	}
`

export default function Hand({ winner, hand, handler }) {
	return (
		<Button hand={hand} className='rpsls-btn' onClick={handler && (() => handler(hand))}>
			<div>
				<img src={`./images/icon-${hand}.svg`} alt={hand} />
			</div>
		</Button>
	)
}

