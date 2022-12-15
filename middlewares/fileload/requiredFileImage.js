export const accessFiles = (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.image) {
    res
      .status(400)
      .json({
        msg: "No se puede subir archivos debe incluir en el form data la key image",
      });
    return;
  }
  //console.log(req.files)
  next();
};
