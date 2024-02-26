import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { uploadArray } from '../../apis/upload';

function Upload({ initFiles, onUploaded, maxFiles }) {
  const [files, updateFile] = useState(initFiles || []);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: maxFiles || 20,
    accept: 'image/*',
    onDrop: async (acceptedFiles) => {
      try {
        const formData = new FormData();
        for (let index = 0; index < acceptedFiles.length; index++) {
          const file = acceptedFiles[index];
          formData.append('files', file);
        }
        const response = await uploadArray(formData);
        const cleanFiles = response.data.map(
          ({ path }) =>
            `${process.env.REACT_APP_API_ENDPOINT.replace(
              '/v1',
              ''
            )}/public/uploads/${path}`
        );
        updateFile(cleanFiles);
        onUploaded(cleanFiles);
      } catch (error) {}
    },
  });

  return (
    <div {...getRootProps({ className: 'dropzone' })} id="categoryImage">
      <input {...getInputProps()} />
      {!files.length ? (
        <div class="dz-message needsclick" style={{ fontSize: '14px' }}>
          <div class="mb-3">
            <i class="display-4 text-muted bx bxs-cloud-upload"></i>
          </div>

          <p>Drop files here or click to upload.</p>
        </div>
      ) : (
        <>
          {files.map((file) => (
            <div
              class="dz-preview"
              // style={{ display: 'flex', flexWrap: 'wrap', zIndex: 0 }}
            >
              <>
                <div class="dz-image mr-2">
                  <img
                    data-dz-thumbnail=""
                    alt="d7ea7ddfbec5bc772ef8ddb3599900c3.jpg"
                    src={file}
                    style={{ height: '120px' }}
                  />
                </div>
              </>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

Upload.propTypes = {};

export default Upload;
