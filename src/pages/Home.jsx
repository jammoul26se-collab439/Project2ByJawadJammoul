const jobs = [
  {
    name: "Waiter",
    salary: "$450/month",
    hours: "10h/day"
  },

  {
    name: "Accountant",
    salary: "$600/month",
    hours: "8h/day"
  },

  {
    name: "Chef",
    salary: "$460/month",
    hours: "10h/day"
  },

  {
    name: "Teacher",
    salary: "$500/month",
    hours: "6h/day"
  }
]

function Home() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">
        Request to Apply for a Freelance Job
      </h1>
      <h3>Who We Are?</h3>
      <p>
        We, Aska Company, receive application forms from unemployed youth
        to give them a job that suits their experience in a profession
        or handicraft, close to their residence.
      </p>
      <h4 className="mt-4">
        Some Jobs Available Right Now:
      </h4>
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Job</th>
              <th>Salary</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            {
              jobs.map((job , index) => ( 
                <tr key={index}>
                  <td>{job.name}</td>
                  <td>{job.salary}</td>
                  <td>{job.hours}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home