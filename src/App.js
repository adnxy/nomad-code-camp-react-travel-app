import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import AllPhotos from './AllPhotos';
import Albums from './Albums';

import AddAlbumButtons from './AddAlbumButtons';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<AllPhotos />
				<AddAlbumButtons />
				<Albums />
			</div>
		);
	}
}
