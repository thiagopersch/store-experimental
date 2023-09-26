import { StoryObj, Meta } from "@storybook/react";
import ToastContent from ".";

const meta: Meta<typeof ToastContent> = {
  title: "ToastContent",
  component: ToastContent,
  args: {
    children: "ToastContent",
  },
  argTypes: {
    children: { type: "string" },
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "white",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToastContent>;

export const Default = (Story: Story) => {
  return (
    <div style={{ padding: 10, width: 400, margin: "0 auto" }}>
      <ToastContent showSpinner>Criando usuário</ToastContent>
    </div>
  );
};
