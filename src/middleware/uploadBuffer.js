const multer = require('multer');

// Memory storage (buffer)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = upload;
