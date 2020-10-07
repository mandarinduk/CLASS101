import { css } from "styled-components";

const themes = {
  flex: (justify = null, align = null, direction = null) => {
    return css`
      display: flex;
      justify-content: ${justify};
      align-items: ${align};
      flex-direction: ${direction};
    `;
  },

  font: (size = null, weight = null) => {
    return css`
      font-size: ${size};
      font-weight: ${weight};
    `;
  },
};

export default themes;
