import { Meta, StoryObj } from "@storybook/react";
import Navbar from ".";

const meta: Meta<typeof Navbar> = {
  title: "Surfaces/Navbar",
  component: Navbar,
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    children: "My Navbar",
  },
};
