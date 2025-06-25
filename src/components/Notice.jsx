import React from 'react'
import "../scss/notice.scss";
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import Board from './Board';
import "../scss/board.scss";

const Notice = () => {
    return (
        <>
            <div className='mt-5 wrapbox'>
                <Row>
                    <Col xs={12} md={8}>
                        <Tabs
                            defaultActiveKey="home"
                            id="uncontrolled-tab-example"
                            className="mb-3">
                            <Tab eventKey="home" title="공지사항">
                                <Board></Board>
                            </Tab>
                            <Tab eventKey="profile" title="자주 묻는 질문" disabled>
                                Tab content for Profile
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="number">
                            <div className="call">
                                <img src={process.env.PUBLIC_URL + "../img/call.png"} alt="" />
                                <h3>전화문의</h3>
                            </div>
                            <h2>파켓 대표전화 <span>031-123-4567</span></h2>
                            <p><span>통합 콜센터</span> 031-324-4632 <br />
                                <span>정기권 문의</span> 031-324-4557 <br />
                                <span>주차 및 정산 문의</span> 031-324-2134
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Notice