import { Box, Burger, Button, Drawer, List, NavLink, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { Fragment } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";

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
		</Box>
		
      </Drawer>
    </Fragment>
  );
};

export default MenuButton;
