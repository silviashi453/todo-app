import iconCheck from "../assets/icon-check.svg";
import { useState } from "react";

export const CustomCheckbox = ({ disabled, checked, onChange }) => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={onChange}
      />

      <div
        className={`appearance-none w-5 h-5 border-smoke-white border-1 rounded-full ${
          checked
            ? "bg-gradient-to-r from-linear-left to-linear-right border-none"
            : ""
        } flex items-center justify-center dark:bg-black-todo`}
        onClick={!disabled ? onChange : undefined}
      >
        <img
          src={iconCheck}
          alt="icon"
          className={`w-[7.5px] h-[5px] flex justify-center items-center ${
            !checked && "dark:hidden"
          }`}
        />
      </div>
    </div>
  );
};
