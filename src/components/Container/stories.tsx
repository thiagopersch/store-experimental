import { Meta, StoryObj } from "@storybook/react";
import Container from ".";

const meta: Meta<typeof Container> = {
  title: "Data Display/Container",
  component: Container,
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quia quasi quidem illo assumenda maiores id, dolorum et nemo perspiciatis odit cumque earum laudantium, repellendus eius molestias quam voluptatibus minus?`,
  },
};
