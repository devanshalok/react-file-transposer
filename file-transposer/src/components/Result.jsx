import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Result () {
  const [details, setDetails] = useState ('');

  useEffect (() => {
    setDetails (JSON.parse (localStorage.getItem ('preUploadData')));
  }, []);
  return (
    <div className='postUploadWrapper'>
      <h1>Post Upload Page</h1>
        <div>
            <b>Original File Name : </b> {details?.originalFileName}
        </div>
        <div>
            <b>Custom File Name : </b>{details?.customName}
        </div>
        <div>
            <b>No. of Lines : </b>{details?.countOfLines}
        </div>
        <div>
            <b>File Size : </b>{details?.originalFileSize} Bytes
        </div>
        <br />
      <div className='btnArea'>
      <a href={`${details?.customName}`} className="primaryBtn" download>download File</a>
      <Link to={'/'} className="primaryBtn">Add Another</Link>

      </div>
    </div>
  );
}

export default Result;
