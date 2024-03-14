import styled, { css } from "styled-components";
import { COLORS } from "../../designToken/color";
import { SIZES } from "../../designToken/size";

const ButtonColorCss = {
    mainPurple: {
        css: css`
            background-color: ${COLORS.MAIN.base};
            color: ${COLORS.SYSTEM.black};
        `,
        activeColor: css`
            background-color: ${COLORS.MAIN[200]};
        `,
    },
    teal: {
        css: css`
            background-color: ${COLORS.PALLETE.teal.base};
            color: ${COLORS.SYSTEM.black};
        `,
    },
    green: {
        css: css`
            background-color: ${COLORS.PALLETE.green.base};
            color: ${COLORS.SYSTEM.black};
        `,
    },
    gray: {
        css: css`
            background-color: ${COLORS.PALLETE.gray.base};
            color: ${COLORS.SYSTEM.black};
        `,
    },
    peach: {
        css: css`
            background-color: ${COLORS.PALLETE.peach};
            color: ${COLORS.SYSTEM.black};
        `,
    },
    lemon: {
        css: css`
            background-color: ${COLORS.PALLETE.lemon};
            color: ${COLORS.SYSTEM.black};
        `,
    },
};

const ButtonSizeCss = {
    small: {
        css: css`
            width: ${SIZES.BUTTON.small.width};
            height: ${SIZES.BUTTON.small.height};
        `,
    },
    medium: {
        css: css`
            width: ${SIZES.BUTTON.medium.width};
            height: ${SIZES.BUTTON.medium.height};
        `,
    },
    large: {
        css: css`
            width: ${SIZES.BUTTON.large.width};
            height: ${SIZES.BUTTON.large.height};
        `,
    },
};

export const StyleBtn = styled.button`
    border: none;
    border-radius: 10px;
    cursor: pointer;
    ${({ color }) => ButtonColorCss[color].css}
    ${({ size }) => ButtonSizeCss[size].css}
    &:active {
        background-color: ${({ color }) => ButtonColorCss[color].activeColor};
        transform: scale(0.8);
    }
`;
