import React, { useEffect, useRef, useState } from 'react';
import { Box, CardMedia } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

interface MediaCarouselProps {
    videos: string[];
    images: string[];
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ videos, images }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video && index !== activeSlide) {
                video.pause();
            }
        });
    }, [activeSlide]);

    const mediaItems = [
        ...videos.map((video, index) => (
            <Box
                component={'div'}
                key={video}
                sx={{
                    position: 'relative',
                    paddingTop: '56.25%',
                    width: '100%',
                }}
            >
                <CardMedia
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1,
                        transform: 'translateY(-50%)',
                    }}
                    component="video"
                    controls
                    src={video}
                    ref={(el) => (videoRefs.current[index] = el)}
                />
            </Box>
        )),
        ...images.map((image) => (
            <CardMedia
                key={image}
                component="img"
                height="250"
                image={image}
                sx={{ objectFit: 'contain' }}
                alt="app screenshot"
            />
        )),
    ];
    return (
        <>
            {mediaItems.length > 0 ? <Carousel
                fullHeightHover={false}
                onChange={(index) => setActiveSlide(index!!)}
            >
                {mediaItems}
            </Carousel> : null}
        </>
    );
};

export default MediaCarousel;