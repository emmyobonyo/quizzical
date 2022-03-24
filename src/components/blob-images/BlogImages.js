import React from 'react';
import blobTop from '../../images/blobs.png';
import blobBottom from '../../images/blobs1.png';

function BlogImages() {
  return (
    <div>
      <img src={blobTop} className="blob-top" alt="top-blob" />
      <img src={blobBottom} className="blob-bottom" alt="bottom-blob" />
    </div>
  );
}

export default BlogImages;
