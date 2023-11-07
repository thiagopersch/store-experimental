import { Meta, StoryObj } from "@storybook/react";
import Dropdown from ".";

import { Home } from "@styled-icons/feather";
import Logo from "../../assets/images/colored/favicon.png";

const meta: Meta<typeof Dropdown> = {
  title: "Surfaces/Dropdown",
  component: Dropdown,
  argTypes: {
    label: { type: "string" },
    background: { type: "string" },
    color: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: "My Dropdown",
    background: "black",
    color: "primary",
    image: Logo,
    disabled: false,
    size: "small",
    dark: false,
    icon: <Home />,
  },
};
