export default function UiButton({
  innerText = "Найти",
  customClass,
  tagName = "button",
  disabled,
  ...props
}) {
  const CustomTag = `${tagName}`;
  return (
    <CustomTag disabled={disabled} {...props} className={customClass ? `ui-button ${customClass}` : `ui-button`}>
      <span className="ui-button__text">{innerText}</span>
    </CustomTag>
  );
}
