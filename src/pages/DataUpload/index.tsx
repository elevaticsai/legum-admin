import React from 'react';
import { DataUploadPanel } from '../../components/DataUploadPanel';
import { useDataManagement } from '../../hooks/useDataManagement';

export const DataUploadPage = () => {
  const { files, handleFileUpload } = useDataManagement();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Data Upload</h1>
      <DataUploadPanel 
        files={files} 
        onFileUpload={handleFileUpload} 
      />
    </div>
  );
};