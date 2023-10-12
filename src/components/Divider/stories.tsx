import { Meta, StoryObj } from "@storybook/react";
import Divider from ".";

const meta: Meta<typeof Divider> = {
  title: "Data Display/Divider",
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Light: Story = {
  args: {
    light: false,
  },
};

export const Absolute: Story = {
  args: {
    absolute: true,
  },
};
