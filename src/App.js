import React from 'react';
import './App.css';
import Header from './Header';
import AllPhotos from './AllPhotos';
import AddAlbumButtons from './AddAlbumButtons';
import Albums from './images/Albums';

import React, { Component } from 'react';

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
