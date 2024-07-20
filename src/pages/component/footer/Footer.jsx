import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div>
     
    <footer>
        <div className="footer">
           
            <div>
                <h2 class="text-xl font-bold mb-4">Quick Links</h2>
                <ul>
                    <li class="mb-2"><a href="#" class="text-gray-700 hover:text-blue-500">About Us</a></li>
                    <li class="mb-2"><a href="#" class="text-gray-700 hover:text-blue-500">Contact Us</a></li>
                    <li class="mb-2"><a href="#" class="text-gray-700 hover:text-blue-500">Privacy Policy</a></li>
                    <li class="mb-2"><a href="#" class="text-gray-700 hover:text-blue-500">Terms of Service</a></li>
                </ul>
            </div>
            
            <div>
                <h2 class="text-xl font-bold mb-4">Follow Us</h2>
                <div class="flex space-x-4">
                    <a href="#" class="text-gray-700 hover:text-blue-500"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="#" class="text-gray-700 hover:text-blue-500"><i class="fab fa-twitter fa-2x"></i></a>
                    <a href="#" class="text-gray-700 hover:text-blue-500"><i class="fab fa-instagram fa-2x"></i></a>
                    <a href="#" class="text-gray-700 hover:text-blue-500"><i class="fab fa-linkedin fa-2x"></i></a>
                </div>
            </div>
           
            <div>
                <h2 class="text-xl font-bold mb-4">Contact Information</h2>
                <p class="text-gray-700 mb-2">123 Main Street, Anytown, USA</p>
                <p class="text-gray-700 mb-2">(123) 456-7890</p>
                <p class="text-gray-700">support@example.com</p>
            </div>
            
            <div>
                <h2 class="text-xl font-bold mb-4">Newsletter Signup</h2>
                <form>
                    <input type="email" class="w-full p-2 border border-gray-300 rounded-md mb-2" placeholder="Enter your email" />
                    <button type="submit" class="w-full p-2 bg-blue-500 text-white rounded-md">Subscribe</button>
                </form>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer;
