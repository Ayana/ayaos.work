import React from 'react'
import styled from 'styled-components'

const StyledButtonLine = styled.div`
	.slideHover {
		/* border: 1px solid #56a397; */
		cursor: pointer;
		background: #d7d7d7;
		font-size: 0.9rem;
		position: relative;
		padding: 10px 15px;
		display: inline-block;
		vertical-align: middle;
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		position: relative;
		transition-property: color;
		transition-duration: 0.3s;
		&:before {
			content: '';
			position: absolute;
			z-index: -1;
			/* top: 0; */
			left: 0;
			right: 100%;
			bottom: 0;
			background: #56a397;
			height: 4px;
			border-radius: 3px;
			/* transform: scaleX(0); */
			transform-origin: 0 50%;
			transition-property: right;
			transition-duration: 0.3s;
			transition-timing-function: ease-out;
		}
		&:hover {
			&:before {
				right: 0;
			}
		}
	}
`

const ButtonSlideLine = () => {
	return (
		<StyledButtonLine>
			<button className="slideHover">Hover Slide Line</button>
		</StyledButtonLine>
	)
}

export default ButtonSlideLine
