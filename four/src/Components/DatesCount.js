import React from "react";
import { Col, Row } from "react-bootstrap";
const DatesCounts = ({person})=>{
    return(
        <>
        <Row className="justify-content-center my-2">
          <Col sm="8">لديك {person.length} مواعيد اليوم</Col>
        </Row>
        </>
    )
}
export default DatesCounts