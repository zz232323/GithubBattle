import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

export default class Home extends React.Component {
	render() {
		const jumbotronStyle = {
			'top' : '20px',
			'left' : '10%',
			'right' : '10%',
			'background':'transparent',
			'textAlign': 'center'
		}
		return(
			<div>
				<div className="container">
					<div className="jumbotron jumbotron-fluid" style={jumbotronStyle}>
						<h1 className="display-3">Github Battle</h1>
						<p className="lead">This is an app to start a Github Battle!</p>
         				<Link to='/playerone' className="btn btn-primary btn-lg">Start the Battle</Link>
					</div>
				</div>
			</div>
		)
	}
}