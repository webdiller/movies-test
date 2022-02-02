export default function UiButton({
  innerText = "Найти",
  customClass,
  tagName = "button",
  ...props
}) {
  const CustomTag = `${tagName}`;
  return (
    <CustomTag
      {...props}
      className={customClass ? `ui-button ${customClass}` : `ui-button`}
    >
      {innerText}
    </CustomTag>
  );
}
