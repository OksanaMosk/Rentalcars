import React, { useRef, useEffect } from 'react';
import Close from '../../images/noFavor.png';
import css from './ModalWindow.module.css';
import Backdrop from '../Backdrop/Backdrop';
import { createPortal } from 'react-dom';

export default function ModalWindow({
  open,
  onClose,
  data,

  id,
  year,
  make,
  model,
  type,
  img,
  accessories,
  rentalPrice,
  rentalCompany,
  address,
  engineSize,
  description,
  rentalConditions,
  fuelConsumption,
  mileage,
  functionalities,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const partsOfAddress = address.split(', ');
  const partOfRentalConditions = rentalConditions.split(', ');

  return createPortal(
    <>
      {open && <Backdrop onClick={onClose} />}
      <div
        ref={modalRef}
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={css.modaContent}>
          <div className={css.modaC}>
            <button className={css.closeIcon} onClick={onClose}>
              <img src={Close} alt="Close button" className="iconX" />
            </button>
            <img
              src={img}
              alt={make}
              className={css.carImage}
              style={{ width: '468', height: '248', objectFit: 'cover' }}
            />
            <div className={css.modalTextWrap}>
              <h2 className="car-title">
                {make} <span className="model">{model},</span>
                {year}
              </h2>
              <ul className={css.carInfoList}>
                <li>{partsOfAddress[1]}</li>|<li>{partsOfAddress[2]}</li>|
                <li>Id: {id}</li>
                <li>Year: {year}</li>
                <li>Type: {type}</li>
              </ul>
              <ul className={css.carInfoList}>
                <li>Fuel Consumption: {fuelConsumption}</li>
                <li>Engine Size: {engineSize}</li>
              </ul>
              <p className={css.description}>{description}</p>
              <p className={css.infoTitle}>Accessories and functionalities:</p>
              <ul className={css.infoList}>
                {accessories.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <ul className={css.infoList}>
                {functionalities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className={css.infoTitle}>Rental Conditions:</p>
              <ul className={css.conditionTist}>
                <li>Minimum age: {new Date().getFullYear() - year}</li>
                <li>{partOfRentalConditions[1]}</li>
                <li>{partOfRentalConditions[2]}</li>

                <li>Mileage: {mileage.toLocaleString('en-US')}</li>
                <li>Price: {rentalPrice}</li>
              </ul>
            </div>
            <button
              text="Rental car"
              width="168px"
              onClick={() => {
                window.location.href = 'tel:+380730000000';
              }}
            ></button>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
