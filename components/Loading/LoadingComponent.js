import React from 'react'
import { MantineProvider, Loader, Center, Image, Flex, Text } from '@mantine/core';
// import { CssLoader } from './CssLoader';
// import './CssLoader.css'
import "./Loading.css";

export default function LoadingComponent() {
  return (
    <Center maw="100vw" h="100vh">
      <Flex direction="column" gap={10} align="center">
        <Image src="images/logo.jpg" radius="50%" width={40} height={40} />
        <Text fw={700} size='lg'>Crochet by Mniratch</Text>
        <Loader className='loader' />
      </Flex>
    </Center>
  )
  
}