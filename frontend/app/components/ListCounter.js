import React from 'react';
import { List, Button } from 'antd';

const ListCounter = (props) => {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={props.counters}
      renderItem={item => (
        <List.Item>
          <div className="list-item-wrapper">
            <h4 className="list-item-title">
              <Button type="danger" icon="close" onClick={() => props.onDeleteCounter(item.id)} />
              <span>{item.title}</span>
            </h4>
            <div className="list-item-buttons">
              <Button icon="plus" type="primary" onClick={() => props.onCounterAction(item.id, 'increment')} />
              <span>{item.count}</span>
              <Button icon="minus" type="primary" onClick={() => props.onCounterAction(item.id, 'decrement')} />
            </div>
          </div>
        </List.Item>
      )}
    />
  );
};

export default ListCounter;
