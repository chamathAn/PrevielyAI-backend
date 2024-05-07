const checkAdmin = (req, res, next) => {
  if (req.auth.claims.metadata.role !== "admin") {
    
    return next(createError(401, "Unauthorized" + req.auth.claims.metadata.role)); 
  }
  next(); 
};

module.exports = checkAdmin;
