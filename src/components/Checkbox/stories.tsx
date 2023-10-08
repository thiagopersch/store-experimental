import { Meta, StoryObj } from "@storybook/react";
import Checkbox from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  argTypes: {
    children: { type: "string", description: "Children of the component" },
    labelColor: { type: "string" },
    color: { type: "string", description: "Select color of the checkbox" },
    disabled: { type: "boolean", description: "Pass this option to disable" },
    required: { type: "boolean", description: "Pass this option to required" },
    value: { type: "string", description: "Value in field" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    children: "My Checkbox",
  },
};
