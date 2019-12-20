import React from 'react'

export default function AddAlbumButtons() {
	return (
				<div class="album-buttons-container">
		<button class="add-button-first-album" type="button"
			onclick='addToAlbum(".first-album-container", ".images-container-chiang-mai", ".add-button-first-album")'>Add to
			Album 1</button>
		<button class="add-button-second-album" type="button"
			onclick='addToAlbum(".second-album-container",".images-container-prague", ".add-button-second-album")'>Add to
			Album 2</button>
		<button class="add-button-third-album" type="button"
			onclick='addToAlbum(".third-album-container", ".images-container-medellin", ".add-button-third-album")'>Add to
			Album 3</button>
		</div>
	)
}
