import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AddPage.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddNewPage: React.FC = () => {
    return (
        <div className="m-3 bg-white">
            <Container fluid className='main-container bg-white'>
                <Row className='title-row'>
                    <p>Add Page</p>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields '>
                        <p>Name</p>
                        <input placeholder='Enter Page Title' className='new-page-input' type='name' />
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields'>
                        <p>Meta Title</p>
                        <input placeholder='Enter Meta Title' className='new-page-input' type='name' />
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields'>
                        <p>Meta Tag</p>
                        <input placeholder='Enter Meta Title' className='new-page-input' type='name' />
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields'>
                        <p>Meta Description</p>
                        <textarea
                            className='page_meta_desc new-page-textarea'
                            name='page_meta_desc'
                            cols={50}
                            rows={10}
                        ></textarea>
                    </Col>
                </Row>

                <Row>
                    <Col className='form-fields'>
                        <CKEditor
                            editor={ClassicEditor}
                            data='<p>Hello from CKEditor 5!</p>'
                            onReady={(editor) => {
                            }}
                            onChange={(event, editor) => {
                                // const data = editor.getData();
                            }}
                            onBlur={(event, editor) => {
                            }}
                            onFocus={(event, editor) => {
                            }}
                        />
                    </Col>
                </Row>
                <Row className='form-row'>
                    <Col className='form-fields'>
                        <p>Status</p>
                        <select name='drpStatus' className='form-control' id='drpStatus'>
                            <option value=''>Select status</option>
                            <option value='1'>Active</option>
                            <option value='0'>Inactive</option>
                        </select>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export { AddNewPage };
