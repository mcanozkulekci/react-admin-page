module.exports = (req, res, next) => {
	res.header("Content-Range", "posts 0-3/3");
	next();
};
