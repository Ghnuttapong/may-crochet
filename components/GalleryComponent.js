import { Box, Flex, Image, SimpleGrid, Title } from '@mantine/core'
import React, { Fragment, useEffect } from 'react'
import LightGallery from 'lightgallery/react';
import { IoImages } from "react-icons/io5";

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


export default function GalleryComponent() {

    const dataGalleryList = [
        {
            src: 'images/gallery/bag.jpg',
            alt: 'กระเป๋าจิ๋ว',
        },
        {
            src: 'images/gallery/bee.jpg',
            alt: 'ตุ๊กตาผึ้ง',
        },
        {
            src: 'images/gallery/crisamat.jpg',
            alt: 'ตุ๊กตาคริสต์มาส',
        },
        {
            src: 'images/gallery/dog.jpg',
            alt: 'ตุ๊กตาหมาน้อย',
        },
        {
            src: 'images/gallery/ghost.jpg',
            alt: 'ตุ๊กตาผีฮาโลวีน',
        },
        {
            src: 'images/gallery/chicken.jpg',
            alt: 'ตุ๊กตาไก่',
        },
        // {
        //     src: 'images/gallery/clound.jpg',
        //     alt: 'ตุ๊กตาก้อนเมฆ',
        // }
    ];
    
    return (
        <Fragment>
            <Box component='div' className='h-100' pt={40} bg={'#f9f8f7'} id='gallery'>
                <Title ta="center" order={2}>แกลเลอรี่</Title>
                <Box pt={20}>
                    <LightGallery
                            elementClassNames="customLightGallery"
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                        >
                            {dataGalleryList.map((ele, index) => (
                                <a href={ele.src} key={index}>
                                    <span className='overlay'>
                                        <span className='icon'>
                                            <IoImages size={20} />
                                        </span>
                                    </span>
                                    <img alt={ele.alt} src={ele.src} />
                                </a>
                            ))}
                    </LightGallery>
                </Box>
            </Box>

        </Fragment>
    )
}