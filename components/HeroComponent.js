import { BackgroundImage, Flex, Image, Stack, Text, Container, NavLink, Box, Grid, SimpleGrid, Burger, Drawer, Title, Button, Card, Space } from "@mantine/core";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay} from 'swiper/modules';
import { FaFacebook } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroComponent() {

    return (
        <Box component="div" className="container-hero h-100" id="home">
            <Box pt={20} component="div" className="overlay">
                <Box component="a" href="/" className="logo">
                    <Image src="images/logo.jpg" alt="Crochet by Mniratch" />
                </Box>

                <Flex justify="center" align="center" className="overlay-text">
                    <Card
                        shadow="sm"
                        padding="xl"
                        className="card"
                    >
                        <Title ta="center" c="white" order={2}>
                            งานไหมพรมโครเชต์
                        </Title>

                        <Text ta="center" mt="xs" c="white" className="text-detail">
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