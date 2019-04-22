module.exports = {
	tabCreated: (req, res, next) => {
		req.prerender.tab.Network.setExtraHTTPHeaders({
			headers: {
				...req.headers,
				'X-Prerender': '1'
			}
		});

		next();
	}
}