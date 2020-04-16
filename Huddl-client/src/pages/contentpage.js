import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SiteMap from '../components/SiteMap'
import SideBar from '../components/Sidebar'

import '../css/contentpage.css';

class contentpage extends Component {

    constructor() {
        super();
      }

    render() {
        return (
            <div>
                <SideBar />
                <h1> &#8592; Back </h1>


                    <div class="feed-item">
                        <div class="item-img">
                            <img class="img" src='../image/cf-placeholder.png'></img>
                        </div>

                        <div class="item-text">
                            <div class='item-author'>Asmaa Zantout</div>
                            <div class='hrs'><i class="fa fa-clock-o"></i>7hrs</div>
                            <div class= "item-header">Managing Stress in Crisis Response Professions</div>

                            <div class="item-desc">this is the description of the article/the text of the article</div>
                        </div>
                    </div>



            </div>
        )
    }

}

export default contentpage