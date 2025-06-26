import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import noticeData from '../data/noticeData';

const Board = () => {
    let [notice] = useState(noticeData);
    return (
        <>
            <Table size="sm">
                <thead>
                    <tr>
                        
                        <th>제목</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {notice.slice(0, 4).map((item, i) => (
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Board