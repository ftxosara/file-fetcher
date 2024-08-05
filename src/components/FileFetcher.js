import React, { useState } from 'react';
import axios from 'axios';

const FileFetcher = () => {
  const [pageName, setPageName] = useState('');
  const [method, setMethod] = useState('get');
  const [content, setContent] = useState('');

  const fetchPage = async () => {
    try {
      const response = await axios({
        url: `http://localhost:5000/get-file?name=${pageName}`,
        method: method
      });
      setContent(response.data);
    } catch (error) {
      console.error('Error fetching the page', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="form-group">
        <label htmlFor="pageName">Nombre de página html</label>
        <input
          type="text"
          className="form-control"
          id="pageName"
          placeholder="e.g., pag1.html"
          value={pageName}
          onChange={e => setPageName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="method">Método de solicitud HTTP</label>
        <select
          className="form-control"
          id="method"
          value={method}
          onChange={e => setMethod(e.target.value)}
        >
          <option value="get">GET</option>
          <option value="post">POST</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={fetchPage}>Fetch Page</button>
      <div className="mt-4">
        <iframe
          srcDoc={content}
          style={{ width: '100%', height: '500px', border: 'none' }}
          title="Fetched Page"
        ></iframe>
      </div>
    </div>
  );
};

export default FileFetcher;
