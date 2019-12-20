import React from 'react'
import placeholder from './placeholder.png'

export default function Albums() {
	return (
		<React.Fragment>
		<h1 class="album-title">Albums</h1>
		<div class="album-container">
			<div class="first-album-container">
				<div class="title-container">
					<h2>Album 1</h2>
				</div>
				<img class="album-photo-container-first" src={placeholder} />
				<img class="album-photo-container-first" src={placeholder} />
				<img class="album-photo-container-first" src={placeholder} />
				<img class="album-photo-container-first" src={placeholder} />
			</div>
			<div class="second-album-container">
				<div class="title-container">
					<h2>Album 2</h2>
				</div>
				<img class="album-photo-container-second" src={placeholder} />
				<img class="album-photo-container-second" src={placeholder} />
				<img class="album-photo-container-second" src={placeholder} />
				<img class="album-photo-container-second" src={placeholder} />
			</div>
			<div class="third-album-container">
				<div class="title-container">
					<h2>Album 3</h2>
				</div>
				<img class="album-photo-container-third" src={placeholder} />
				<img class="album-photo-container-third" src={placeholder} />
				<img class="album-photo-container-third" src={placeholder} />
				<img class="album-photo-container-third" src={placeholder} />
			</div>
			</div>
			</React.Fragment>
	)
}
