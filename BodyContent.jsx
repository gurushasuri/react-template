import React from 'react';

export default class BodyContainer extends React.PureComponent {

    render() {
        return (

            <div>


<div className="main-section">

            <div className="form-section-wrap">
                <div className="page-center">

                    <div className="search-box">
                        <div className="form-wrapper">
                            <h3 className="form-title">Name of Student</h3>
                            <form action="/" method="post">
                                <input type="search" className="input-text" placeholder="search here..."/>
                                <input type="submit" value="Search" />
                            </form>
                        </div>
                    </div>

                    <div className="find-box">
                        <div className="form-wrapper">
                            <h3 className="form-title">Roll No.</h3>
                            <form action="/" method="post">
                                <div className="input-wrap">
                                    <select className="form-field">
                                        <option value="" hidden="">Department</option>
                                        <option>B.Tech</option>
                                        <option>BBA</option>
                                        <option>BCA</option>
                                        <option>MBA</option>
                                    </select>
                                </div>
                                <div className="input-wrap">
                                    <select className="form-field">
                                        <option value="" hidden="">Branch</option>
                                        <option>Computer Science</option>
                                        <option>Mechanical</option>
                                        <option>Civil</option>
                                        <option>Information Technology</option>
                                        <option>Aeronautical</option>
                                    </select>
                                </div>
                                <div className="input-wrap">
                                    <select className="form-field">
                                        <option value="" hidden="">Class</option>
                                        <option>C.S.E 1</option>
                                        <option>C.S.E 2</option>
                                        <option>C.S.E 3</option>
                                        <option>C.S.E 4</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div className="form-text">
                        <p>Administrative Search by Name/Roll-No.</p>
                    </div>

                </div>
            </div>

        </div>
        

            </div>

        )
    }
}