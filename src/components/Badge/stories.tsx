import { Meta, StoryObj } from "@storybook/react";

import Badge from ".";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  argTypes: {
    children: {
      type: "string",
    },
    styledType: {
      control: { type: "radio" },
      options: ["success", "info", "secondary", "orange", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
    styledType: "success",
  },
};
