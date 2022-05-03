import React, {useState} from 'react';
import {FileUploader} from 'react-drag-drop-files';
import uploadIcon from '../upload.png';
import axios from 'axios';
import { Link } from "react-router-dom";



function Uploader () {
  const [customName, setCustomName] = useState ('');
  const [file, setFile] = useState (null);
  const [loading, setLoading] = useState (false);
  const [isUploaded,setIsUploaded] = useState(false);

  const handleChange = file => {
    console.log (file);
    setFile (file);
  };

  const handleSubmit = e => {
    setLoading (true);
    e.preventDefault ();
    // console.log ('submitting!');
    // console.log ('custom name : ', customName);
    // console.log ('file : ', file);
    let modifiedName = `${customName}.${file.name.split ('.')[file.name.split ('.').length - 1]}`;
    // console.log ();
    // console.log (modifiedName);
    let necessaryData = {
      originalFileName: file.name,
      originalFileSize: file.size,
      customName: modifiedName,
      countOfLines: 0,
    };

   


    const formData = new FormData ();
    formData.append ('myFile', file);

    axios
      .post ('http://localhost:3000/api/uploadfile', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          customName: `${modifiedName}`,
        },
      })
      .then (response => {
        console.log (response);
        const {countOfLines} = response.data;
        necessaryData.countOfLines = countOfLines;
        localStorage.setItem ('preUploadData', JSON.stringify (necessaryData));
        setLoading (false);
        setIsUploaded(true);
        
      })
      .catch (Err => {
        console.log (Err);
        setLoading (false);
      });
  };

  return (
    <>
      <h1>React File Transposer</h1>
      <form>
        <input
          type="text"
          value={customName}
          onChange={e => {
            setCustomName (e.target.value);
          }}
          placeholder="Custom File Name"
        />
        <div className="uploadArea">
          <FileUploader
            handleChange={handleChange}
            name="file"
            children={
              <div className="UploadFileArea">
                <img src={uploadIcon} alt="upload" className="uploadIcon" />
                <p>
                  {file
                    ? `File Selected: ${file.name}`
                    : 'Click or Drag and Drop File'}
                </p>
              </div>
            }
          />
        </div>

        <button className="primaryBtn" type="buttton" onClick={handleSubmit} disabled={!customName || !file}>
          {loading ? 'uploading...' : 'Submit'}
        </button>
       {isUploaded &&  <Link to={'/result'} className="primaryBtn">Result</Link>}

      </form>

    </>
  );
}

export default Uploader;
