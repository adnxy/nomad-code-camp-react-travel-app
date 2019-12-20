import React from 'react';
import logo from './images/logo.png';
import searchIcon from './images/search-icon.png';

export default function Header() {
	return (
		<div>
			<div className="navigation">
				<div className="navigation-logo">
					<img className="navigation-logo-img" src={logo} />
					<p className="navigation-logo-title">My Photo Album</p>
				</div>
				<div className="navigation-container">
					<button className="navigation-button" type="button">
						New Album
					</button>
					<img className="navigation-search-img" src={searchIcon} />
					<p className="navigation-search-text">Search</p>
				</div>
			</div>
		</div>
	);
}
