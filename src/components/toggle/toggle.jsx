export default ({
  enabled,
  title = '',
  iconA = 'fas fa-eye actionable',
  iconB = 'fas fa-eye-slash actionable',
  toggle,
}) => {
  return enabled ? (
    <i title="" onclick={toggle} class="fas fa-eye actionable"></i>
  ) : (
    <i
      title="Disable language keywords"
      onclick={toggle}
      class="fas fa-eye-slash actionable"
    ></i>
  );
};
