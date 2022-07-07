function App() {
	return (
		<div className='App'>
			<header>
				<img src='images/logo-bonus.svg' alt='Rock, Paper-Scissors-Lizard-Spock Game'></img>
				<div className='score'>
					<span className='score--text'>score</span>
					<span className='score--number'>{12}</span>
				</div>
			</header>
			<main className='content'>
				{/* 
					Változáskor a content div tartalmát változtatjuk, egy üres fragment-be csomagoljuk a lenti kódtömbök egyikét.

					Új játéknál és játék közben csak a content--top-ot rendereljük, új játéknál kap egy 'new-game' stílust is, ami lecsökkenti a gombok méretét.

					Amint a játékos klikkelt, az új content--top már 'new-game' stílus nélkül renderelődik, és ha megvan a nyertes, akkor a content--bottom is renderelődik, illetve a nyertes gombjának 'content--top__btn'-ja kap egy 'winner' stílust is,, ami a glow a gomb körül.

					Mielőtt a számítógép karakterét kitennénk, ki kell tenni egy üres 'content--top__computer'-t ami kap egy 'placeholder' stílust is.
				*/}
				<div className='content--top new-game'>
					<div className='content--top__btn player-choice scissors'>
						<div className='btn-inner-circle'>
							<img src='/images/icon-scissors.svg' alt='Scissors' title='Scissors' />
						</div>
					</div>
					<div className='content--top__btn player-choice paper'>
						<div className='btn-inner-circle'>
							<img src='/images/icon-paper.svg' alt='Paper choice' title='Paper choice' />
						</div>
					</div>
					<div className='content--top__btn player-choice rock'>
						<div className='btn-inner-circle'>
							<img src='/images/icon-rock.svg' alt='Rock choice' title='Rock choice' />
						</div>
					</div>
					<div className='content--top__btn player-choice lizard'>
						<div className='btn-inner-circle'>
							<img src='/images/icon-lizard.svg' alt='Lizard choice' title='Lizard choice' />
						</div>
					</div>
					<div className='content--top__btn player-choice spock'>
						<div className='btn-inner-circle'>
							<img src='/images/icon-spock.svg' alt='Spock choice' title='Spock choice' />
						</div>
					</div>

					<img className='pentagon' src='/images/bg-pentagon.svg' alt='Pentagon' title='Pentagon' />

					{/* <div className='content--top__player'>
						<div className='content--top__btn lizard winner'>
							<div className='btn-inner-circle'>
								<img src='/images/icon-lizard.svg' alt="Player's choice" title='You picked' />
							</div>
						</div>

						<span>you picked</span>
					</div>
					<div className='content--top__computer'>
						<div className='content--top__btn spock'>
							<div className='btn-inner-circle'>
								<img src='/images/icon-spock.svg' alt="Computer's choice" title='The house picked' />
							</div>
						</div>

						<span>the house picked</span>
					</div> */}
				</div>
				{/* <div className='content--bottom'>
					<span className='game-result'>you win</span>
					<button className='play-again-btn'>play again</button>
				</div> */}
			</main>
			<button className='rules-btn'>RULES</button>
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
			{/* <div className='overlay'>
				<div className='modal'>
					<span className='modal--text'>RULES</span>
					<img className='modal--icon' src='/images/icon-close.svg' alt='Close modal window' title='Rules' />
					<img
						className='modal--image'
						src='/images/image-rules-bonus.svg'
						alt='Rules window'
						title='The rules of the game'
					/>
				</div>
			</div> */}
		</div>
	)
}

export default App

