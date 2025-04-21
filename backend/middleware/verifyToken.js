import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) return res.status(401).json({ success: false, message: "No autorizado - no se proporcionó token" });
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) return res.status(401).json({ success: false, message: "No autorizado - token no válido" });

		req.userId = decoded.userId;
		next();
	} catch (error) {
		console.log("Error en verifyToken ", error);
		return res.status(500).json({ success: false, message: "Server error" });
	}
};
