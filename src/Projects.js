import React from "react"
import { Row } from "react-bootstrap"

import SectionHeader from "./SectionHeader"
import Facts from "./Facts"
import { data } from "./data.js"

const Education = () => (
	<div>
		<Row>
			<SectionHeader icon={data.projects.icon} title={data.projects.title} />
		</Row>
		<Row>
			{data.projects.items.map(item => (
				<Facts key={item.date} {...item} />
			))}
		</Row>
	</div>
)

export default Education
