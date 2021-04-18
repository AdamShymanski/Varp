import { css } from "@emotion/react";
import React from "react";

export enum SelectFont {
  POPPINS = "poppinsFont",
  ROBOTO = "robotoFont"
}

const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

  .small {
    width: 60px;
    height: 20px;
    font-size: 0.8em;
    border-radius: 3px;
  }
  .medium {
    width: 90px;
    height: 30px;
    font-size: 1em;
    border-radius: 6px;
  }
  .big {
    width: 150px;
    height: 50px;
    font-size: 1.46em;
    border-radius: 8px;
  }
  .button {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    font-family: "Poppins", sans-serif;
    font-weight: 600;
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
   * ClassName
   */
  className?: string;
}

export function Button(props: Props) {
  const {
    variant = "primary",
    children = "Primary",
    size = "small",
    ...rest
  } = props;
  return (
    <main css={style}>
      <div className={`button ${size} ${variant}`} {...rest}>
        {children}
      </div>
    </main>
  );
}
