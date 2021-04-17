import React, {Component} from 'react';
import './Home.css';
import Header from '../../common/header/Header';

const styles = theme =>({
    root:{
        flexGrow:1,
        backgroundColor: theme.palatte.background.paper
    },
    upcomingMoviesHeading:{
        textAlign :'center',
        background:'#ff9999',
        padding:'8px',
        fontSize:'1rem'
    },
    gridListUpcomingMovies:{
        flexWrap:'nowrap',
        transform:'translateZ(0)',
        width:'100%'
    }
})

class Home extends Component{
    render(){
        return(
            <div>
                <Header />
                <div>
                    <span> Upcoming Movies </span>
                </div>
            </div>
        )
    }
}

export default Home;