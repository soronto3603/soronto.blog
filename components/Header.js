import React,{Component} from 'react';

class Header extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }
    state = {

    }

    render(){
        const style = {
            borderBottom:"1px solid black",
            padding:"20px",
            marginBottom:"20px"
        }
        return(
            
            <div style={style}>
                <div>Soronto's Blog</div>
                <div style={{float:"right"}}>soronto3603@gmail.com</div>
            </div>
        );
    }
}

export default Header;