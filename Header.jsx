import React from 'react';

export default class HeaderComp extends React.PureComponent {


render(){
    
    return(
        <div>
<div className="header-wrapper">
        <div className="custom-header">
            <div className="page-center">

                <div className="header-left-text">
                    <h1>Sample Univerity Name</h1>
                </div>

                <div className="menu-trigger">
                    <a className="menu-open" aria-label="Menu" href="#">
                        <span className="icon-menu"></span>
                    </a>
                </div>

                <div className="header-menu">
                    <div id="menu-close-wrap">
                        <a className="menu-close">
                            <span className="icon-close"></span>
                        </a>
                    </div>
                    <div className="menu-wrapper">
                        <ul>
                            <li className="menu-item">
                                <a href="#">Sample Menu 1</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Sample Menu 2</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Sample Menu 3</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>

        </div>
        
    )
}
}