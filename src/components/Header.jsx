import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './OptionBar.jsx';
import Nav from 'react-bootstrap/Nav';
import Toolbar from './ToolBar'





export default class Header extends React.Component {
    render() {

        const styleContainer = {
            // display:"flex",
            color: "white",
            backgroundColor: "#808080",
            padding: "10px",
            fontFamily: "Arial",
            textAlign: "center",
            //borderWidth: "10px",
            borderStyle: "solid",
            borderRadius: '5px!important',

            // borderColor:"black",
        };
        const styleOptionsBar = {
            display: "felx",
            color: "white",
            backgroundColor: "#808080",
            padding: "0px",
            fontFamily: "Arial",
            textAlign: "center",
            //borderWidth: "10px",
            borderStyle: "solid",
            borderRadius: '5px!important',

            // borderColor:"black",
        };
        const stylecomponent = {
            // height: "20px",
            //width: "20px",
            //backgroundColor:"DarkBlue",
            //padding:"5px",
            textAlign: "center",
            textColor: "#808080",
            boxSizing: "border-box",
            border: "10px black",
        };
        return (
            <div>

                <h1 style={{ paddingLeft: "10px" }}>ShareDocs Testing Phase-1 </h1>
                <div><navbar /></div>
                
                <div className="OptionsBar-Container">
                    <Navbar />
                </div>

                <div className="ToolBar-Container">
                    <Toolbar />
                </div>
            </div>
        )
    }
}