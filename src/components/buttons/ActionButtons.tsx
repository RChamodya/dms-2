import { Icon, Tooltip } from "@mui/material";

export interface ActionButtonProps {
  icon: JSX.Element;
  disabled?: boolean;
  action: any;
  exclude?: boolean;
  tooltip?: string;
  applyCondition?: boolean;
  width?: number;
  background?: string;
  height?: number;
  customActiveClass?: string;
}
export const ActionButton = (props: ActionButtonProps) => {
  return (
    <Tooltip title={props.tooltip}>
      <Icon
        sx={{
          fontSize: 14,
          textAlign: "center",
          verticalAlign: "center",
          marginLeft: 2,
          marginRight: 1,
          height: props?.height ?? 30,
          width: props?.width ?? 25,
          color: "#D0D3D4",
          background: props?.background ?? "transparent",
        }}
        onClick={props.disabled ? () => {} : props.action}
        className={
          props.disabled
            ? "disabled-action-btn"
            : props?.customActiveClass ?? "action-btn"
        }
      >
        {props.icon}
      </Icon>
    </Tooltip>
  );
};
