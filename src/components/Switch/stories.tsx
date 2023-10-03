import { Meta, StoryObj } from "@storybook/react";
import Switch from ".";

const meta: Meta<typeof Switch> = {
  title: "Switch",
  component: Switch,
  argTypes: {
    onCheck: {
      action: "checked",
    },
    label: { type: "string" },
    color: { type: "string" },
    disabled: {
      type: "boolean",
    },
    required: { type: "boolean" },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "My Switch",
  },
};
