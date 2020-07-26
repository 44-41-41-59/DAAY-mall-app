import React, { useState } from 'react';
// import { handleUpload }  from '../../firebase';
import { handleUpload } from '../../store/actions/files';
import { connect } from 'react-redux';

const ReactFirebaseFileUpload = (props) => {
  const [images, setImage] = useState({});
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(e.target.files);
    }
  };

  const handleUpload = () => {
    props.handleUpload('users', images);
  };

  return (
    <div>
      <progress value={progress} max="100" />
      <input multiple type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};
const actionCreater = (dispatch) => ({
  handleUpload: (spaceName, images) =>
    dispatch(handleUpload(spaceName, images)),
});
export default connect(mapStateToProps, actionCreater)(ReactFirebaseFileUpload);
