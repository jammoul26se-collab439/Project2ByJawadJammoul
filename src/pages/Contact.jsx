function Contact() {
  return (
    <div className="container my-5 text-center">
      <h1 className="mb-4">
        Contact Us
      </h1>
      <p>
        Follow Aska Company on social media:
      </p>
      <div className="mt-4">
        <a
          href="https://www.instagram.com"
          target="_blank"
          className="btn btn-outline-danger me-3"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="btn btn-outline-primary me-3"
        >
          Facebook
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          className="btn btn-outline-info"
        >
          Twitter
        </a>
      </div>
    </div>
  )
}
export default Contact