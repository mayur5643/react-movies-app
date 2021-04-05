import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const customStyles = {
    content: {
        top: '40%',
        left: '50%',
        right: '60%',
        bottom: 'auto',
        marginRight: '-40%',
        marginLeft:'auto',
        marginTop:'-10',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function(props){
    return(
        <Typography component = "div" style={{padding: 0,textAlign:'center'}}>
            {props.children}
        </Typography>
    );
}

class Header extends Component{
    constructor()
    {
        super();
        this.state = {
            modalIsOpen:false,
            value: 0
        };
    }
    openModalHandler = () =>{
        this.setState({modalIsOpen:true});
    }
    closeModalHandler = () => {
        this.setState({modalIsOpen:false});
    }
    tabChangeHandler = (event, value) =>{
        this.setState({value})
    }
    render(){
        return(
            <div>
                <header className="app-header">
                   <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-btn">
                        <Button variant="contained" color=" default" onClick={this.openModalHandler}>Login</Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login"
                onRequestClose={this.closeModalHandler}  style={customStyles }>
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler} className="loginReg-btn">
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="userName">UserName</InputLabel>
                            <Input id="username" type="text" />
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" />
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary">LOGIN</Button>
                    </TabContainer>

                    </Modal>
            </div>
        )
    }
}

export default Header;