import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Button, Form } from 'react-bootstrap';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: new Date(), end: new Date() });

  useEffect(() => {
    setEvents([
      {
        title: 'Event 1',
        start: new Date(),
        end: new Date(moment().add(1, 'days')),
      },
    ]);
  }, []);

  const handleSelect = ({ start, end }) => {
    setNewEvent({ title: '', start, end });
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleDateChange = (e, type) => {
    setNewEvent({ ...newEvent, [type]: new Date(e.target.value) });
  };

  const handleSubmit = () => {
    if (newEvent.title) {
      setEvents([...events, newEvent]);
      setShowForm(false);
      setNewEvent({ title: '', start: new Date(), end: new Date() });
    }
  };

  const handleSelectEvent = (event) => {
    if (window.confirm(`Are you sure you want to delete "${event.title}"?`)) {
      setEvents(events.filter(e => e !== event));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={handleSelectEvent}
      />

      {/* Bootstrap Modal for Event Creation */}
      <Modal show={showForm} onHide={() => setShowForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleChange}
                placeholder="Event title"
              />
            </Form.Group>
            <Form.Group controlId="formEventStart">
              <Form.Label>Start</Form.Label>
              <Form.Control
                type="datetime-local"
                value={newEvent.start.toISOString().slice(0, 16)}
                onChange={(e) => handleDateChange(e, 'start')}
              />
            </Form.Group>
            <Form.Group controlId="formEventEnd">
              <Form.Label>End</Form.Label>
              <Form.Control
                type="datetime-local"
                value={newEvent.end.toISOString().slice(0, 16)}
                onChange={(e) => handleDateChange(e, 'end')}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowForm(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Event
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyCalendar;
