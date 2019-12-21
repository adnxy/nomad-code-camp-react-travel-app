import React from 'react'

export default function AddAlbumButtons(props) {
	return (
				<div className="album-buttons-container">
		<button className="add-button-first-album" type="button"
		onClick={props.addToAlbum}>Add to
			Album 1</button>
		<button className="add-button-second-album" type="button"
			onClick={props.addToAlbum}>Add to
			Album 2</button>
		<button className="add-button-third-album" type="button"
		onClick={props.addToAlbum}>Add to
			Album 3</button>
		</div>
	)
}
