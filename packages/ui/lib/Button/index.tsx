import { css } from "@emotion/react";
import React from "react";

export enum SelectFont {
  POPPINS = "poppinsFont",
  ROBOTO = "robotoFont"
}

const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

  .small {
    font-size: 0.8em;
    border-radius: 3px;
  }
  .medium {
    font-size: 1em;
    border-radius: 5px;
  }
  .big {
    font-size: 1.46em;
    border-radius: 8px;
  }
  .button {
    display: flex;
    flex-direction: column;
    padding: 4.5px 25px;
    align-items: center;
    justify-content: center;

    font-family: "Poppins", sans-serif;
    font-weight: 600;

    outline: none;
    border: none;
  }

  .primary {
    background: #0082ff;
    color: #121212;
  }

  .disabled {
    background: transparent;
    border: 3px solid #5c5c5c;
    color: #5c5c5c;
  }

  .robotoFont {
    font-family: "Roboto", sans-serif;
  }

  .invisible {
    display: none;
  }
`;

export interface Props {
  /**
   * The variant of Button
   */
  variant: string;
  /**
   * Size of Button
   */
  size: string;
  /**
   * Content of Button
   */
  children?: React.ReactNode;
  /**
   * Font of text in Button - Default is Poppins
   */
  font?: SelectFont;
  /**
   * Function which will be executed on click
   */
  action?: Function;
  /**
   * Visiblity of Button
   */
  visibility?: boolean;
  /**
   * Type of Button
   */
  type?: string;
}

export function Button(props: Props) {
  const {
    variant = "primary",
    children = "Primary",
    visibility = true,
    size = "medium",
    type = "",
    action = () => {},
    ...rest
  } = props;
  return (
    <main css={style}>
      <button
        className={`button ${size} ${variant} ${visibility ? "" : "invisible"}`}
        onClick={action()}
        {...rest}
      >
        {children}
      </button>
    </main>
  );
}
