import { Box, Flex, SimpleGrid, Title } from '@mantine/core'
import React, { Fragment, useEffect } from 'react'


import { Gallery, Item } from 'react-photoswipe-gallery'

export default function GalleryComponent() {
    const dataImages = [
        {
            original: "images/carousel/image1.jpg",
            thumbnail: "images/carousel/image1.jpg",
        },
        {
            original: "images/carousel/image2.jpg",
            thumbnail: "images/carousel/image2.jpg",
        },
        {
            original: "images/carousel/image3.jpg",
            thumbnail: "images/carousel/image3.jpg",
        },
    ]

  return (
    <Fragment>
        {dataImages.length > 0 && (
            <Box component='div' className='h-100' py={40} bg={'#f9f8f7'} id='gallery'>
                <Title ta="center" order={2}>แกลเลอรี่</Title>
                <Box pt={20}>
                    <Gallery>
                        <Flex wrap="wrap" justify="center" className='galleryImages'>
                        {dataImages.map((ele, index) => (
                            <Box key={index}>
                                <Item
                                    id={index}
                                    original={ele.original}
                                    thumbnail={ele.thumbnail}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={ele.thumbnail} />
                                    )}
                                </Item>
                            </Box>
                        ))}
                        </Flex>
                    </Gallery>
                </Box>
            </Box>
        )}
    </Fragment>
  )
}