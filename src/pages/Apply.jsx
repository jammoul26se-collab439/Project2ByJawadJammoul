import { useState } from "react"
function Apply() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
    city: "",
    about:""
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const [submitted , setSubmitted] = useState(false)
  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">
        Apply for a Job
      </h1>
      
      <form onSubmit={handleSubmit}> {
        submitted && ( <div className = "alert alert-success mb-4">Your application was submitted successfully !</div> )
        }
        <div className="mb-3">
          <label className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
<div className="mb-3">

  <label className="form-label">
    Age
  </label>

  <select
    className="form-select"
    name="age"
    value={formData.age}
    onChange={handleChange}
  >

    <option value="">Select Age</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>

  </select>

</div>

<div className="mb-3">

  <label className="form-label d-block">
    Gender
  </label>

  <input
    type="radio"
    name="gender"
    value="Male"
    onChange={handleChange}
  /> Male

  <input
    type="radio"
    name="gender"
    value="Female"
    className="ms-3"
    onChange={handleChange}
  /> Female

</div>

<div className="mb-3">

  <label className="form-label">
    City
  </label>

  <select
    className="form-select"
    name="city"
    value={formData.city}
    onChange={handleChange}
  >

    <option value="">Select City</option>
    <option value="Beirut">Beirut</option>
    <option value="Tripoli">Tripoli</option>
    <option value="Saida">Saida</option>

  </select>

</div>

<div className="mb-3">

  <label className="form-label">
    About Yourself
  </label>

  <textarea
    className="form-control"
    rows="4"
    name="about"
    value={formData.about}
    onChange={handleChange}
  ></textarea>

</div>

        <button className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
export default Apply