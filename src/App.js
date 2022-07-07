import { useState } from 'react'
import Hand from './components/Hand'

function App() {
	const [score, setScore] = useState(0)
	const [playersPick, setPlayersPick] = useState(null)
	const [computersPick, setComputersPick] = useState(null)
	const [winner, setWinner] = useState(null)

	const characters = ['scissors', 'paper', 'rock', 'lizard', 'spock']
	const rules = new Map([
		['scissors', ['paper', 'lizard']],
		['paper', ['rock', 'spock']],
		['rock', ['scissors', 'lizard']],
		['lizard', ['paper', 'spock']],
		['spock', ['scissors', 'rock']],
	])

	const playerBtnClass = `content--top__btn ${playersPick} ${winner === 'player' ? 'winner' : ''}`
	const computerBtnClass = `content--top__btn ${computersPick} ${winner === 'computer' ? 'winner' : ''}`
	const playerImgClass = `/images/icon-${playersPick}.svg`
	const computerImgClass = `/images/icon-${computersPick}.svg`
	const gameResultText = winner === 'player' ? 'you win' : 'you lose'

	// displays the RULES modal
	const showModal = () => document.querySelector('.overlay').classList.remove('hidden')

	// hides the RULES modal
	const hideModal = () => document.querySelector('.overlay').classList.add('hidden')

	// starts the game - by clicking a button
	const startGame = playerHand => {
		// sets the playersPick to the chosen button
		setPlayersPick(playerHand)

		// pick a hand for the computer
		let computerHand = characters[Math.floor(Math.random() * 5)]

		// repeat it, until it's not different than the player's hand
		while (computerHand === playerHand) {
			// get the computer's hand
			computerHand = characters[Math.floor(Math.random() * 5)]
		}

		// sets the computersPick to a random button
		setComputersPick(computerHand)

		// evaluates the result
		const betterHand = rules.get(playerHand).includes(computerHand) ? 'player' : 'computer'

		// sets the winner
		setWinner(betterHand)

		// if Player won, score is incremented, otherwise decremented (til >=0)
		if (betterHand === 'player') setScore(prevScore => (prevScore += 1))
		else if (score > 0) setScore(prevScore => (prevScore -= 1))
	}

	// resets the game
	const newGame = () => {
		// sets the playersPick to null
		setPlayersPick(null)

		// sets the computersPick to null
		setComputersPick(null)

		// sets the winner to null
		setWinner(null)
	}

	// prepares the hand buttons for rendering
	const hands = characters.map((char, idx) => {
		return <Hand key={idx} hand={char} handler={startGame} />
	})

	return (
		<div className='App'>
			<header>
				<img src='images/logo-bonus.svg' alt='Rock, Paper-Scissors-Lizard-Spock Game'></img>
				<div className='score'>
					<span className='score--text'>score</span>
					<span className='score--number'>{score}</span>
				</div>
			</header>
			<main className='content'>
				{!playersPick ? (
					<div className='content--top new-game'>
						{hands}

						<img className='pentagon' src='/images/bg-pentagon.svg' alt='Pentagon' title='Pentagon' />
					</div>
				) : (
					<div className='content--top'>
						<div className='content--top__player'>
							<div className={playerBtnClass}>
								<div className='btn-inner-circle'>
									<img src={playerImgClass} alt="Player's choice" title='You picked' />
								</div>
							</div>

							<span>you picked</span>
						</div>
						{computersPick ? (
							<div className='content--top__computer'>
								<div className={computerBtnClass}>
									<div className='btn-inner-circle'>
										<img src={computerImgClass} alt="Computer's choice" title='The house picked' />
									</div>
								</div>

								<span>the house picked</span>
							</div>
						) : (
							<div className='content--top__computer placeholder'></div>
						)}
					</div>
				)}

				{winner ? (
					<div className='content--bottom'>
						<span className='game-result'>{gameResultText}</span>
						<button className='play-again-btn' onClick={newGame}>
							play again
						</button>
					</div>
				) : (
					<></>
				)}
			</main>
			<button className='rules-btn' onClick={showModal}>
				RULES
			</button>
			<div className='attribution'>
				Challenge by
				<a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
					Frontend Mentor
				</a>
				. Coded by
				<a href='https://github.com/JT1974' target='_blank' rel='noreferrer'>
					Janos Takacs
				</a>
				.
			</div>
			<div className='overlay hidden'>
				<div className='modal'>
					<span className='modal--text'>RULES</span>
					<img
						className='modal--icon'
						src='/images/icon-close.svg'
						alt='Close modal window'
						title='Rules'
						onClick={hideModal}
					/>
					<img
						className='modal--image'
						src='/images/image-rules-bonus.svg'
						alt='Rules window'
						title='The rules of the game'
					/>
				</div>
			</div>
		</div>
	)
}

export default App

