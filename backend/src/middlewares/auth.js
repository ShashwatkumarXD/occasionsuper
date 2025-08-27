const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Authenticate request using Bearer token
module.exports.authenticate = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization || "";
		const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
		if (!token) return res.status(401).json({ message: "Authentication required" });

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const user = await User.findById(decoded.id);
		if (!user) return res.status(401).json({ message: "Invalid token" });

		req.user = user;
		next();
	} catch (err) {
		return res.status(401).json({ message: "Invalid or expired token" });
	}
};

// Authorize roles
module.exports.authorizeRoles = (...allowedRoles) => {
	return (req, res, next) => {
		if (!req.user) return res.status(401).json({ message: "Authentication required" });
		if (!allowedRoles.includes(req.user.role)) {
			return res.status(403).json({ message: "Forbidden: insufficient permissions" });
		}
		next();
	};
};


