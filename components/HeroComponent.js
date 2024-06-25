import { BackgroundImage, Flex, Image, Stack, Text, Container, NavLink, Box, Grid, SimpleGrid } from "@mantine/core";
import { Fragment } from "react";
import { CiLocationOn, CiPhone } from "react-icons/ci"
import { IoHomeOutline } from "react-icons/io5"

export default function HeroComponent() {
    return (
        <Container size="lg" className="pt-2">
            <Box className="container-hero" component="div">
                <SimpleGrid cols={2} pt={10}>
                    <div>1</div>
                    <div className="container-ring">
                        <div className="ring-1"></div>
                        <div className="ring-2"></div>
                        <Image
                            className=""
                            radius="md"
                            h={200}
                            w="auto"
                            fit="contain"
                            src="/images/mobile-phone.png"
                        />
                    </div>
                </SimpleGrid>
            </Box>
        </Container>
    )
}