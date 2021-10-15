function register ({ registerHook, peertubeHelpers }) {
	registerHook({
		target: 'action:video-watch.player.loaded',
		handler: () => {
			// disable download
			var download_icon = document.querySelector('my-global-icon.icon-download');
			if (download_icon != null) {
				download_icon.parentElement.style.display = 'none';
			}
			download_icon = document.querySelector("my-global-icon[iconname='download']");
			if (download_icon != null) {
				download_icon.parentElement.style.display = 'none';
			}
		}
	})
}

export {
	register
}
