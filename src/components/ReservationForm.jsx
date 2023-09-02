// ReservationForm.js
import React, { useState } from "react";
import Modal from "./Modal";
import "../css/reservationform.css";

function ReservationForm() {
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setErrorMsg("");
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the date and time
    const currentDate = new Date();
    const selectedDate = new Date(date);
    const selectedTime = new Date(`1970-01-01T${time}`);

    if (selectedDate < currentDate) {
      setErrorMsg("Please select a future date.");
      return;
    }

    if (
      selectedDate.toDateString() === currentDate.toDateString() &&
      selectedTime <= currentDate
    ) {
      setErrorMsg("Please select a future time.");
      return;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDate("");
    setGuests("");
    setTime("");
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="guests">Number of Guests:</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={guests}
              onChange={handleGuestsChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={handleDateChange}
              min={new Date().toISOString().split("T")[0]} // Set min date to today
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={handleTimeChange}
              required
            />
          </div>
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
          <button type="submit">Submit</button>
        </form>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          message="Reservation submitted successfully!"
        />
      </div>
    </>
  );
}

export default ReservationForm;
