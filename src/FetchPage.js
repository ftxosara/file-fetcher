import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const FetchPage = () => {
  const [pageName, setPageName] = useState("");
  const [method, setMethod] = useState("get");
  const [content, setContent] = useState("");

  const fetchPage = async () => {
    try {
      const response = await axios({
        method: method,
        url: `http://localhost:5000/${pageName}`,
      });
      setContent(response.data);
    } catch (error) {
      console.error("Error fetching the page", error);
      setContent("Error fetching the page");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Fetch Page</h1>
      <div className="form-group">
        <label htmlFor="pageName">Nombre de la página HTML</label>
        <input
          type="text"
          className="form-control"
          id="pageName"
          value={pageName}
          onChange={(e) => setPageName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="method">Método de solicitud HTTP</label>
        <select
          className="form-control"
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="get">GET</option>
          <option value="post">POST</option>
        </select>
      </div>
      <button className="btn btn-primary mt-3" onClick={fetchPage}>
        Fetch Page
      </button>
      <div className="mt-5">
        <iframe
          title="Page Content"
          srcDoc={content}
          style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}
        />
      </div>
    </div>
  );
};

export default FetchPage;
