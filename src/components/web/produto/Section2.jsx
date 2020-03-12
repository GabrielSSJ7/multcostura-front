import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Row, Column } from '../../../static/styled-components/base'
import Slider from '../../utils/Slider'

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';


export default function Section2 ({ prod }) {
	const [specifications, setSpec] = useState([])
	const [fullWidth, setFullWidth] = React.useState(true);
  	const [maxWidth, setMaxWidth] = React.useState('md');
  	const [dialogContent, setDialogContent] = useState('')
  	const [open, setOpen] = useState(false)
  	const handleClickOpen = () => {
	 setOpen(true);
	};

	const handleClose = () => {
	 setOpen(false);
	};

	const handleMaxWidthChange = event => {
      setMaxWidth(event.target.value);
  	};

  	const handleFullWidthChange = event => {
      setFullWidth(event.target.checked);
  	};

	useEffect(() => {
		if (prod.specifications){ 
			const specArrayKeys = Object.keys(prod.specifications);
			const specArray = []
			for (let specKey in specArrayKeys) {
				specArray.push(`${specArrayKeys[specKey].replace(/([A-Z])/g, ' $1').trim().toLowerCase()}: ${prod.specifications[specArrayKeys[specKey]]}`)
			}

			setSpec(specArray)
		}

	}, [prod.specifications])
	return <Row style={{ width: "77.7%", margin: '0 11.15%', paddingTop: "5%", flexWrap: 'wrap' }}>
		<Column flex="1" style={{ minHeight: "550px", minWidth: '250px' }}>{prod.specifications? 
			<><MachineName>Descrição Técnica</MachineName>

			<Row style={{ flexWrap: 'wrap'}} >{specifications.map(spec => <Text style={{ width: "50%" }}>-{spec}</Text>)}</Row>

			

		</>
		 : ''}
	<Dialog
				fullWidth={fullWidth}
				maxWidth={maxWidth}
		        open={open}
		        onClose={handleClose}
		        aria-labelledby="max-width-dialog-title"

      		>
      			<DialogTitle id="max-width-dialog-title">Video</DialogTitle>
      			<DialogContent>
      				<iframe src={prod.video} style={{ width: "100%", height: "500px"}}  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      			</DialogContent>
      		</Dialog>
		 <Row jc="space-between" style={{ margin: '20px 0 ' }}>
				{prod.video ? <Button onClick={() => setOpen(true)}>Vídeo</Button> : null}
				{prod.manual ? <Button  onClick={() => {
					window.open(prod.manual, '_blank')
				}}>Manual</Button> : null}
				{prod.folheto ? <Button onClick={() => {
					window.open(prod.folheto, '_blank')
				}}>Folheto</Button> : null}
			</Row>

		 </Column>

		
		<Column flex="1" jc="center" ait="center" style={{ minHeight: "550px", minWidth: '250px' }}>
			<Row style={{ width: "85%" }} >
				<Slider images={prod.images} arrows slideWidth="100%" height="300px" />
			</Row>
		</Column>
	</Row>
}


const Button = styled.div`
	width: 146px;
	height: 56px;
	background: #E3E3E3 0% 0% no-repeat padding-box;
	opacity: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	text-align: left;
	/*font: Bold 20px/24px Myriad Pro;*/
	font-size: 20px;
	letter-spacing: 0;
	color: #5B5B5B;
	opacity: 1;
	cursor: pointer;
	transition: .2s;
	:hover {
		opacity: .8;
	}
`


const Text = styled.p`
	text-align: left;
	/*font: Regular 18px/24px Segoe UI;*/
	font-size: 18px;
	letter-spacing: 0;
	color: #5B5B5B;
	opacity: 1;
`

const MachineName = styled.h1`
	text-align: left;
	/*font: Bold 20px/24px Myriad Pro;*/
	font-size: 20px;
	letter-spacing: 0;
	color: #5B5B5B;
	opacity: 1;
	margin: 0;
`

const Category = styled.h1`
margin: 0;
	text-align: left;
	/*font: Bold 30px/37px Myriad Pro;*/
	font-size: 30px;
	letter-spacing: 0;
	color: #242873;
	opacity: 1;
`

const Img = styled.div`
	background-image: url('${props => props.src}');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: ${props => props.width};
	height: ${props => props.height};
	transform: translateX(${props => props.translate}px);
	transition: transform 0.2s ease-in-out;

	position: relative;
	:hover {
		transform: scale(1.1); -webkit-transform: scale(1.1);
	}
`;