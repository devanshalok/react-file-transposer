const express = require ('express');
const app = express ();
const multer = require ('multer');

// setup multer for file upload
var storage = multer.diskStorage ({
  destination: './file-transposer/build',
  filename: function (req, file, cb) {
    console.log (file.originalname);
    console.log (req.headers.customname);
    cb (null, req.headers.customname);
  },
});

const upload = multer ({storage: storage});

app.use (express.json ());
// serving front end build files
app.use (express.static (__dirname + '/file-transposer/build'));

// route for file upload
app.post (
  '/api/uploadfile',
  upload.single ('myFile'),
  async (req, res, next) => {
    console.log (req.file.originalname + ' file successfully uploaded !!');
    console.log ('custom name : ', req.headers.customname);
    const count = await processLineByLine (
      `./file-transposer/build/${req.headers.customname}`
    );
    res.send ({countOfLines: count}).status (200);
  }
);

const fs = require ('fs');
const readline = require ('readline');

async function processLineByLine (filename) {
  const fileStream = fs.createReadStream (filename);

  const rl = readline.createInterface ({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: I used the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.
  let data = [];
  let countOfLines = 0;
  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log (`Line from file: ${line}`);
    data.push (line);
    countOfLines++;
  }

  let updatedArray = [];

  for (let i = 0; i < data.length; i++) {
    if ((i + 1) % 2 === 0) {
      updatedArray[i - 1] = data[i];
    } else {
      updatedArray[i + 1] = data[i];
    }
  }
  console.log ('Original arr : ', data);
  console.log ('Updated Arr : ', updatedArray);

  console.log (countOfLines);

  const file = fs.createWriteStream (filename);

  file.on ('error', err => {
    /* error handling */
    console.log (err);
  });

  updatedArray.forEach (v => {
    file.write (v + '\n');
  });

  return countOfLines;
}

app.listen (3000, () => console.log ('Listening on port 3000'));
