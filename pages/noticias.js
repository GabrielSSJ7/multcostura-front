import React, { useEffect, useState } from 'react'

import setApi from '../src/api'

import Template from '../src/components/templates/Web'
import SlideWeb from '../src/components/web/SlideWeb'
import NewsList from '../src/components/web/NewsList'
import { Column } from '../src/static/styled-components/base'

export default function Noticias () {
	const [news, setNews] = useState(null)
	const [banner, setBanner] = useState('')
	useEffect(() => {
		async function f() {
			setApi()
				.get('/news')
				.then(res => {
					setNews(res.data)
				})
				.catch(err => {

				})

			setApi()
				.get('/institutional/newsBanner')
				.then(res => {
					setBanner(res.data)
				})
				.catch(err => {

				})
		}

		f()
	}, [])

	return (
		<Template>
			<Column style={{ width: "100%" }}>
				<SlideWeb images={banner} fixed />
				<NewsList news={news} />
			</Column>
		</Template>
	)
}