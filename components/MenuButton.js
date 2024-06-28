import { Box, Burger, Button, Drawer, List, NavLink, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { Fragment } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdImages } from "react-icons/io";

const MenuButton = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Fragment>
      <Button className="btn-menu" variant="outline" onClick={open}>
        <FaBarsStaggered size={20} />
      </Button>

      <Drawer
        opened={opened}
        onClose={close}
        title={<Title order={4}>เมนู</Title>}
        position="right"
      >

		<Box component="div">
			<NavLink
				href="#home"
				label="หน้าแรก"
				leftSection={<AiOutlineHome size="1rem" stroke={1.5} />}
			/>

      <NavLink
				href="#about"
				label="เกี่ยวกับ"
				leftSection={<AiOutlineInfoCircle size="1rem" stroke={1.5} />}
			/>

      <NavLink
				href="#gallery"
				label="แกลเลอรี่"
				leftSection={<IoMdImages size="1rem" stroke={1.5} />}
			/>
		</Box>
		
      </Drawer>
    </Fragment>
  );
};

export default MenuButton;
