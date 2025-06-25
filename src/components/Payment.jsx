import React from 'react'
import { useState } from 'react';
import { Button, Col, Container, Form, Row, Tab, Tabs } from 'react-bootstrap';
import '../scss/paymentTab.scss'

// 주차장 정보 가져오기
import parkinglotData from '../data/parkingLotData';

function makeNumArray(amount) {
  let numArray = new Array(amount);
  for (let i = 0; i < amount; i++) {
    numArray[i] = i;
  }
  return numArray;
}

const Payment = () => {

    let [parkingLots, setParkingLots] = useState(parkinglotData);
    let [disableSelected, setDisableSelected] = useState(true);
    let [disableInput, setDisableInput] = useState(true);
    const [key, setKey] = useState('payment');

    // 선택한 내용: 내용 전달, 초기화에 사용
    const [selectedArea, setSelectedArea] = useState(''); // 지역
    const [selectedParkinglot, setSelectedParkinglot] = useState(''); // 주차장
    const [selectedEnterHour, setSelectedEnterHour] = useState('');
    const [selectedEnterMinute, setSelectedEnterMinute] = useState('');
    const [selectedExitHour, setSelectedExitHour] = useState('');
    const [selectedExitMinute, setSelectedExitMinute] = useState('');

    let locationOptions = new Array();
    parkinglotData.forEach(oneData => {
        if(!locationOptions.includes(oneData.location)){
            locationOptions.push(oneData.location);
        }
    });

    // 시간 목록
    const [hourList] = useState(makeNumArray(24));
    const [minuteList] = useState(makeNumArray(60));
    
    // 지역 선택하면 주차장선택 가능하게 하고 선택 목록 생성
    const bringParkinglotsOnThisArea = area => {
        setSelectedParkinglot('');
        setSelectedArea(area);

        if (area=="") {
            setDisableSelected(true);
        } else {
            setDisableSelected(false);
            setParkingLots(
                parkinglotData.filter(data => data.location == area)
            );
        }
    }

    // 차량번호 정규표현 (ex: 12가3456 or 789힣6543)
    const carNumRE = new RegExp("^\\d{2,3}[가-힣]\\d{4}$")

    // 조회 메세지 표시
    const [open, setOpen] = useState(false);
    const checkPayment = () => {
        setOpen(!open);
    }

    return (
        <Container id='payment'>
            <h2 className='subtitle'>주차 요금 조회</h2>
            <Tabs
            activeKey={key}
            onSelect={(k) => {
                setKey(k);
                setSelectedParkinglot('');
                setSelectedArea('');
            }}
            justify={true}
            className='paymentTabs'
            variant='pills'
            >
            {/* 주차 요금 조회 / 정산 */}
            <Tab  
                eventKey="payment"
                title="주차 요금 조회 / 정산"
                className='paymentTab'
            >
                <Row>
                <Col className='paymentForm'>
                    <Form>
                    <Form.Group className='selectLong'>
                        <Form.Label className='paymentLabel'>지역선택</Form.Label>
                        <Form.Select
                        onChange={(event) => bringParkinglotsOnThisArea(event.target.value)}
                        value={selectedArea}
                        >
                        <option value="">지역을 선택해주세요!</option>
                        {locationOptions.map((area, i) => 
                            <option value={area} key={i}>{area}</option>  
                        )}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='selectLong'>
                        <Form.Label className='paymentLabel' defaultValue={""}>주차장선택</Form.Label>
                        <Form.Select
                            disabled={disableSelected}
                            value={selectedParkinglot}
                            onChange={(event) => setSelectedParkinglot(event.target.value)}
                        >
                        <option value="" checked>주차장을 선택해주세요!</option>
                        {parkingLots.map((lot, i) => 
                            <option value={lot.partkingName} key={i}>{lot.partkingName}</option>
                        )}
                        
                        </Form.Select>
                    </Form.Group>

                        <Form.Group className='inputShortLeft'>
                        <Form.Label className='paymentLabel'>차량번호</Form.Label>
                        <Form.Control
                            type='text'
                            disabled={disableInput}
                        />
                    </Form.Group>
                    
                    <Form.Group className='inputShortRight'>
                        <div className="checkboxInput">
                        <Form.Label className='checkboxLabel'>전기차 충전 여부</Form.Label>
                        <Form.Check type='checkbox'/><br/>
                        <Form.Label className='checkboxLabel'>충전하시는 분만 체크해주세요</Form.Label>
                        </div>
                    </Form.Group>

                    <Form.Group className='inputShortLeft'>
                        <Form.Label className='paymentLabel'>입차일시</Form.Label>
                        <div className="timeForm">
                        <Form.Select
                            className='timeSelect'
                            value={selectedEnterHour}
                            onChange={(event) => setSelectedEnterHour(event.target.value)}
                        >
                            <option value="" >시간</option>
                            {hourList.map((hour, i) => 
                            <option value={hour} key={i}>{hour}</option>
                            )}
                        </Form.Select>
                        시
                        <Form.Select
                            className='timeSelect'
                            value={selectedEnterMinute}
                            onChange={(event) => setSelectedEnterMinute(event.target.value)}
                        >
                            <option value="" >분</option>
                            {minuteList.map((minute, i) => 
                            <option value={minute} key={i}>{minute}</option>
                            )}
                        </Form.Select>
                        분
                        </div>
                    </Form.Group>

                    <Form.Group className='inputShortRight'>
                        <Form.Label className='paymentLabel'>출차일시</Form.Label>
                        <div className="timeForm">
                            <Form.Select
                                className='timeSelect'
                                value={selectedExitHour}
                                onChange={(event) => setSelectedExitHour(event.target.value)}
                            >
                                <option value="" >시간</option>
                                {hourList.map((hour, i) => 
                                <option value={hour} key={i}>{hour}</option>
                                )}
                            </Form.Select>
                            시
                            <Form.Select
                                className='timeSelect'
                                value={selectedExitMinute}
                                onChange={(event) => setSelectedExitMinute(event.target.value)}                                
                            >
                                <option value="" >분</option>
                                {minuteList.map((minute, i) => 
                                <option value={minute} key={i}>{minute}</option>
                                )}
                            </Form.Select>
                            분
                        </div>
                    </Form.Group>

                    

                    <div id="example-collapse-text">
                        <p>결과표시가</p>
                        <h2>이렇게 됩니다!</h2>
                    </div>
                    <Button
                        className='checkPay'
                        onClick={() => checkPayment()}
                        aria-expanded={open}
                    >
                        조회하기

                    </Button>
                    <Button className='commitPay'>정산하기</Button>
                    </Form>
                </Col>

                <Col className='paymentBanner'>
                    <div className='bannerBox'>

                    </div>
                </Col>
                </Row>
                
            </Tab>

            {/* 주차 예상 요금 조회 */}
            <Tab
                eventKey="estimate"
                title="주차 예상 요금 조회"
                className='paymentTab'
            >
                <Row>
                <Col className='paymentForm'>
                    <Form>
                    <Form.Group className='selectLong'>
                        <Form.Label className='paymentLabel'>지역선택</Form.Label>
                        <Form.Select onChange={(event) => {bringParkinglotsOnThisArea(event.target.value)}}>
                        <option value="">지역을 선택해주세요!</option>
                        {locationOptions.map((area, i) => 
                            <option value={area} key={i}>{area}</option>  
                        )}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='selectLong'>
                        <Form.Label className='paymentLabel'>주차장선택</Form.Label>
                        <Form.Select disabled={disableSelected}>
                        <option value="" >주차장을 선택해주세요!</option>
                        {parkingLots.map((lot, i) => 
                            <option value={lot.partkingName} key={i}>{lot.partkingName}</option>
                        )}
                        
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='inputShortLeft'>
                        <Form.Label className='paymentLabel'>입차일시</Form.Label>
                        <div className="timeForm">
                        <Form.Select className='timeSelect'>
                            <option value="" >시간</option>
                            {hourList.map((hour, i) => 
                            <option value={hour} key={i}>{hour}</option>
                            )}
                        </Form.Select>
                        시
                        <Form.Select className='timeSelect'>
                            <option value="" >분</option>
                            {minuteList.map((minute, i) => 
                            <option value={minute} key={i}>{minute}</option>
                            )}
                        </Form.Select>
                        분
                        </div>
                    </Form.Group>

                    <Form.Group className='inputShortRight'>
                        <Form.Label className='paymentLabel'>출차일시</Form.Label>
                        <div className="timeForm">
                        <Form.Select className='timeSelect'>
                            <option value="" >시간</option>
                            {hourList.map((hour, i) => 
                            <option value={hour} key={i}>{hour}</option>
                            )}
                        </Form.Select>
                        시
                        <Form.Select className='timeSelect'>
                            <option value="" >분</option>
                            {minuteList.map((minute, i) => 
                            <option value={minute} key={i}>{minute}</option>
                            )}
                        </Form.Select>
                        분
                        </div>
                    </Form.Group>

                    <Form.Group className='inputShortLeft'>
                        <div className="checkboxInput">
                        <Form.Label className='checkboxLabel'>전기차 충전 여부</Form.Label>
                        <Form.Check type='checkbox'/><br/>
                        <Form.Label className='checkboxLabel'>충전하시는 분만 체크해주세요</Form.Label>
                        </div>
                    </Form.Group>

                    <Button
                        className='estimatePay'
                    >조회하기</Button>
                    </Form>
                </Col>

                <Col className='paymentBanner'>
                    <div className='bannerBox'>
                    
                    </div>
                </Col>
                </Row>
            </Tab>
            </Tabs>
        </Container>
    )
}

export default Payment