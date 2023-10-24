import { Meta, StoryObj } from "@storybook/react";
import Caption from ".";

const meta: Meta<typeof Caption> = {
  title: "Surfaces/Carrousels/Caption",
  component: Caption,
  args: {
    children: "Caption",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  args: {
    children: "My Caption",
  },
};
