import { Meta, StoryObj } from "@storybook/react";
import Chip from ".";

import { User } from "@styled-icons/feather";

const meta: Meta<typeof Chip> = {
  title: "Data Display/Chip",
  component: Chip,
  parameters: {
    background: "white",
  },
  argTypes: {
    label: { type: "string" },
    color: { type: "string" },
    backgroundColor: { type: "string" },
    disabled: { type: "boolean" },
    icon: { type: "string" },
    size: { control: "radio", options: ["small", "medium", "large"] },
    variant: { control: "radio", options: ["filled", "outlined"] },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Filled: Story = {
  args: {
    label: "My Chip",
    variant: "filled",
    size: "medium",
  },
  parameters: {
    background: "black",
  },
};

export const Outlined: Story = {
  args: {
    label: "My Chip",
    variant: "outlined",
    size: "medium",
  },
};

export const Disabled: Story = {
  args: {
    label: "My Chip",
    size: "medium",
    variant: "filled",
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    icon: <User />,
    label: "My Chip",
  },
};
