import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [category, setCategory] = useState('');
  const [descpriction, setDescription] = useState('');

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the form submission here
    const formData = new FormData();
    formData.append('image', file);
    try {
      const response = await fetch('http://127.0.0.1:5000/classifywaste', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        const data = await response.json();

        console.log(data.Data[0]);
        console.log(`The waste is ${data.Data[0]}.`);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
  <label htmlFor="file-input" className="block text-gray-700 font-bold mb-2">
    Select an image:
  </label>
  <div className="flex items-center justify-center w-full">
    <label
      htmlFor="file-upload"
      className="flex flex-col items-center justify-center w-full px-4 py-6 bg-white text-blue rounded-lg shadow-md tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-white"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.555 3.329c.13-.276.353-.329.471-.329h8.947c.118 0 .341.053.471.329l1.053 2.219h-12.94l1.053-2.219zM16.389 6.096c.012-.025.021-.051.033-.076.102-.242.27-.356.478-.356h1.25c.28 0 .437.157.478.356.013.025.022.051.034.076l1.842 3.89c.14.296.048.534-.227.534h-4.027l-1.027-2.171h-2.04l-1.027 2.171h-4.027c-.275 0-.367-.238-.227-.534l1.842-3.89zM5.555 8.095h8.89l-1.67 3.524h-5.55l-1.67-3.524z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="mt-2 text-base leading-normal">
        Select a file
      </span>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileSelect}
      />
    </label>
  </div>
  {preview && (
    <img
      src={preview}
      alt="Preview"
      className="mt-4 mx-auto max-w-sm rounded-lg shadow-lg"
    />
  )}
  <button
    type="submit"
    className="mt-4 px-4 py-2 bg-black text-white rounded-full font-semibold disabled:opacity-50"
    disabled={!file}
  >
    Upload
  </button>
</form>

  );
};

export default Upload;