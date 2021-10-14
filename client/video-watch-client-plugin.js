function register ({ registerHook, peertubeHelpers }) {
	registerHook({
		target: 'action:video-watch.player.loaded',
		handler: () => {
			// disable download
			document.querySelector('my-global-icon.icon-download').parentElement.style.display = 'none';
			document.querySelector("my-global-icon[iconname='download]'").parentElement.style.display = 'none';
		}
	})
}

export {
	register
}
