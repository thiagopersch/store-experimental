import { Meta, StoryObj } from "@storybook/react";
import { ChevronDown } from "@styled-icons/feather";
import Accordion from ".";

const meta: Meta<typeof Accordion> = {
  title: "Surfaces/Accordion",
  component: Accordion,
  argTypes: {
    children: { type: "string" },
    color: { type: "string" },
    labelColor: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    label: "My Accordion",
    icon: <ChevronDown />,
    color: "primary",
    labelColor: "white",
    rounded: true,
  },
};
