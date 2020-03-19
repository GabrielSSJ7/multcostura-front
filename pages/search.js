import React, { useEffect, useState } from 'react'

import setApi from '../src/api'

import Template from '../src/components/templates/Web'
import ListProds from '../src/components/web/ListProds'

export default function Search({ searchTerm}) {
	const machines = useState([])
	const tools = useState([])
	function searchTerm_ () {
		setApi()
			.get(`/machines?search=${searchTerm}`)
			.then(res => {
				setMachines(res.data)
			})

		setApi()
			.get(`/tools?search=${searchTerm}`)
			.then(res => {
				setTools(res.data)
			})
	}
	return <Template>

	</Template>
}



Search.getInitialProps = ({query}) => {
	return {
		searchTerm: query.search
	}
}