import { Meta, StoryObj } from "@storybook/react";
import Select from ".";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
  argTypes: {
    label: { type: "string" },
    name: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "inputLabel",
    name: "name",
    options: [
      { label: "essa é a opcao 1", value: 1 },
      { label: "essa é a opcao 2", value: 2 },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: "inputLabel",
    name: "name",
    disabled: true,
    options: [
      { label: "essa é a opcao 1", value: 1 },
      { label: "essa é a opcao 2", value: 2 },
    ],
  },
};
