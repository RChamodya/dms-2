import React from "react";

interface FolderProps {
  name: string;
}

const Folder: React.FC<FolderProps> = ({ name }) => {
  return (
    <div>
      <h3>Folder Name: {name}</h3>
    </div>
  );
};

export default Folder;
