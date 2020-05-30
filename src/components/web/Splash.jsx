import React from 'react'
import {Row, Column} from '../../static/styled-components/base'

import logo from '../../static/images/logo-colorido.png'
import loading from '../../static/images/splash.gif'

export default () => (
    <Row jc="center" ait="center" style={{ height: "100vh" }}>
        <Column jc="center" ait="center" style={{ maxWidth: "300px" }}>
            <img src={logo} alt="logo multcostura" style={{ width: "100%"}}/>
            <img src={loading} alt="gif carregamento" style={{ maxWidth: "120px" }} />
        </Column>
    </Row>
)