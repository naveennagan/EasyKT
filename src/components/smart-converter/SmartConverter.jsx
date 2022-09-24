import React, { useContext, useState } from "react";
import "./SmartConverter.css";

export const SmartConverter = () => {
  return (
    <div className="search-bot row justify-content-center p-5">
      <div className="file-input">
        <label for="formFileLg" class="form-label">
          Upload Markdown Files of your existing projects to generate workflows.
        </label>
        <input
          class="form-control form-control-lg mt-5"
          id="formFileLg"
          type="file"
          placeholder="README.md"
        />
      </div>
    </div>
  );
};
