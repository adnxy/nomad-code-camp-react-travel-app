import React from 'react';
import cmBuddahImage from './images/cm-buddah.jpeg';

export default function AllPhotos() {
	return (
		<div>
			<h1 className="album-title">All Photos</h1>
			<div className="album-container">
				<div className="images-container-chiang-mai">
					<div className="title-container">
						<h2 className="title-chiang-mai">Chiang Mai</h2>
					</div>
					<img className="photos-chiang-mai" src={cmBuddahImage} />
					<img className="photos-chiang-mai" src="./images/cm-fields.jpeg" />
					<img className="photos-chiang-mai" src="./images/cm-hotel.jpeg" />
					<img className="photos-chiang-mai" src="./images/cm-temple.jpeg" />
				</div>
				<div className="images-container-prague">
					<div className="title-container">
						<h2 className="title-prague">Prague</h2>
					</div>
					<img className="photos-prague" src="./images/prague-bridge.jpg" />
					<img className="photos-prague" src="./images/prague-hotel.jpeg" />
					<img className="photos-prague" src="./images/prague-oldtown.jpg" />
					<img className="photos-prague" src="./images/prague-river.jpg" />
				</div>
				<div className="images-container-medellin">
					<div className="title-container">
						<h2 className="title-medellin">Medellin</h2>
					</div>
					<img className="photos-medelin" src="./images/medellin-hill.jpg" />
					<img className="photos-medelin" src="./images/medellin-nature.jpeg" />
					<img className="photos-medelin" src="./images/medellin-slum.png" />
					<img className="photos-medelin" src="./images/medellin-town.jpeg" />
				</div>
			</div>
		</div>
	);
}
