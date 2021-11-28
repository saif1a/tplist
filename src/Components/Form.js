
import React from 'react'
import countries from "../Constants/Countries";



function Formular(props) {
  const { formData, handleSubmit, handleChange } = props.data;

    return (
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>
                  <strong>Gender :</strong>
                </label>
                </div>
                <div className="form-group mb-3">
                <label htmlFor="male">Male</label>
                <input
                  id="male"
                  name="gender"
                  type="radio"
                  className="form-check-input"
                  value="Male"
                  onChange={handleChange} required
                />
                <label htmlFor="female">Female</label>
                <input
                  id="female"
                  name="gender"
                  type="radio"
                  className="form-check-input"
                  value="Female"
                  onChange={handleChange} required
                />
              </div>
              <div className="form-group mb-3">
                <label >
                  <strong>Full Name :</strong>
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="form-group form-control"
                  value={formData.name}
                  onChange={handleChange} required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="age" >
                  <strong>Age :</strong>
                </label>
                <input
                  name="age"
                  id="age"
                  type="number"
                  className="form-control"
                  value={formData.age}
                  onChange={handleChange} required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="date">
                  <strong>Date :</strong>
                </label>
                <input
                  name="date"
                  id="date"
                  type="date"
                  className="form-control"
                  value={formData.date}
                  onChange={handleChange} required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="country">
                  <strong>country :</strong>
                </label>
                <select
                  defaultValue={'DEFAULT'}
                  name="country"
                  id="country"
                  className="form-select"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="DEFAULT"> Select Country </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              
              <div className="d-grid mt-3">
                <input  type="submit" value="Submit" className="btn btn-primary btn-block" />
              </div>
            </form>
    );
}
export default Formular;