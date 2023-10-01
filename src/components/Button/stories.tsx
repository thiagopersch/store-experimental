import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    color: {
      type: "string",
    },
    labelColor: {
      type: "string",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "My Button",
    size: "medium",
  },
};
