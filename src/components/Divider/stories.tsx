import { Meta, StoryObj } from "@storybook/react";
import Divider from ".";

const meta: Meta<typeof Divider> = {
  title: "Data Display/Divider",
  component: Divider,
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    children: "My Divider",
  },
};
