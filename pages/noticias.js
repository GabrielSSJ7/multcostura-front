import React from 'react'

import Template from '../src/components/templates/Web'
import SlideWeb from '../src/components/web/SlideWeb'
import NewsList from '../src/components/web/NewsList'

export default function Noticias () {
	return (
		<Template>
			<SlideWeb />
			<NewsList />
		</Template>
	)
}