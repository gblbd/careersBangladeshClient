import React from 'react';
import { Link } from 'react-router-dom';
import { FaFile, FaFilter, FaList, FaSearch, FaStar, FaTh } from 'react-icons/fa';
import './FindJob.css';
import useTitle from '../Hooks/useTitle';

const FindJob = () => {
    useTitle('FindJob')
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="grid search">
                    <div className="grid-body">
                        <div className="row">

                            {/* <!-- BEGIN FILTERS --> */}
                            <div className="col-md-3">
                                <h2 className="grid-title"><FaFilter />Filters</h2>
                                <hr />

                                {/* <!-- BEGIN FILTER BY Location --> */}
                                <h5 className=' fw-bold'>By Location:</h5>
                                <select className="form-select">
                                    <option disabled selected>Select</option>
                                    <option value={0}>Dhaka</option>
                                    <option value={1}>Chattogram</option>
                                    <option value={2}>Sylhet</option>
                                    <option value={3}>Rajshahi</option>
                                    <option value={4}>Khulna</option>
                                    <option value={5}>Barishal</option>
                                    <option value={6}>Rangpur</option>
                                </select>
                                {/* <!-- END FILTER BY Location --> */}


                                {/* <!-- BEGIN FILTER BY CATEGORY --> */}
                                <div className=' my-md-3'>
                                    <h5 className=' fw-bold'>By Category:</h5>
                                    <select className="form-select">
                                        <option disabled selected>Select</option>
                                        <option value={0}>Application</option>
                                        <option value={1}>Design</option>
                                        <option value={2}>Development</option>
                                        <option value={3}>Management</option>
                                        <option value={4}>Marketing</option>
                                        <option value={5}>Support</option>
                                        <option value={6}>Networking</option>
                                        <option value={7}>Mobile</option>
                                    </select>
                                </div>
                                {/* <!-- END FILTER BY CATEGORY --> */}


                                {/* <!-- Begin Filter by Employent Status --> */}
                                <div className=' my-md-3'>
                                    <h5 className=' fw-bold'>By Employment Status:</h5>
                                    <select className=" form-select ">
                                        <option disabled selected>Please Select</option>
                                        <option value={0}>Full Time</option>
                                        <option value={1}>Part Time</option>
                                        <option value={2}>Contactual Time</option>
                                        <option value={3}>Internship</option>
                                        <option value={4}>Freelance</option>
                                    </select>
                                </div>
                                {/* <!-- End Filter by Employent Status --> */}


                                {/* <!-- BEGIN FILTER BY POSTED DATE --> */}
                                <div className=" my-md-3">
                                    <h5 className=' fw-bold'>By Posted:</h5>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <input type="date" name="posted-from" id='posted-from' className="input form-control" data-date="2023-02-01T05:25:07Z" data-date-format="dd-mm-yyyy" />
                                        <label className=' fw-bold mx-1'>to</label>
                                        <input type="date" name="posted-to" id='posted-to' className="input form-control" data-date="2023-02-01T05:25:07Z" data-date-format="dd-mm-yyyy" />
                                    </div>
                                </div>
                                {/* <!-- END FILTER BY POSTED DATE --> */}


                                {/* <!-- BEGIN FILTER BY DEADLINE DATE --> */}
                                <div className=" my-md-3">
                                    <h5 className=' fw-bold'>By Deadline:</h5>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <input type="date" name="deadline-from" id='deadline-from' className="input form-control" data-date="2023-02-01T05:25:07Z" data-date-format="dd-mm-yyyy" />
                                        <label className=' fw-bold mx-1'>to</label>
                                        <input type="date" name="deadline-to" id='deadline-to' className="input form-control" data-date="2023-02-01T05:25:07Z" data-date-format="dd-mm-yyyy" />
                                    </div>
                                </div>
                                {/* <!-- END FILTER BY DEADLINE DATE --> */}


                                {/* <!-- BEGIN FILTER BY PRICE --> */}

                                <div className=" my-md-3">
                                    <h5 className=' fw-bold'>By Salary:</h5>
                                    <div className='d-flex justify-content-between align-items-center'>

                                        <input type="text" id='salary-from' placeholder="Salary From" className="input form-control" />
                                        <label className=' fw-bold mx-1'>to</label>
                                        <input type="text" id='salary-to' placeholder="Salary To" className="input form-control" />
                                    </div>
                                </div>

                            </div>
                            {/* <!-- END FILTERS --> */}


                            {/* <!-- BEGIN RESULT --> */}
                            <div className="col-md-9 mt-md-0 mt-5">
                                <h2><FaFile></FaFile> Result</h2>
                                <hr />
                                {/* <!-- BEGIN SEARCH INPUT --> */}
                                <div className="input-group">
                                    <input type="text" className="form-control" value="web development" />
                                    <span className="input-group-btn">
                                        <button className="custom_btn" type="button"><FaSearch className='' />Search</button>
                                    </span>
                                </div>
                                {/* <!-- END SEARCH INPUT --> */}

                                <p className=' fw-bold'>Showing all results matching "web development"</p>

                                <div className="padding"></div>

                                <div className="row">
                                    {/* <!-- BEGIN ORDER RESULT --> */}
                                    <div className="col-9">
                                        <select className="form-select">
                                            <option disabled selected>Order By</option>
                                            <option value={0}>Name</option>
                                            <option value={1}>Posted</option>
                                            <option value={2}>Deadline</option>
                                            <option value={3}>Salary</option>
                                        </select>
                                    </div>
                                    {/* <!-- END ORDER RESULT --> */}

                                    <div className="col-3">
                                        <div className=' float-end'>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-default active"><FaList></FaList> </button>
                                                <button type="button" className="btn btn-default"><FaTh></FaTh></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- BEGIN TABLE RESULT --> */}
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <th>SL</th>
                                                <th>Title</th>
                                                <th>Location</th>
                                                <th>Details</th>
                                                <th>Posted</th>
                                                <th>DeadLine</th>
                                                <th>Salary</th>
                                            </tr>
                                            <tr>
                                                <td className="number text-center">1</td>
                                                <td className="jobs"><strong>Web Development</strong></td>
                                                <td className=""><> Dhaka</></td>
                                                <td>This is the jobs description.</td>
                                                <td>01/02/2023</td>
                                                <td>01/03/2023</td>
                                                <td className=""> ???40000 </td>
                                            </tr>
                                            <tr>
                                                <td className="number text-center">2</td>
                                                <td className="jobs"><strong>Full Stack Web Development</strong></td>
                                                <td className=""><> Dhaka</></td>
                                                <td>This is the jobs description.</td>
                                                <td>01/02/2023</td>
                                                <td>01/03/2023</td>
                                                <td className=""> ???40000 </td>
                                            </tr>
                                            <tr>
                                                <td className="number text-center">3</td>
                                                <td className="jobs"><strong>MERN Web Development</strong></td>
                                                <td className=""><> Dhaka</></td>
                                                <td>This is the jobs description.</td>
                                                <td>01/02/2023</td>
                                                <td>01/03/2023</td>
                                                <td className=""> ???50000 </td>
                                            </tr>
                                            <tr>
                                                <td className="number text-center">4</td>
                                                <td className="jobs"><strong>Front End Web Development</strong></td>
                                                <td className=""><> Dhaka</></td>
                                                <td>This is the jobs description.</td>
                                                <td>01/02/2023</td>
                                                <td>01/03/2023</td>
                                                <td className=""> ???40000 </td>
                                            </tr>
                                            <tr>
                                                <td className="number text-center">5</td>
                                                <td className="jobs"><strong>Back End Web Development</strong></td>
                                                <td className=""><> Dhaka</></td>
                                                <td>This is the jobs description.</td>
                                                <td>01/02/2023</td>
                                                <td>01/03/2023</td>
                                                <td className=""> ???40000 </td>
                                            </tr>
                                            <tr>
                                                <td className="number text-center">6</td>
                                                <td className="jobs"><strong>MERN Web Development</strong></td>
                                                <td className=""><> Dhaka</></td>
                                                <td>This is the jobs description.</td>
                                                <td>01/02/2023</td>
                                                <td>01/03/2023</td>
                                                <td className=""> ???120000 </td>
                                            </tr>
                                            <tr>
                                                <td className="number text-center">7</td>
                                                <td className="jobs"><strong>Web Development</strong></td>
                                                <td className=""><> Rajshahi</></td>
                                                <td>This is the jobs description.</td>
                                                <td>01/02/2023</td>
                                                <td>01/03/2023</td>
                                                <td className=""> ???20000 </td>
                                            </tr>
                                            <tr>
                                                <td className="number text-center">8</td>
                                                <td className="jobs"><strong>MEAN Stack Web Development</strong></td>
                                                <td className=""><> Dhaka</></td>
                                                <td>This is the jobs description.</td>
                                                <td>01/02/2023</td>
                                                <td>01/03/2023</td>
                                                <td className=""> ???35000 </td>
                                            </tr>
                                            <tr>
                                                <td className="number text-center">9</td>
                                                <td className="jobs"><strong>Web Development</strong></td>
                                                <td className=""><> Dhaka</></td>
                                                <td>This is the jobs description.</td>
                                                <td>01/02/2023</td>
                                                <td>01/03/2023</td>
                                                <td className=""> ???20000 </td>
                                            </tr>
                                            <tr>
                                                <td className="number text-center">10</td>
                                                <td className="jobs"><strong>Wordpress Web Development</strong></td>
                                                <td className=""><> Chattogram</></td>
                                                <td>This is the jobs description.</td>
                                                <td>01/02/2023</td>
                                                <td>01/03/2023</td>
                                                <td className=""> ???40000 </td>
                                            </tr>

                                        </tbody></table>
                                </div>
                                {/* <!-- END TABLE RESULT --> */}

                                {/* <!-- BEGIN PAGINATION --> */}
                                <div className=' d-flex justify-content-center'>
                                    <nav aria-label="..." className=' '>
                                        <ul className="pagination">
                                            <li className="page-item disabled">
                                                <span className="page-link">Previous</span>
                                            </li>
                                            <li className="page-item active" aria-current="page">
                                                <span className="page-link">1</span>
                                            </li>
                                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">6</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">Next</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* <!-- END PAGINATION --> */}
                            </div>
                            {/* <!-- END RESULT --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindJob;