import { Meta, StoryObj } from "@storybook/react";
import { Trash } from "@styled-icons/feather";
import Icon from ".";

const meta: Meta<typeof Icon> = {
  title: "Utils/Icon",
  component: Icon,
  argTypes: {
    color: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    children: <Trash />,
    color: "primary",
    size: "small",
  },
};
