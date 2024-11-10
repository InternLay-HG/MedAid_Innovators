const roleMiddleware = (role) => {
    return (req, res, next) => {
      if (req.user && req.user.type === role) {
        next(); // User has the correct type, proceed to the route handler
      } else {
        return res.status(403).json({ message: "Access forbidden: Insufficient privileges" });
      }
    };
  };
  
  export default roleMiddleware;
  