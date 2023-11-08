import { Dropdown } from "@/components/Dropdown";
import Base from "../Base";

export default function Home() {
  return (
    <Base>
      <Dropdown.Root>
        <Dropdown.Header>Teste</Dropdown.Header>
        <Dropdown.Content>
          <Dropdown.ListItem>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
            <Dropdown.Item>Item 4</Dropdown.Item>
          </Dropdown.ListItem>
        </Dropdown.Content>
      </Dropdown.Root>
    </Base>
  );
}
