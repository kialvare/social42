import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import './Calendar.css';
import Breadcrumb from 'antd/lib/breadcrumb';
import { Calendar, Modal, Button } from 'antd';
const { Content } = Layout;

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'normal', content: 'This is usual event.' },
      ]; break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'normal', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ]; break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'normal', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
      ]; break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {
        listData.map(item => (
          <li key={item.content}>
            <span className={`event-${item.type}`}>●</span>
            {item.content}
          </li>
        ))
      }
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return "Next Month";
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? <div className="notes-month">
    <section>{num}</section>
    <span>Backlog number</span>
  </div> : null;
}

// function onSelect(value) {
//   //Modal.visible = true;
//   console.log(value);
//   //console.log(value._d.getMonth() + 1);
//   //console.log(value._d.getDate());
//   //console.log(value._d.getFullYear());
//   //var date = {date = value._d.getDate(), };
//   return (value._d)
// }

// function onOk(value) {
//   console.log(value);
// }

// function  show(value) {
//   console.log("in");
// }

// function show(value) {
//   console.log("in");
//   return (value.toString());
// }

class CalendarPage extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      visible: false,
      title: "",
      event: {date: "", time: "", type: "", head: "", descripion: ""},
      items: []
    }
  }
  showModal = (value) => {
    const string = value.format('dddd, MMMM Do, YYYY');
    this.setState({
      visible: true,
      title: string,
      event: {date: string, time: "", type: "", head: "", description: ""}
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  addEvent = (value) => {
    let item = this.state.items;
    if (this.state.event.date.length > 0 && this.state.event.date === this.state.title) {
      item.push(this.state.event);
      this.setState({
        items: item,
        visible: false
      });
    }
    // else {

    // }
    console.log(item.length);
    //console.log(item);
  }
	render() {
    //let list = this.state.event;
    let view = this.state.items.length ? this.state.items.map((val, idx) => {
        return (<p key={idx}>{this.state.items[idx].date}</p>)
    }) : <p>No events today</p>
		return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Page</Breadcrumb.Item>
                    <Breadcrumb.Item>Calendar</Breadcrumb.Item>
                </Breadcrumb>
                <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} onSelect={this.showModal}/>
                {/* <Modal onOk={onOk}/> */}
                <Modal
                  title={this.state.title}
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  footer={[
                    <Button key="back" size="large" onClick={this.handleCancel}>Cancel</Button>,
                    <Button key="add" type="primary" size="large" onClick={this.addEvent}>
                        Add Event
                    </Button>,
                  ]}
                  >
                    {view}
                </Modal>
            </Content>
		);
	}
}

export default CalendarPage;