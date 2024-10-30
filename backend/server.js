const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');


const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());
/* app.use(helmet({
    contentSecurityPolicy: false
})); */
const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage, limits: { fileSize: 2e+6 } });

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post("/upload", upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Please upload a file' });
    }
    res.status(200).json({
        message: 'File uploaded successfully',
        filePath: `/uploads/${req.file.filename}`
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});