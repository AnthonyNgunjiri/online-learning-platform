import React from 'react'
import "./footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <div>
     
    <footer>
        <div className="footer">
        
            <div>
                <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                <ul>
                    <li className="mb-2"><a href="#" className="text-gray-700 hover:text-blue-500">About Us</a></li>
                    <li className="mb-2"><a href="#" className="text-gray-700 hover:text-blue-500">Contact Us</a></li>
                    <li className="mb-2"><a href="#" className="text-gray-700 hover:text-blue-500">Privacy Policy</a></li>
                    <li className="mb-2"><a href="#" className="text-gray-700 hover:text-blue-500">Terms of Service</a></li>
                </ul>
            </div>
            
            <div>
                <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                <div className="icon">
                <p className="ice">
                  <FaFacebook />
                </p>
                
              </div>
              <div className="icon">
                <p className="ice">
                  <FaSquareXTwitter />
                </p>
              </div>
              <div className="icon">
                <p className="ice">
                  <FaLinkedinIn />
                </p>
              </div>
              <div className="icon">
                <p className="ice">
                  <FaSquareInstagram />
                </p>
              </div>
                <div className="flex space-x-4">
                  
                </div>
            </div>
           
            <div>
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-2">123 Main Street, Anytown, KICC</p>
                <p className="text-gray-700 mb-2">(123) 456-7890</p>
                <p className="text-gray-700">support@example.com</p>
            </div>
            
            <div>
                <h2 className="text-xl font-bold mb-4">Newsletter Signup</h2>
                <form>
                    <input type="email" className="w-full p-2 border border-gray-300 rounded-md mb-2" placeholder="Enter your email" />
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">Subscribe</button>
                </form>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer;
