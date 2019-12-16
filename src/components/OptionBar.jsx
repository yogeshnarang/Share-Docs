import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'react-bootstrap/Nav';



export default class Navbar extends React.Component {
    render() {

        return (<div>
            <Nav
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link >File</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link >Edit</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link >View</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link >Insert</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link >Format</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link >Help</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
        )
    }
}