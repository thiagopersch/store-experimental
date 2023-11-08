import { Meta, StoryObj } from "@storybook/react";
import Content from ".";

const meta: Meta<typeof Content> = {
  title: "Surfaces/Dropdown/Content",
  component: Content,
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Content>;

export const Default: Story = {
  args: {
    children: "My Content",
  },
};
