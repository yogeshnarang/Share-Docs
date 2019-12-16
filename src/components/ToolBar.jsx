import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'


export default class Toolbar extends React.Component {
    render() {

        const styleContainer = {

            margin: "10px",

        };

        return (<div>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup style={styleContainer} className="mr-2" variant="text" aria-label="First group">
                    <Button>T</Button>
                    <Button>B</Button>
                    <Button style={{textDecorationLine:'underline'}}>U</Button>
                    <Button >I</Button>
                </ButtonGroup>



                <ButtonGroup style={styleContainer} aria-label="Third group">
                    <Button>9</Button>
                    <Button>10</Button>
                    <Button>11</Button>
                </ButtonGroup>
                <ButtonGroup style={styleContainer} className="mr-2" aria-label="First group">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                </ButtonGroup>

                <ButtonGroup style={styleContainer} className="mr-2" aria-label="Second group">
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>7</Button>
                    <Button>8</Button>
                </ButtonGroup>
                <ButtonGroup style={styleContainer} className="mr-2" aria-label="First group">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                </ButtonGroup>

                <ButtonGroup style={styleContainer} className="mr-2" aria-label="Second group">
                    <Button><DeleteIcon /></Button>
                    <Button><EditIcon /></Button>
                    <Button><AlarmIcon /></Button>
                    <Button><AddIcon /></Button>
                </ButtonGroup>

                <ButtonGroup style={styleContainer} className="mr-2" aria-label="Second group">
                    <Button>Save</Button>
                    <Button>Download</Button>
                </ButtonGroup>
                <InputGroup style = {{padding:"10px",color:"Blue" }}>
                    <FormControl
                        type="text"
                        placeholder="Input group example"
                        aria-label="Input group example"
                        aria-describedby="btnGroupAddon"
                    />
                </InputGroup>
            </ButtonToolbar>
        </div >
        )
    }
}