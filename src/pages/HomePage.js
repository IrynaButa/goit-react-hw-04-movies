import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';
//import Axios from 'axios';
import { getTrending } from '../service/tmdbAPI';
import MovieList  from '../components/MovieList';

import s from '../components/MovieList.module.css'

class HomePage extends Component {
	state = {
		trends: [],
		isLoading: false,
		error: null,
	};

	componentDidMount() {
		this.setState({ isLoading: true, error: null });
		getTrending()
			.then(trends => this.setState({ trends }))
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { trends, isLoading, error } = this.state;

		return (
			<div className="container">
				<h1>Trends</h1>
				{error && <p style={{ color: 'red' }}>{error.message}</p>}
                {trends.length &&
                    <MovieList movies={trends} />}
				{/* {isLoading && <Loader />} */}
			</div>
		);
	}
}
export default HomePage;