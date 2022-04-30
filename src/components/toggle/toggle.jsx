import { splitProps } from "solid-js";

export default (props) => {
  const [local] = splitProps(props, ["enabled", "title", "toggle"]);

  return local.enabled ? (
    <i title="" onclick={local.toggle} class="fas fa-eye actionable"></i>
  ) : (
    <i
      title="Disable language keywords"
      onclick={local.toggle}
      class="fas fa-eye-slash actionable"
    ></i>
  );
};
