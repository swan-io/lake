import { match } from "ts-pattern";
import { Icon } from "./Icon";
import { Tag } from "./Tag";

type Props = {
  projectEnv: "Live" | "Sandbox";
  iconOnly?: boolean;
};

export const ProjectEnvTag = (props: Props) => {
  const isLive = props.projectEnv === "Live";

  return (
    <Tag color={isLive ? "live" : "sandbox"}>
      {match(props)
        .with({ iconOnly: true, projectEnv: "Live" }, () => <Icon name="live-regular" size={20} />)
        .with({ iconOnly: true, projectEnv: "Sandbox" }, () => (
          <Icon name="beaker-regular" size={20} />
        ))
        .with({ projectEnv: "Sandbox" }, { projectEnv: "Live" }, ({ projectEnv }) => projectEnv)
        .exhaustive()}
    </Tag>
  );
};
