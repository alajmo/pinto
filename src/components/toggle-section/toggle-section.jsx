export default (props) => {
  return (
    <div>
      {props.show ? (
        <i onclick={props.toggle} class="actionable fas fa-chevron-left"></i>
      ) : (
        <i onclick={props.toggle} class="actionable fas fa-chevron-right"></i>
      )}
    </div>
  );
};
