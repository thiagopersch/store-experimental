import { Meta, StoryObj } from "@storybook/react";
import Modal from ".";

const meta: Meta<typeof Modal> = {
  title: "Utils/Modal",
  component: Modal,
  argTypes: {
    children: { type: "string" },
    title: { type: "string" },
    closeOnClickOutside: { type: "boolean" },
    height: {
      control: {
        type: "select",
      },
      options: ["auto", "normal", "medium", "large", "huge"],
    },
    width: {
      control: {
        type: "select",
      },
      options: ["auto", "normal", "medium", "large", "huge"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: "My Modal",
    title: "My Modal",
    closeOnClickOutside: false,
    height: "huge",
    width: "huge",
  },
};
