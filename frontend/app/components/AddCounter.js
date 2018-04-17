import React, { Fragment } from 'react';
import { Input, Button, Form } from 'antd';

const AddCounter = (props) => {
  return (
    <Fragment>
      <Form onSubmit={props.onAddRecordFormSubmit} className="form-wrapper">
        <Input placeholder="Add record" value={props.input} onChange={props.onAddRecordInputChange} />
        <Button
          htmlType="submit"
          type="primary"
          disabled={!props.input}
        >
          Add
        </Button>
      </Form>
    </Fragment>
  );
};

export default AddCounter;
