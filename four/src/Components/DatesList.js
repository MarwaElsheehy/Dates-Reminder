import React from "react";
import { Col, Row } from "react-bootstrap";
const DatesList = ({person})=>{
    return(
        <>
        <Row className="justify-content-center">
          <Col sm="8">
            <div className="rectangle p-2">
              {person.length ? (person.map((item)=>{
                return(
                <>
                <div key={item.id} className="mx-3 d-flex border-bottom">
                <img src="p1.png" alt="rock" className="image" />
                <div className="px-3">
                <p className="d-inline fs-5">{item.name}</p>
                <p className="fs-6">{item.date}</p>
                </div>
                </div>
                </>
                 )
              })): <h2 className="text-center p-5">لا يوجد مواعيد اليوم</h2>}
              </div>
          </Col>
        </Row>
        </>
    )
}
export default DatesList