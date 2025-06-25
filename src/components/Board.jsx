import React, { useState } from 'react';

import { Button, Table, Form, Alert } from 'react-bootstrap';

import "../scss/board.scss";



const Board = () => {

    // 게시물 목록 상태 관리

    const [boardList, setBoardList] = useState([
        {
            no: "1",
            title: '환불 기간 및 수수료 관련 안내',
            date: '2025-06-24',
            content: `
안녕하세요, 고객 여러분.

티켓 환불과 관련하여 아래와 같이 수수료 정책을 안내드립니다.

- 환불 신청 기간 및 수수료
- 이용일 기준 7일 전까지 환불 요청 시: 10% 수수료 공제
- 이용일 기준 3일 전까지 환불 요청 시: 20% 수수료 공제
- 이용일 기준 1일 전까지 환불 요청 시: 30% 수수료 공제
- 이용 당일 및 이후 환불 불가

- 환불 신청 방법: 고객센터 연락 또는 홈페이지 환불 신청
- 환불 처리 기간: 접수 후 영업일 기준 3~5일 이내 처리

궁금하신 사항은 고객센터로 문의해 주세요.
감사합니다.
`
        },
        {
            no: "2",
            title: '정기권 결제 포인트 사용법',
            date: '2025-05-18',
            content: `
정기권 결제 시 포인트 사용법 안내

안녕하세요, 고객 여러분.

정기권 결제 시 포인트를 어떻게 사용할 수 있는지 안내드립니다.

1. 포인트 적립
- 정기권 결제 시 결제 금액의 5%를 포인트로 적립해 드립니다.
- 적립된 포인트는 다음 결제 시 현금처럼 사용할 수 있습니다.

2. 포인트 사용 방법
- 결제 화면에서 ‘포인트 사용’ 옵션을 선택하세요.
- 사용 가능한 포인트 범위 내에서 자유롭게 사용하실 수 있습니다.
- 포인트는 1포인트당 1원으로 계산됩니다.

3. 유의 사항
- 포인트는 현금으로 환불되지 않습니다.
- 적립 포인트의 유효 기간은 적립일로부터 1년입니다.
- 포인트 사용 시 일부 프로모션과 중복 적용이 불가할 수 있습니다.

궁금하신 점은 고객센터로 문의해 주세요.
감사합니다.
`
        },
        {
            no: "3",
            title: '포인트 환불 관련',
            date: '2025-05-02',
            content: `
포인트 환불 관련 안내

안녕하세요, 고객 여러분.

포인트 환불과 관련된 정책을 안내드립니다.

1. 포인트 환불 기준
- 적립된 포인트는 현금 환불이 불가합니다.
- 다만, 서비스 이용 취소 시 사용하신 포인트는 자동으로 반환됩니다.

2. 포인트 환불 신청 방법
- 서비스 이용 취소 후 7일 이내 고객센터로 문의해 주세요.
- 포인트 반환은 취소 승인 후 영업일 기준 3일 이내 처리됩니다.

3. 유의 사항
- 부정 사용 및 규정 위반 시 포인트 환불 및 적립이 제한될 수 있습니다.
- 포인트 유효기간 경과 시 환불 및 복구가 불가능합니다.

궁금하신 점은 언제든지 고객센터로 문의 바랍니다.
감사합니다.
`
        },
        {
            no: "4",
            title: '조회 오류 점검',
            date: '2025-02-28',
            content: `
주차 조회 오류 관련 안내

안녕하세요, 고객 여러분.

최근 주차 조회 시스템에서 일부 오류가 발생하여 불편을 끼쳐드린 점 진심으로 사과드립니다.

- 오류 내용: 주차 가능 여부 및 위치 정보가 정상적으로 표시되지 않는 현상
- 발생 원인: 시스템 업데이트 중 데이터 동기화 문제
- 조치 사항: 현재 문제를 긴급 점검 중이며, 빠른 시일 내에 정상화 작업을 완료할 예정입니다.

고객님께서는 불편을 최소화하기 위해 임시로 주차장 관리자에게 직접 문의해 주시길 부탁드립니다.

불편을 드려 대단히 죄송하며, 신속한 해결에 최선을 다하겠습니다.

감사합니다.
`
        },
    ]);

    // UI 상태들
    const [listOk, setListOk] = useState(true);  // 게시글 전체리스트
    const [readOk, setReadOk] = useState(false);  // 게시글 읽기
    const [writeOk, setWriteOk] = useState(false);  // 게시글 쓰기
    const [editOk, setEditOk] = useState(false);  // 게시글 수정
    const [boardInfo, setBoardInfo] = useState({});  // 현재 읽고 있는 게시글의 정보 (제목, 내용 등)를 저장하는 상태


    // 작성 폼 상태들
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // 수정 상태들 추가
    // const [editNo, setEditNo] = useState(null); // 수정할 게시물 번호
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');

    // 오류 메시지 상태
    const [errorMessage, setErrorMessage] = useState('');

    // 게시글 목록 보기
    const boardListView = () => {
        setReadOk(false);
        setWriteOk(false);
        setEditOk(false);
        setListOk(true);
    };

    // 게시글 읽기
    const boardRead = (no) => {
        setListOk(false);
        setWriteOk(false);
        setEditOk(false);
        setReadOk(true);

        const selectedBoard = boardList.find(b => b.no === no);  // 클릭한 게시물 번호를 찾아
        setBoardInfo(selectedBoard);  // 현재 읽고 있는 게시글의 정보를 저장해서 화면에 렌더링
    };


    // 새 글 저장
    const boardSave = () => {
        // 제목과 설명이 비어있으면 유효성 검사
        if (title.trim() === '' || description.trim() === '') {
            setErrorMessage('제목과 내용을 모두 입력해주세요!');
            return;
        }

        // 새 글 추가
        const newBoard = {
            no: (boardList.length + 1).toString(),
            title: title,
            description: description,
            viewCount: 0  // 초기 조회수는 0
        };

        setBoardList([...boardList, newBoard]);
        setTitle('');
        setDescription('');
        setErrorMessage('');  // 오류 메시지 초기화
        boardListView();  // 새글 저장후 게시글 목록 함수 호출
    };


    return (

        <div className="container" style={{ marginTop: "30px" }}>

            {/* 과일 목록 보기 */}
            {listOk && (
                <div style={{ marginTop: "30px" }}>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>no</th>
                                <th>제목</th>
                                <th>작성일</th>
                            </tr>
                        </thead>

                        <tbody>
                            {boardList.slice().reverse().map(board => (
                                <tr key={board.no}>
                                    <td>{board.no}</td>
                                    <td style={{ cursor: 'pointer', textAlign: 'left' }} onClick={() => boardRead(board.no)}>
                                        {board.title}
                                    </td>
                                    <td style={{ cursor: 'pointer', textAlign: 'left' }} onClick={() => boardRead(board.no)}>
                                        {board.date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}

            {/* 게시글 읽기 */}
            {readOk && (
                <div>
                    <h5 style={{ textAlign: "left" }}>{boardInfo.title}</h5>

                    <hr></hr>

                    <pre style={{ textAlign: "left", whiteSpace: 'pre-wrap' }}>
                        {boardInfo.content || boardInfo.description}
                    </pre>

                    <br></br>

                    <div style={{ textAlign: "right" }}>
                        <Button className='listgo' onClick={boardListView} style={{ textAlign: "right" }}>
                            목록으로
                        </Button>
                    </div>
                </div>
            )}

            {/* 새 글 작성 폼 */}
            {writeOk && (
                <div style={{ marginTop: "30px" }}>
                    <h5 style={{ textAlign: "left" }}>과일농장에게 문의글 남기기</h5>

                    {/* 오류 메시지 표시 */}
                    {errorMessage && (
                        <Alert variant="danger">{errorMessage}</Alert>
                    )}

                    <Form.Group controlId="formName">
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="게시글을 입력하세요"
                        />
                    </Form.Group>

                    <Form.Group controlId="formDescription" style={{ marginTop: "30px" }}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="게시물에 작성하세요"
                        />
                    </Form.Group>

                    <br></br>

                    <div style={{ textAlign: "right" }}>
                        <Button variant="primary" onClick={boardSave} style={{ marginRight: "10px" }}>저장</Button>
                        <Button variant="secondary" onClick={boardListView}>목록으로</Button>
                    </div>
                </div>
            )}

            {/* 과일 수정 폼 */}
            {editOk && (
                <div style={{ marginTop: "30px" }}>
                    <h5 style={{ textAlign: "left" }}>게시물 수정</h5>
                    <Form.Group controlId="formEditName">

                        <Form.Control
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            placeholder="수정된 제목"
                        />
                    </Form.Group>

                    <br></br>

                    <Form.Group controlId="formEditDescription">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                            placeholder="수정된 설명"
                        />
                    </Form.Group>
                </div>
            )}
        </div>
    );
};

export default Board;