import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  // задачка на смешивание классов

  const finalClassName = () => {
    let string = s.button;
    if (!xType) {
      string += " " + s.default;
    }
    if (xType === "red") {
      string += " " + s.red;
    }
    if (xType === "secondary") {
      string += " " + s.secondary;
    }
    if (disabled) {
      string = s.button + " " + s.disabled;
    }
    return string;
  };

  return (
    <button
      disabled={disabled}
      className={finalClassName()}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};

export default SuperButton;
