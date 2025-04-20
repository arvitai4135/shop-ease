import React from 'react'
import { Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">🛍️ About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to SHOP - EASE — your go-to destination for a seamless and smart online shopping experience.

          Built with the latest web technologies like React.js and Node.js, our platform is designed to be fast, user-friendly, and secure. From effortless browsing to smooth checkouts, SHOP - EASE brings you a hassle-free way to shop for what you love.
        </p>
        <p>
        We offer:
        <ul>
          
        <li>🔐 Secure user login and checkout - Your privacy and data security are our top priority. SHOP - EASE uses industry-standard security protocols to protect your information during every transaction.</li>

        <li>🛒 Easy-to-manage shopping cart - Add, remove, and edit your items in real time with a shopping cart that's as flexible as you are.</li>

        <li>🔎 Smart product search and filters - Find exactly what you're looking for with advanced filtering and real-time search capabilities that make navigation a breeze.</li>

        <li>🚚 Real-time order tracking - Stay updated on your purchases with clear, real-time tracking from order placement to delivery.</li>

        <li>📦 Responsive, intuitive design - Whether you're browsing from a phone, tablet, or desktop, our interface adjusts seamlessly for a smooth experience on any device.</li>
          </ul>

          Join us and experience the future of e-commerce — fast, flexible, and built with care.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage