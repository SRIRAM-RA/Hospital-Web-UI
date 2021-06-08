import React, { Component } from "react";

class Admincontent extends Component{
    constructor(){
        super()
        this.state={addstaff:""};
        this.staffUpdate=this.staffUpdate.bind(this);
    }

    staffUpdate(e){
        this.setState({addstaff:e.target.value})
    }
    // state={};

    render(){
        return(
            <div className="admin-content">
                <h1 id="content-head">Site administration</h1>
                <div className="admin-content-1">
                    <div className="content-table">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th id="admin-table-tab">AUTHENTICATION AND AUTHORIZATION</th>
                                    <th id="admin-table-tab-1"></th>
                                    <th id="admin-table-tab-1"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td id="table-row"><a href="#">Groups</a></td>
                                    <td id="table-row"><button type="button" id="admin-btn">Add</button></td>
                                    <td id="table-row"><button type="button" id="admin-btn">Remove</button></td>
                                </tr>
                                <tr>
                                    <td id="table-row"><a href="#">Users</a></td>
                                    <td id="table-row"><button type="button" id="admin-btn">Add</button></td>
                                    <td id="table-row"><button type="button" id="admin-btn">Remove</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="content-box-1">
                        <h1><b>Recent actions</b></h1>
                        <div className="recent-actions">
                            <h5><a href="">My actions</a></h5>
                            <h5><a href="">None available</a></h5>
                        </div>
                    </div>
                </div>
                <div className="admin-content-2">
                    <div className="content-table-1">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th id="admin-table-tab">EVENTS</th>
                                    <th id="admin-table-tab-1"></th>
                                    <th id="admin-table-tab-1"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td id="table-row"><a href="#">Staffs</a></td>
                                    <td id="table-row"><button type="button" id="admin-btn" value="add" onClick={() => { this.props.addStaffs(this.state.addstaff)}}>Add</button></td>
                                    <td id="table-row"><button type="button" id="admin-btn">Remove</button></td>
                                </tr>
                                <tr>
                                    <td id="table-row"><a href="#">Doctors</a></td>
                                    <td id="table-row"><button type="button" id="admin-btn" value="add">Add</button></td>
                                    <td id="table-row"><button type="button" id="admin-btn">Remove</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admincontent;