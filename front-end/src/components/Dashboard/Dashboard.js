import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import './Dashboard.css';

const Dashboard = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    // useEffect(() => {
    //     if(error) {
    //         alert.error(error);
    //         dispatch(clearErrors());
    //     }

    //     if(success) {
    //         alert.success('Image added successfully');
    //         dispatch({ type: NEW_MEDIA_RESET });
    //     }
    // }, [dispatch, alert, error, success])

    const submitHandler = e => {
        e.preventDefault();

        const formData = new FormData();
        images.forEach(image => {
            formData.append('images', image);
        });

        // dispatch(newMedia(formData))
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
    }

    //Added the html with all the states
    return (
        <div class="dashboard">
            {/* Nav             */}

            <form onSubmit={submitHandler} encType='multipart/form-data'>
                <div className='form-group'>
                    <label>Images</label>
                    <div className='custom-file'>
                        <input
                            type='file'
                            name='media_images'
                            className='custom-file-input'
                            id='customFile'
                            onChange={onChange}
                            multiple
                        />
                        <label className='custom-file-label' htmlFor='customFile'>
                            Choose Images
                        </label>
                    </div>
                    {imagesPreview.map(img => (
                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                    ))}
                </div>
                <button
                    id="login_button"
                    type="submit"
                    className="btn btn-block py-3"
                >
                    ADD MEDIA
                </button>
            </form>
        </div>
    )
}

export default Dashboard
