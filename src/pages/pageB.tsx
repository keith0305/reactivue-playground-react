import { Link } from 'react-router-dom';

function PageB() {
	return (
		<div>
			<div className="text-5xl font-thin text-gray-300 mt-10 mb-5 mx-1">
				<span style={{ color: '#53c2df' }}>react</span>i<span style={{ color: '#40b983' }}>vue</span> demo
			</div>
			<div className="mb-4">
				<p>Current page: pageB</p>
				<Link to="/">
					<button>⬅ Back to Home</button>
				</Link>
			</div>
		</div>
	)
}

export default PageB
