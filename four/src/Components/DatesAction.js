import React from "react";
import { Col, Row, Button } from "react-bootstrap";
const DatesAction = ({deletedata, viewdata})=>{
    return(
        <>
        <Row className="justify-content-center my-2">
          <Col sm="8" className="d-flex justify-content-between">
            <Button onClick={deletedata}>مسح الكل</Button>
            <Button onClick={viewdata}>عرض البيانات</Button>
          </Col>
        </Row>
        </>
    )
}
export default DatesAction