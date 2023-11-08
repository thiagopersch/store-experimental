import { Meta, StoryObj } from "@storybook/react";
import Header from ".";

const meta: Meta<typeof Header> = {
  title: "Surfaces/Dropdown/Header",
  component: Header,
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    children: "My Header",
  },
};
