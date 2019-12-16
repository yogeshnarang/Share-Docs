import React from 'react'
import PropTypes from 'prop-types'

export default class Header extends React.Component{
    render(){

        const styleContainer = {
            // display:"flex",
            color: "white",
            backgroundColor: "#808080",
            padding: "10px",
            fontFamily: "Arial",
            textAlign: "center",
            //borderWidth: "10px",
            borderStyle: "solid",
            borderRadius:'5px!important',
            
            // borderColor:"black",
        };
        const styleOptionsBar = {
            display:"felx",
            color: "white",
            backgroundColor: "#808080",
            padding: "0px",
            fontFamily: "Arial",
            textAlign: "center",
            //borderWidth: "10px",
            borderStyle: "solid",
            borderRadius:'5px!important',
            
            // borderColor:"black",
        };
        const stylecomponent ={
            // height: "20px",
            //width: "20px",
            //backgroundColor:"DarkBlue",
            //padding:"5px",
            textAlign:"center",
            textColor:"#808080",
            boxSizing: "border-box",
            border:"10px black",
        };
        return(
            <div>
                <h1 style = {{paddingLeft:"10px"}}>ShareDocs Testing Phase-1 </h1>

                <div style={styleOptionsBar} className="OptionsBar-Container">
                    <h4>
                        OptionsBarBuild in progress    
                    </h4>
                </div>

                <div style={styleContainer} className="ToolBar-Container">

                    <div style ={stylecomponent} className="ToolBar-Component">
                        <h3>ToolBar building in progress</h3>
                    </div>
                   
                    </div>
            </div>
        )
    }
}