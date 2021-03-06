import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import ReactDOM, {render} from 'react-dom';


class Roots extends Component {
    render() {
        return (
            <div  className="testClass">{this.props.children}</div>
        );
    }
}




//const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


import IndexPage from '../Container/Index';
const Index  = {
    path:'index',
    getComponent(nextState,cb){
		require.ensure([],(require)=>{
            return cb(null,IndexPage)
        })
    }
}

import UserInforPage from '../Container/UserInfor';
const UserInfor  = {
    path:'userInfor',
    getComponent(nextState,cb){require.ensure([],(require)=>{
            return cb(null,UserInforPage)
        })
    }
}

import CityLocationPage from '../Container/CityLocation';
const cityLocation  = {
    path:'/',
    getComponent(nextState,cb){require.ensure([],(require)=>{
            return cb(null,CityLocationPage)
        })
    }
}

import FilmListPage from '../Container/FilmList';
const filmList = {
    path:'filmList',
    getComponent(nextState,cb){require.ensure([],(require)=>{
            return cb(null,FilmListPage)
        })
    }
}

import FilmGoodsListPage from '../Container/FilmGoodsList';
const filmGoodsList = {
    path:'filmGoodsList',
    getComponent(nextState,cb){require.ensure([],(require)=>{
            return cb(null,FilmGoodsListPage)
        })
    }
}

import FilmScheduleListPage from '../Container/FilmScheduleList';
const FilmScheduleList = {
    path:'filmScheduleList',
    getComponent(nextState,cb){require.ensure([],(require)=>{
            return cb(null,FilmScheduleListPage)
        })
    }
}

import FilmChooseListPage from '../Container/FilmChooseSeat';
const FilmChooseSeat = {
    path:'filmChooseSeat',
    getComponent(nextState,cb){require.ensure([],(require)=>{
            return cb(null,FilmChooseListPage)
        })
    }
}

import FilmDetailPage from '../Container/FilmDetail';
const FilmDetail = {
    path:'filmDetail',
    getComponent(nextState,cb){require.ensure([],(require)=>{
            return cb(null,FilmDetailPage)
        })
    }
}



import CinimaSelect from '../Container/CinimaSelect';
const cinimaSelectList  = {
    path:'cinimaSelect/:cityId',
    getComponent(nextState,cb){require.ensure([],(require)=>{
            return cb(null,CinimaSelect)
        })
    }
}


const rootRoute ={
    component:Roots,
    childRoutes:[UserInfor,Index,cityLocation,filmList,cinimaSelectList,FilmScheduleList,FilmChooseSeat,FilmDetail, filmGoodsList]
}



const RouteConfig = (
    <Router  routes={rootRoute} history={hashHistory}>
    </Router>
);


export default RouteConfig;
