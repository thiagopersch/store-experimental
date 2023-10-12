import { Meta, StoryObj } from "@storybook/react";
import Typography from ".";

const meta: Meta<typeof Typography> = {
  title: "Data Display/Typography",
  component: Typography,
  argTypes: {
    children: { type: "string" },
    color: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Text: Story = {
  args: {
    children: "My Typography",
    color: "primaryMain",
    size: "small",
    align: "left",
    transform: "none",
  },
};
