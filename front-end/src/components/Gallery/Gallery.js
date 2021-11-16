import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert'
import './Gallery.css';

import Loader from '../Layout/Loader';
import { getMediaFiles } from '../../Redux/Actions/mediaActions';


const Gallery = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, medias, error } = useSelector(state => state.medias)

    useEffect(() => {
        dispatch(getMediaFiles());
        
        if(error) return alert.error(error);

    }, [dispatch, error, alert])
    
    
    return (
        <Fragment>
             {loading ? <Loader /> : (
                <div>
                    <div className="gallery--padding">
                        <h1 className="galllery--heading">Koos Kombuis</h1>
                    </div>
                
                    <div className="container" data-aos="fade-up">
                        {medias && medias.map(media => (
                            <picture key={media._id}>
                                <img src={media.images[0].url} alt="" />
                            </picture>
                        ))}

                    </div>
                
                </div>
        )}
        </Fragment>
    )
}

export default Gallery
