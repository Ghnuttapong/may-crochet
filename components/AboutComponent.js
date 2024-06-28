import { Box, Button, Container, Flex, Image, SimpleGrid, Text, Title } from '@mantine/core'
import React from 'react'
import { IoMdImages } from "react-icons/io";


export default function AboutComponent() {
  return (
    <Flex justify="center" align="center" className='h-100' id='about' py={50}>
        <Container>
                <SimpleGrid cols={{ base: 1, sm: 1, md: 2 }}>
                    <Box component='div'>
                        <Image radius="md" src="images/logo.jpg" width={400} height={400}  />
                    </Box>

                    <Box component='div'>
                        <Flex justify="center" h="100%" direction="column">
                            <Title order={2}>เกี่ยวกับ</Title>
                            <Text c="dark.2">ถักตุ๊กตาไหมพรม โครเชต์ งานฝีมือ จำหน่ายทั้งปลีกและส่งทั่วประเทศ</Text>
                            <Box mt={10}>
                                <Button c="pink" variant='outline' component='a' href='#gallery' leftSection={<IoMdImages />}>
                                    แกลเลอรี่
                                </Button>
                            </Box>
                        </Flex>
                    </Box>
                </SimpleGrid>
        </Container>
    </Flex>
  )
}
