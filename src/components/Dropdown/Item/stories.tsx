import { Meta, StoryObj } from "@storybook/react";
import Item from ".";

const meta: Meta<typeof Item> = {
  title: "Surfaces/Dropdown/Item",
  component: Item,
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  args: {
    children: "My Item",
  },
};
