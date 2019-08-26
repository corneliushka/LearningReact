import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import axios from 'axios'

function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader()

        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)

        axios.post('https://back.referoo.org/file/upload/pdf', {
            headers: { 'Content-Type': 'application/pdf'}
        })
            .then(function (rep) {
            console.log(rep);
            })
            .catch(function (error) {
            console.log(error);
            });

            }
        acceptedFiles.forEach(file => reader.readAsBinaryString(file))
    }, [])
    const {getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles, acceptedFiles} = useDropzone({onDrop})
    // const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;



    return (
        <div className="dropzone" {...getRootProps({
        })}>
            <input {...getInputProps()} />
            {!isDragActive && 'Click here or drop a file to upload !'}
            {isDragActive && !isDragReject && "Drop like it's hot !"}
            {isDragReject && "File type not accepted, sorry. (PDF/Doc/Docx only"}
{/*             {isFileTooLarge && (
                <div>
                    File is too large.
                </div>
            )} */}
            <ul className="list-group mt-2">
                {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                    <li>
                        {acceptedFile.name}
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default MyDropzone