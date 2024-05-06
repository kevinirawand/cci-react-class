import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Fragment } from 'react';

function OurButton({ type = 'submit' }) {
	return (
		<button
			style={{
				backgroundColor:
					type === 'submit'
						? 'blue'
						: type === 'draft'
						? 'grey'
						: 'red',
			}}
		>
			THIS OUR {type} BUTTON
		</button>
	);
}

function App() {
	return (
		<>
			<h1
				className="heading"
				style={{ color: 'white', backgroundColor: 'skyblue' }}
			>
				<OurButton />
				<OurButton type={'draft'} />
				<OurButton type={'cancel'} />
			</h1>
		</>
	);
}

export default App;
