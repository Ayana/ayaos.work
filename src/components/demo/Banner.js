import React from 'react'
import { Parallax } from 'react-parallax'

const titleStyle = {
	color: '#fff',
	lineHeight: '1.5',
	textTransform: 'uppercase',
	display: 'flex',
	justifyContent: ' center',
	alignItems: 'center',
	height: '100%',
}

export default ({ title = 'banner', bgImage, height }) => (
	<div className="parallax-banner">
		<Parallax blur={{ min: -1, max: 1 }} bgImage={bgImage} strength={800}>
			<div style={{ height: height }}>
				<div style={titleStyle}>{title && <p>{title}</p>}</div>
			</div>
		</Parallax>
	</div>
)
