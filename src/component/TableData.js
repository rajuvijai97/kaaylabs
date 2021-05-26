import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import $ from 'jquery'
import {selactallAction, inProgressAction,completedAction,failedAction} from '../index'

export default function TableData() {

    const [projectdata, setProjectdata] = useState([])

    const projectStatus = useSelector(state => state)

    const dispatch = useDispatch()

    useEffect(() => {
        axios('http://timeapi.kaaylabs.com/api/v1/project_view/')
        .then(res => setProjectdata(res.data.data))
        .catch(err => console.log(err))
    }, [])

    const statusFilter = () => {
        $('.statusfilter-options').slideToggle(300);
    }

    return(
        <div className='table-section'>
            <div className='container'>
                <div className='statusfilter-div'>
                    <div className="statusfilter-select">
                        <span onClick={statusFilter}>{projectStatus} <i class="fa fa-chevron-down"></i></span>
                        <div className="statusfilter-options" onClick={statusFilter}>
                            <p onClick={() => dispatch(selactallAction())}>Select All</p>
                            <p onClick={() => dispatch(inProgressAction())}>In-Progress</p>
                            <p onClick={() => dispatch(completedAction())}>Complted</p>
                            <p onClick={() => dispatch(failedAction())}>Failed</p>
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>project_id</th>
                                <th>project_code</th>
                                <th>description</th>
                                <th>start_date</th>
                                <th>end_date</th>
                                <th>company_name</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>                            
                            {
                                projectdata.map((projdata,idx) => (
                                    (projectStatus === projdata.status || projectStatus === 'Select All') && (
                                        <tr>
                                            <td>{projdata.project_id}</td>
                                            <td>{projdata.project_code}</td>
                                            <td>{projdata.description}</td>
                                            <td>{projdata.start_date}</td>
                                            <td>{projdata.end_date}</td>
                                            <td>{projdata.company_name}</td>
                                            <td>{projdata.status}</td>
                                        </tr>
                                    )
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}