import { Meta, StoryObj } from "@storybook/react";
import { Plus } from "@styled-icons/feather";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Form/Button",
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
    variant: {
      control: { type: "radio" },
      option: ["contained", "outlined", "text"],
    },
    fullWidth: {
      type: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "My Button",
    size: "medium",
    variant: "contained",
  },
};

export const WithIcon: Story = {
  args: {
    children: "My Button",
    size: "medium",
    variant: "contained",
    icon: <Plus />,
  },
};
