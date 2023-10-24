import { Meta, StoryObj } from "@storybook/react";
import Item from ".";

const meta: Meta<typeof Item> = {
  title: "Surfaces/Carrousels/Item",
  component: Item,
  args: {
    children: "Item",
  },
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
