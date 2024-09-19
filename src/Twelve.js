//CREATE A FILE UPLOADER FOR USER TO UPLOAD IMAGE
import React from 'react'

const Twelve = () => {

    const [file,setFile] = React.useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }
  return (
    <div>
      <input type="file" accept='image/*' onChange={handleFileChange}/>
      {file && <img src={URL.createObjectURL(file)} alt='uploaded' />}
    </div>
  )
}

export default Twelve
