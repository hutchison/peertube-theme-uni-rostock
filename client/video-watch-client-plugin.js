function register ({ registerHook, peertubeHelpers }) {
	registerHook({
		target: 'action:video-watch.player.loaded',
		handler: () => {
			// disable download
			document.getElementById('download-direct').parentElement.style.display = 'none'
		}
	})
}

export {
  register
}
