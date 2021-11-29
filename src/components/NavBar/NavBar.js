import React from 'react';
import userImage from '../../images/user.png';

const NavBar = () => {
    return (
        <nav className="bg-white h-16 flex justify-between items-center px-8 py-3 border-b border-gray-300">
            {/* Left part */}
            <div className="flex items-center">
                {/* Navbar Brand */}
                <div className="text-gray-900 font-medium flex items-center">
                    <a href="#">
                        {/* Brand Name */}
                        <span className="pr-2">Starbucks</span>
                    </a>

                    <a href="#">
                        {/* Dropdown icon */}
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.59456 5.4382C3.79413 5.71473 4.20587 5.71473 4.40544 5.4382L7.75812 0.792603C7.99677 0.461921 7.76048 0 7.35267 0H0.647327C0.239523 0 0.00323534 0.461921 0.241885 0.792603L3.59456 5.4382Z" fill="#3E3F48" />
                        </svg>
                    </a>
                </div>

                {/* Search */}
                <div className="ml-32 hidden md:flex items-center ">
                    {/* Search icon */}
                    <svg width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200 relative left-8"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                    {/* Text input */}
                    <input className="bg-gray-200 rounded-lg h-10 w-72 lg:w-96 pl-10 text-gray-900" type="text" name="" id="" placeholder="Search" />
                </div>
            </div>


            {/* Right part */}
            <div className="flex items-center space-x-4">
                <a href="#">
                    {/* Notification icon */}
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4289 13.0781C16.3352 12.043 15.5 10.9539 15.5 7.26172C15.5 4.15117 13.0242 1.61719 9.87501 1.30859V0.625C9.87423 0.27832 9.59689 0 9.24923 0C8.90157 0 8.62423 0.27832 8.62423 0.625V1.30859C5.4758 1.61641 2.96408 4.15234 2.96408 7.26172C2.96408 10.9531 2.12893 12.043 1.03518 13.0781C0.488308 13.6008 0.317214 14.3867 0.595729 15.0801C0.914088 15.793 1.59768 16.25 2.37385 16.25H16.1238C16.9004 16.25 17.584 15.791 17.8672 15.1133C18.1477 14.3867 17.9758 13.5977 17.4289 13.0781ZM16.1242 15H2.37385C1.81721 15 1.5387 14.3555 1.92932 14.0195C3.29182 12.7207 4.24885 11.2703 4.24885 7.29688C4.21408 4.62891 6.48361 2.5 9.24923 2.5C12.0149 2.5 14.2492 4.62891 14.2492 7.26172C14.2492 11.2227 15.1965 12.6836 16.5687 13.9844C16.9602 14.3594 16.675 15 16.1242 15ZM11.1281 17.5C10.8376 17.5 10.5672 17.662 10.468 17.925C10.2883 18.4063 9.80782 18.75 9.21407 18.75C8.62033 18.75 8.17462 18.4053 7.99337 17.925C7.92892 17.6602 7.65939 17.5 7.36642 17.5C6.95197 17.5 6.64884 17.8905 6.77736 18.2703C7.11642 19.2734 8.09689 20 9.21407 20C10.3652 20 11.3453 19.2723 11.6836 18.2703C11.8469 17.8555 11.5461 17.5 11.1281 17.5Z" fill="#3E3F48" />
                    </svg>
                </a>

                <a href="#">
                    {/* User Image */}
                    <img src={userImage} alt="" />
                </a>

                <a href="#">
                    {/* Name */}
                    <span className="font-medium text-gray-900">John Doe</span>
                </a>

                <a href="#">{/* Dropdown icon */}
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.59456 5.4382C3.79413 5.71473 4.20587 5.71473 4.40544 5.4382L7.75812 0.792603C7.99677 0.461921 7.76048 0 7.35267 0H0.647327C0.239523 0 0.00323534 0.461921 0.241885 0.792603L3.59456 5.4382Z" fill="#3E3F48" />
                    </svg>
                </a>

            </div>
        </nav>
    );
};

export default NavBar;