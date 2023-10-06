import { Meta, StoryObj } from "@storybook/react";
import Accordion from ".";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
  args: {
    children: "Accordion",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    children: "My Accordion",
  },
};
