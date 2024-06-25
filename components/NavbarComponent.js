import { Flex, Image, Stack, Container, Title, Drawer, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function NavbarComponent() {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Container size="lg" className="pt-2">
            <Stack>
                <Flex
                    direction="row"
                    align="center"
                    justify="space-between"
                >
                    <Flex align="center" gap={5} component="a" href="/" className="underline-none">
                        <Image radius={50} alt="Crochet by Mniratch"  w={60} h={60} src="./images/logo.jpg" />
                        <Title c="dark" textWrap="nowrap" order={3} >Crochet by Mniratch</Title>
                    </Flex>


                    <Burger size="md" opened={opened} onClick={open} aria-label="Toggle navigation" />
                    <Drawer opened={opened} onClose={close} title={<Title order={4}>Menus</Title>} position="right">
                        test
                    </Drawer>

                </Flex>
            </Stack>
            
        </Container>
    )
}