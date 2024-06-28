import { BackgroundImage, Flex, Image, Stack, Text, Container, NavLink, Box, Grid, SimpleGrid, Burger, Drawer, Title, Button, Card, Space } from "@mantine/core";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay} from 'swiper/modules';
import { FaFacebook } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroComponent() {

    return (
        <Box component="div" className="container-hero h-100" id="home">
            <Box pt={30} component="div" className="overlay">
                <Flex align="center" gap={10} component="a" href="/" className="logo underline-none">
                    <Image src="images/logo.jpg" className="imageLogo" w={70} h={70} radius="50%" alt="Crochet by Mniratch" />
                    <Title order={2} c="white" >Crochet by Mniratch</Title>
                </Flex>

                <Flex justify="center" align="center" className="overlay-text" data-aos="fade-up">
                    <Card
                        shadow="sm"
                        padding="xl"
                        className="card"
                    >
                        <Title ta="center" c="white" order={2}>
                            งานไหมพรมโครเชต์
                        </Title>

                        <Text ta="center" mt="xs" c="white" lineClamp={3} className="text-detail" title="ไหมพรมโคเชรต์ มีความแข็งแรงและทนทาน เป็นพรมที่มีคุณภาพที่ดีที่สุด ทุกชิ้นงาน Crochet ที่จัดทำที่นี่มีการออกแบบที่หลากหลาย ทั้งจากหมวดการ์ตูนที่นิยม เทศกาลต่างๆ หรือ ของขวัญสำหรับคนพิเศษ">
                            ไหมพรมโคเชรต์ มีความแข็งแรงและทนทาน เป็นพรมที่มีคุณภาพที่ดีที่สุด ทุกชิ้นงาน Crochet ที่จัดทำที่นี่มีการออกแบบที่หลากหลาย ทั้งจากหมวดการ์ตูนที่นิยม เทศกาลต่างๆ หรือ ของขวัญสำหรับคนพิเศษ
                        </Text>

                        <Box ta="center">
                            <Button component="a" target="_blank" href="https://www.facebook.com/niratshoppingg" mt={10} variant="filled" leftSection={<FaFacebook />}>
                                ติดต่อสั่งซื้อ
                            </Button>
                        </Box>
                    </Card>
                </Flex>
            </Box>
            <Swiper
                className="customSwiper"
                modules={[Autoplay, Navigation, EffectFade]} effect="fade"
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <Image src="images/carousel/image1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="images/carousel/image2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="images/carousel/image3.jpg" />
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}