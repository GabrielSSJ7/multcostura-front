import React from 'react'

import Template from '../src/components/templates/Web'
import SlideWeb from '../src/components/web/SlideWeb'
import Map from '../src/components/web/Map'
import Form from '../src/components/web/Form'

export default Contato () {
	return (
		<Template>
			<SlideWeb />

			<div style={{ display: "row" }}>
				<Form />
				<Map />
			</div>
		</Template>
	)
}