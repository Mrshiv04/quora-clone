import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import LeftFeed from './components/LeftFeed';
import RightFeed from './components/RightFeed';

function App() {
	return (
		<div className='App'>
			<Header />
			<h1>hello</h1>
			<div style={{ display: 'flex' }}>
				<LeftFeed />
				<Feed />
				<RightFeed />
			</div>
		</div>
	);
}

export default App;
