import React, { Component } from 'react';
import Numbers from './Numbers';
import Header from './Header';
import AddAlbumButtons from './AddAlbumButtons';
import Albums from './Albums';
import AllPhotos from './AllPhotos';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			addToAlbumsClicked: false
		};
	}

	onPressAddToAlbum = () => {
		this.setState({ addToAlbumsClicked: true });
	};

	render() {
		if (this.state.addToAlbumsClicked === false) {
			return (
				<div>
					<Header />
					<AllPhotos />
					<AddAlbumButtons addToAlbum={this.onPressAddToAlbum} />
					<Albums />
				</div>
			);
		} else return (
			<div>
				<Header />
				<AllPhotos />
			</div>
		);
	}
}
