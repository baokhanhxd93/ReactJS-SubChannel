import { useState } from 'react'
import Content from './Content'
import './App.css';

// Fake comments
function emitComment(id) {
	setInterval(() => {
		window.dispatchEvent(
			new CustomEvent(`lesson-${id}`, {detail: `Content of lesson ${id}`}) 
		)
	}, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

function App() {
	const [toggle, setToggle] = useState(false)

	return (
		<div>
			<button onClick={() => setToggle(!toggle)}>Toggle</button>
			{toggle && <Content />}
		</div>
	);
}

export default App;
