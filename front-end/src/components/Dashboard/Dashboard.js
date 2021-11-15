import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import './Dashboard.css';

import { addMedia, clearErrors } from '../../Redux/Actions/mediaActions';
import { NEW_MEDIA_RESET } from '../../Redux/constants/mediaConstants';

const Dashboard = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const { error, success } = useSelector(state => state.newMedia);
    
    useEffect(() => {
        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if(success) {
            alert.success('Image added successfully');
            dispatch({ type: NEW_MEDIA_RESET });
        }
    }, [dispatch, alert, error, success])

    const submitHandler = e => {
        e.preventDefault();

        dispatch(addMedia({ images: images}))
    }

    const onChange = e => {

        const files = Array.from(e.target.files);

        setImagesPreview([]);
        setImages([]);

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if(reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result]);
                    setImages(oldArray => [...oldArray, reader.result]);
                }
            }

            reader.readAsDataURL(file);
        });

        uploadFilesLength();
    }

    const uploadFilesLength = () => {
        let inputFiles = document.getElementById("customFile");
        
        if(inputFiles.files.length >= 1) {
            inputFiles.classList.remove("input--center");
        } 
    }

    return (
        <div className="dashboard">

            <form onSubmit={submitHandler} encType='multipart/form-data'>
                <div className='form-group'>
                    <h2 className="form--heading">Upload your files</h2>
                    
                    <label className='custom--file-heading' htmlFor='customFile'>
                            File should be an image file
                    </label>
                    
                    <div className='custom-file'>
                        <input
                            type='file'
                            name='media_images'
                            className='custom-file-input input--center'
                            id='customFile'
                            onChange={onChange}
                            multiple
                        />
                        
                    </div>
                    
                    <div className="dashboard--preview">
                        {imagesPreview.map(img => (
                            <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                        ))}
                    </div>

                    <button
                        className="btn--upload-file login__btn"
                        type="submit"
                    >
                        ADD MEDIA
                    </button>
                </div>

            </form>

            
        </div>
    )
}

export default Dashboard;
