import { Meta, StoryObj } from "@storybook/react";
import Switch from ".";

const meta: Meta<typeof Switch> = {
  title: "Switch",
  component: Switch,
  argTypes: {
    label: { type: "string" },
    color: { type: "string" },
    isChecked: { type: "boolean" },
    disabled: {
      type: "boolean",
    },
    required: {
      type: "boolean",
    },
    onCheck: {
      action: "checked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "My Switch",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};
