import { Meta } from "@storybook/react";
import { LakeButton } from "../src/components/LakeButton";
import { Space } from "../src/components/Space";
import { ToastStack } from "../src/components/ToastStack";
import { registerErrorToRequestId, showToast } from "../src/state/toasts";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = {
  button: {
    width: 200,
  },
};

export default {
  title: "Interactivity/Toast",
  component: ToastStack,
} as Meta<typeof ToastStack>;

const map = new WeakMap<WeakKey, string>();
registerErrorToRequestId(map);

const error = new Error();
map.set(error, "req-thvfknqp");

export const Default = () => {
  return (
    <>
      <ToastStack />

      <StoryBlock title="Toast">
        <StoryPart title="With only title">
          <LakeButton
            color="positive"
            style={styles.button}
            onPress={() =>
              showToast({ variant: "success", title: "Successfully copy to clipboard !" })
            }
          >
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton
            color="negative"
            style={styles.button}
            onPress={() => showToast({ variant: "error", title: "Oops ! Something went wrong" })}
          >
            Open error toast
          </LakeButton>

          <Space height={16} />

          <LakeButton
            color="shakespear"
            style={styles.button}
            onPress={() =>
              showToast({ variant: "info", title: "Successfully copy to clipboard !" })
            }
          >
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton
            color="warning"
            style={styles.button}
            onPress={() => showToast({ variant: "warning", title: "Oops ! Something went wrong" })}
          >
            Open warning toast
          </LakeButton>
        </StoryPart>

        <StoryPart title="With title and description">
          <LakeButton
            color="positive"
            style={styles.button}
            onPress={() =>
              showToast({
                variant: "success",
                title: "Successfully copy to clipboard !",
                description: "You can now paste it anywhere",
              })
            }
          >
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton
            color="negative"
            style={styles.button}
            onPress={() =>
              showToast({
                variant: "error",
                title: "Oops ! Something went wrong",
                error,
                description: "Please retry or contact us",
              })
            }
          >
            Open error toast
          </LakeButton>

          <Space height={16} />

          <LakeButton
            color="shakespear"
            style={styles.button}
            onPress={() =>
              showToast({
                variant: "info",
                title: "Successfully copy to clipboard !",
                description: "You can now paste it anywhere",
              })
            }
          >
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton
            color="warning"
            style={styles.button}
            onPress={() =>
              showToast({
                variant: "warning",
                title: "Oops ! Something went wrong",
                description: "Talk to an expert",
              })
            }
          >
            Open warning toast
          </LakeButton>
        </StoryPart>

        <StoryPart title="With long title and description">
          <LakeButton
            color="positive"
            style={styles.button}
            onPress={() =>
              showToast({
                variant: "success",
                title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",
              })
            }
          >
            Open success toast
          </LakeButton>

          <Space height={16} />

          <LakeButton
            color="positive"
            style={styles.button}
            onPress={() =>
              showToast({
                variant: "success",
                title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl ut",
              })
            }
          >
            Open success toast
          </LakeButton>
        </StoryPart>
      </StoryBlock>
    </>
  );
};
