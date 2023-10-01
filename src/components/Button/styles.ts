import { darken } from "polished";
import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const Button = styled.button<ButtonProps>`
  ${({ theme, color = "successDark", labelColor = "white" }) => css`
		position: relative;
		font-family: ${theme.font.family.primary};
		font-style: ${theme.font.style.normal};
		font-variant: normal;
		font-weight: ${theme.font.weight.medium};
		letter-spacing: 0.25rem;
		line-height: 1.64062rem;
		text-decoration: none;
		text-align: center;
		text-indent: 0px;
		text-transform: uppercase;
		vertical-align: middle;
		white-space: normal;
		word-spacing: 0px;
		background-attachment: scroll;
		background-color: ${theme.colors[color]}};
		background-image: none;
		background-position: 0% 0%;
		background-repeat: repeat;
		color: ${theme.colors[labelColor]};
		height: 3.8rem;
		width: 43rem;
		border: 0;
		border-radius: 0.4rem;
		z-index: auto;
		list-style-image: none;
		list-style-type: disc;
		list-style-position: outside;
		border-collapse: separate;
		border-spacing: 0px 0px;
		caption-side: top;
		empty-cells: show;
		table-layout: auto;
		overflow: visible;
		cursor: pointer;
		visibility: visible;
		transition: ${theme.transition.fast};
		box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 0.5px 2px 0px;

		&:hover {
			transform: none;
			transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
			outline-offset: 0px;
			box-sizing: border-box;
			resize: none;
			text-shadow: none;
			text-overflow: clip;
			word-wrap: normal;
			box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 2px -3px, rgba(0, 0, 0, 0.14) 0px 3px 3px 0px, rgba(0, 0, 0, 0.12) 0px 2px 7px 0px;
			border-radius: 0.4rem;
			background-color: ${darken(0.1, theme.colors[color])};
		}
  `}
`;
