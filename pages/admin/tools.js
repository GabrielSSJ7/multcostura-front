import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Template from '../../src/components/templates/Admin'
import { Container, Hr, Button, Input } from '../../src/static/styled-components/base'
import Sidebar from '../../src/components/admin/Sidebar'
import { getTools } from '../../src/utils/tools'
import { Router } from '../../routes'
import Snackbar from "@material-ui/core/Snackbar"
import Alert from "@material-ui/lab/Alert"

export default function Tools () {
	const [tools, setTools] = useState([])
	const [search, setSearch] = useState('')

	useEffect(() => {
		async function async() {
			getTools(function(err, r) {
				if (err) {
					setSnackBar({
						open: true,
						result: 'error',
						message: err
					})
					setTools([])
					return
				}

				setTools(r)
			}, { search })
		}

		async();
	}, [search])


	function handleChange (e) {
		setSearch(e.target.value)
	}

	function handleClose() {
		setSnackBar({
			...snackBar,
			open: false
		})
	}

	const [snackBar, setSnackBar] = useState({
    	result: "success",
    	open: false,
    	message: ""
  	});

	return <Template >
		<Sidebar />
		<Container>
		<Snackbar
          open={snackBar.open}
          autoHideDuration={3500}
          onClose={handleClose}
        >
          <Alert severity={snackBar.result}>{snackBar.message}</Alert>
        </Snackbar>
			<h1
	          className="main-title"
	          style={{
	            textAlign: "center",
	            color: "rgb(35,43,111)"
	          }}
	        >
	          Peças 
	        </h1>
	        <Hr />
	        <Column>
	        	<Button onClick={() => Router.pushRoute('/admin/tools/add-tool')}>Adicionar nova peça</Button>
	       		<Input placeholder="Pesquise pelo nome" name="search" id="search" value={search} onChange={handleChange} />
	       	</Column>
	       	<Row>
		       	{tools.map(tool => (
	            <CardContainer
	              onClick={() =>
	                Router.pushRoute("/admin/tools/edit-tool?id=" + tool.id)
	              }
	            >
	              <Row style={{ padding: 0 }}>
	                <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", background: "lightgrey" }}>
	                  {tool.images.length > 0 ? <Image style={{ position: "relative" }} width="100%" height="100%" src={tool.images[0]} /> : <p style={{fontSize: ".8rem", textAlign: "center"}}>Nenhuma imagem enviada</p>}
	                </div>                  
	                <Column style={{ flex: 1, justifyContent: "flex-start" }}>
	                  <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px"}}>
	                    <span>{tool.name}</span>
	                  </div>

	                  <span style={{ fontSize: '.8rem', color: 'grey' }}>{tool.description}</span>                  
	                </Column>
	              </Row>
	            </CardContainer>
	          	))}
	       	</Row>
		</Container>
	</Template>
}



const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding: 15px;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`;

const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('${props => props.src}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: ${props => props.width};
    height: ${props => props.height};
    transition: 0.4s;
    position: relative;
    cursor: pointer;
    p {
      opacity: 0;
      transition: .2s;
      text-align: center;
    }
    :hover {
      opacity: .8;
      p {
        opacity: 1;
        color: black;
        background: white;
        padding: 5px;
      }
    }
`;

const CardContainer = styled.div`
	flex: 1;
  min-width: 250px;
	max-height: 300px;
  height: 250px;
	overflow: hidden;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	flex-wrap: no-wrap;
	margin-bottom: 10px;
	margin-right: 10px;
	img {
		width: 100%;
		max-width: 230px;
		display: block;
		margin: auto
	}
	:hover {
		box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	}
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

}
`;
