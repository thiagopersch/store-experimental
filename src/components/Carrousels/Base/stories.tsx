import { Meta, StoryObj } from "@storybook/react";
import Carrousels from ".";

const meta: Meta<typeof Carrousels> = {
  title: "Surfaces/Carrousels/Carrousels",
  component: Carrousels,
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Carrousels>;

export const Default: Story = {
  args: {
    children: "My Carrousels",
  },
};
