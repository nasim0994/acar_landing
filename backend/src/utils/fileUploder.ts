import multer from 'multer';

export const fileUploder = (uploadPath: string, fileSize: number) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.cwd() + `/uploads/${uploadPath}`);
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });

  return multer({
    storage: storage,
    limits: { fileSize },
  });
};
