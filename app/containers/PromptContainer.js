import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

export default class Prompt extends React.Component {
	render() {
		console.log(this);
		const jumbotronStyle = {
			'top' : '20px',
			'left' : '10%',
			'right' : '10%',
			'background':'transparent',
			'textAlign': 'center'
		}
		return (
			<div>
				<div className="container">
					<div className="jumbotron jumbotron-fluid" style={jumbotronStyle}>
						<h3>This is Player One</h3>
						<form>
							<div className="form-group">
								<input className="form-control" placeholder="Input Player Name"/>
							</div>
							<div className="col-sm-4 col-sm-offset-4">
								<Link to='/playertwo' className="btn btn-primary btn-lg ">Start the Battle</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
