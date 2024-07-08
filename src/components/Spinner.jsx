import React from 'react';
import { ClipLoader } from 'react-spinners';
import '../styles/Spinner.scss';

const Loader = () => (
  <>
    <div className="loader-container">
      <ClipLoader size={50} color={"#123abc"} loading={true} />
    </div>
    <p className='loading-msg'>The server is currently asleep but will spin up soon. This may take up to 50 seconds. Thank you for your patience!</p>
  </>
);

export default Loader;
