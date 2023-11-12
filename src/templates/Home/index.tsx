import { Dropdown } from "@/components/Dropdown";
import Typography from "@/components/Typography";
import { Home as HomeIcon } from "@styled-icons/feather/Home";
import { useState } from "react";
import Base from "../Base";

export default function Home() {
  const [show, setShow] = useState(false);

  const toggleBase = () => {
    setShow((current) => !current);
  };

  return (
    <Base>
      <Typography color="primary" size="large" align="center" mobile>
        Dropdown
      </Typography>
      <Dropdown.Root>
        <Dropdown.Header
          color="primary"
          size="small"
          onClick={toggleBase}
          isOpen={show}
        >
          My dropdown
        </Dropdown.Header>
        <Dropdown.Content isOpen={show}>
          <Dropdown.ListItem>
            <Dropdown.Item color="primary" size="xsmall" icon={<HomeIcon />}>
              Home
            </Dropdown.Item>
            <Dropdown.Item color="primary" size="xsmall" icon={<HomeIcon />}>
              Home
            </Dropdown.Item>
            <Dropdown.Item color="primary" size="xsmall" icon={<HomeIcon />}>
              Home
            </Dropdown.Item>
            <Dropdown.Item color="primary" size="xsmall" icon={<HomeIcon />}>
              Home
            </Dropdown.Item>
          </Dropdown.ListItem>
        </Dropdown.Content>
      </Dropdown.Root>
    </Base>
  );
}
