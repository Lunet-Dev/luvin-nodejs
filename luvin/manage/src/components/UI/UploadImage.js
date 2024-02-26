import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import { uploadMedia } from '../../apis/media';
import { Error } from '../../utils/notifications';

function beforeUpload(file) {
  const isJpgOrPng =
    file.type === 'image/jpeg' ||
    file.type === 'image/png' ||
    file.type === 'image/gif';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG/GIF file!');
  }
  return isJpgOrPng;
}

const UploadImage = ({ value, onChange }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(value);

  const handleUpload = async ({ file }) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('files', file);
      const resFiles = await uploadMedia(formData);
      const [firstFile] = resFiles || [];
      const { url } = firstFile || {};
      onChange(url);
      setImageUrl(url);
    } catch (error) {
      Error(error.message);
    }
    setLoading(false);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  return (
    <Upload
      name="files"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action={async (file) => file}
      withCredentials
      beforeUpload={beforeUpload}
      customRequest={handleUpload}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default UploadImage;
