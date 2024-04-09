import { Tag } from "./Tag";

type Props = {
  projectEnv: "Live" | "Sandbox";
  iconOnly?: boolean;
};

export const ProjectEnvTag = (props: Props) => {
  const isLive = props.projectEnv === "Live";

  if (props.iconOnly === true) {
    return (
      <Tag color={isLive ? "live" : "sandbox"} icon={isLive ? "live-regular" : "beaker-regular"} />
    );
  }
  return <Tag color={isLive ? "live" : "sandbox"}>{props.projectEnv}</Tag>;
};
