import React from 'react';

import cmBuddahImage from './images/cm-buddah.jpeg';
import cmFieldsImage from './images/cm-fields.jpeg';
import cmTempleImage from './images/cm-temple.jpeg';
import cmHotelImage from './images/cm-hotel.jpeg';

import pragueBridgeImage from "./images/prague-bridge.jpg";
import pragueHotelImage from "./images/prague-hotel.jpeg";
import pragueOldTownImage from "./images/prague-oldtown.jpg";
import pragueRiverImage from "./images/prague-river.jpg";

import medellinHillImage from "./images/medellin-hill.jpg";
import medellinNatureImage from "./images/medellin-nature.jpeg";
import medellinSlumImage from "./images/medellin-slum.png";
import medellinTownImage from "./images/medellin-town.jpeg";

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
					<img className="photos-chiang-mai" src={cmFieldsImage} />
					<img className="photos-chiang-mai" src={cmTempleImage}/>
					<img className="photos-chiang-mai" src={cmHotelImage} />
				</div>
				<div className="images-container-prague">
					<div className="title-container">
						<h2 className="title-prague">Prague</h2>
					</div>
					<img className="photos-prague" src={pragueBridgeImage} />
					<img className="photos-prague" src={pragueHotelImage} />
					<img className="photos-prague" src={pragueOldTownImage} />
					<img className="photos-prague" src={pragueRiverImage} />
				</div>
				<div className="images-container-medellin">
					<div className="title-container">
						<h2 className="title-medellin">Medellin</h2>
					</div>
					<img className="photos-medelin" src={medellinHillImage} />
					<img className="photos-medelin" src={medellinNatureImage} />
					<img className="photos-medelin" src={medellinSlumImage} />
					<img className="photos-medelin" src={medellinTownImage} />
				</div>
			</div>
		</div>
	);
}
