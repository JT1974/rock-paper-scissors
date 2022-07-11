import { useEffect, useState } from 'react'
import Hand from './components/Hand'

function App() {
	const [score, setScore] = useState(() => {
		const storedScore = +localStorage.getItem('rpsls-score')
		return storedScore
	})
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

	const gameResultText = winner === 'player' ? 'you win' : winner === 'computer' ? 'you lose' : `it's a tie`

	//saves the score in localStorage
	useEffect(() => localStorage.setItem('rpsls-score', score), [score])

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

		// sets the computersPick to a random button
		setComputersPick(computerHand)

		// evaluates the result
		const betterHand =
			playerHand === computerHand ? 'tie' : rules.get(playerHand).includes(computerHand) ? 'player' : 'computer'

		// sets the winner
		setWinner(betterHand)

		// if Player won, score is incremented, otherwise decremented (til >=0)
		if (betterHand === 'player') setScore(prevScore => (prevScore += 1))
		else if (betterHand === 'computer' && score > 0) setScore(prevScore => (prevScore -= 1))

		// dsiplaying the result
		const timer = setInterval(() => {
			document.querySelector('.content--result').style.display = 'flex'

			if (betterHand !== 'tie')
				document.querySelector(
					`.content--${betterHand}`
				).firstElementChild.style.boxShadow = `0 0 0 5em hsla(0, 0%, 100%, 0.05), 0 0 0 10em hsla(0, 0%, 100%, 0.03),
				0 0 0 15em hsla(0, 0%, 100%, 0.01)`

			return clearInterval(timer)
		}, 3000)
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
				<h1>
					<img
						src='rock-paper-scissors/images/logo-bonus.svg'
						alt='Rock, Paper-Scissors-Lizard-Spock Game'
					></img>
				</h1>

				<div className='score'>
					<span className='score--text'>score</span>
					<span className='score--number'>{score}</span>
				</div>
			</header>
			<main className='content'>
				{!playersPick ? (
					<div className='content--start-game'>
						{hands}
						<img className='pentagon' src='rock-paper-scissors/images/bg-pentagon.svg' alt='Pentagon' />
					</div>
				) : (
					<div className='content--player'>
						<Hand hand={playersPick} />
						<span>you picked</span>
					</div>
				)}
				{!computersPick ? (
					playersPick && <div className='content--computer placeholder'></div>
				) : (
					<div className='content--computer'>
						<Hand hand={computersPick} />
						<span>the house picked</span>
					</div>
				)}
				{!winner ? (
					<></>
				) : (
					<div className='content--result'>
						<span className='game-result'>{gameResultText}</span>
						<button className='play-again-btn' onClick={newGame}>
							play again
						</button>
					</div>
				)}
			</main>
			<footer>
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
			</footer>

			<div className='overlay hidden'>
				<div className='modal'>
					<span className='modal--text'>RULES</span>
					<img
						className='modal--icon'
						src='rock-paper-scissors/images/icon-close.svg'
						alt='Close modal window'
						title='Rules'
						onClick={hideModal}
					/>

					<img
						className='modal--image'
						src='rock-paper-scissors/images/image-rules-bonus.svg'
						alt='Rules window'
						title='The rules of the game'
					/>
				</div>
			</div>
		</div>
	)
}

export default App

