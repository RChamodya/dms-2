import React from "react";

interface FileProps {
  name: string;
}

const Files: React.FC<FileProps> = ({ name }) => {
  return (
    <div>
      <h3>File Name: {name}</h3>
    </div>
  );
};

export default Files;
