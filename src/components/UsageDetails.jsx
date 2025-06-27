import React from 'react'
import '../scss/usage.scss'
import { Link } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'

const UsageDetails = () => {
    return (
        <div className='usageDetailsWrap'>
            <div className="usageTop"></div>
            <div className='minbanner'>
                <img src={process.env.PUBLIC_URL + "/img/minibanner.jpg"} alt="미니배너" />
            </div>

            <div className="usageContentWrap">
                <div className="usageSubMenu">
                    <div className="usageMenu1">
                        <h3>이용내역</h3>
                    </div>

                    <div className="usageMenu2 usageDetailsMenu2">
                        <Link to={'/usage'} style={{ textDecoration: 'none' }}>
                            <p>이용내역 조회</p>
                        </Link>
                    </div>

                    <div className="usageMenu3 usageDetailsMenu3">
                        <Link to={Link} as={'/usage'} style={{ textDecoration: 'none' }}>
                            <p>이용상세내역</p>
                        </Link>
                    </div>

                    <div className='usageMenu4'></div>
                </div>

                <div className="contentBoxWrap">
                    <h2>이용상세내역</h2>

                    <div className="contentBox usageDetailsBox">
                        <div className="usageDetails1">

                            <div className="usageDetilsFont">
                                <p>2025-00-00</p>
                                <h4>주문번호 2025000020250000</h4>
                            </div>

                            <Table bordered >
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>

                                    <tr>
                                        <th>2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                </tbody>

                            </Table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsageDetails