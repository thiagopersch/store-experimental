import { Meta, StoryObj } from "@storybook/react";
import Base from ".";
import Header from "../Header";

const meta: Meta<typeof Base> = {
  title: "Surfaces/Dropdown/Base",
  component: Base,
  argTypes: {
    // children: { type: "string" },
    // label: { type: "string" },
    // background: { type: "string" },
    // color: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Base>;

export const Default: Story = {
  args: {
    // label: "My Base",
    // background: "black",
    // color: "primary",
    // image: Logo,
    // disabled: false,
    // size: "small",
    // dark: false,
    // icon: <Home />,
    children: <Header />,
  },
};
