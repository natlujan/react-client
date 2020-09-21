import React, {Component} from 'react';

import Container from './Container';
import PageTitle from './PageTitle';
import TacoList from './TacoList';
import AddTaco from './AddTaco';
//import axios from 'axios';

export default class TacosAdmin extends Component{
    

    render() {
        return (
            <Container>
                <PageTitle text='Taquería Mi Pan sususu' color='black' fontSize={8}/>
                <TacoList/>
                <AddTaco/>
            </Container>
        );
    }
}