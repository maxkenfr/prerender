module.exports = {
	tabCreated: (req, res, next) => {
        console.log(req.headers);
        req.prerender.tab.Network.setExtraHTTPHeaders({
			headers: {
				...req.headers,
				'X-Prerender': '1'
			}
		});

		next();
	}
}