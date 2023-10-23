import { Meta, StoryObj } from "@storybook/react";
import { ChevronDown } from "@styled-icons/feather";
import Accordion from ".";

const meta: Meta<typeof Accordion> = {
  title: "Surfaces/Accordion",
  component: Accordion,
  argTypes: {
    label: { type: "string" },
    color: { type: "string" },
    labelColor: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    label: "My Accordion",
    color: "primary",
    labelColor: "white",
    disabled: false,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum doloribus sapiente et maxime ullam similique quod velit possimus neque, delectus veritatis nobis ipsa suscipit facilis nisi fugiat illo officiis.`,
  },
};

export const Disabled: Story = {
  args: {
    label: "My Accordion",
    color: "primary",
    labelColor: "grey",
    icon: <ChevronDown />,
    disabled: true,
  },
};
