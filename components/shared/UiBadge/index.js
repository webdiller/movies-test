import React, { useEffect, useState } from "react";

/**
 * @param {Float} value
 * @returns string with className
 */
const calculateColorByValue = (value) => {
  if (value <= 3.9) {
    return "ui-badge__item ui-badge__item_red";
  } else if (value >= 4 && value <= 7.9) {
    return "ui-badge__item ui-badge__item_yellow";
  } else {
    return "ui-badge__item ui-badge__item_green";
  }
};

export default function UiBadge({ ratingValue, customClass }) {
  const [classByValue, setClassByValue] = useState();
  useEffect(() => {
    setClassByValue(calculateColorByValue(ratingValue));
  }, [ratingValue]);
  return (
    <div className={customClass ? `ui-badge ${customClass}` : "ui-badge"}>
      <span className={classByValue}>{ratingValue}</span>
    </div>
  );
}