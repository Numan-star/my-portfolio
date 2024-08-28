"use client"; // This line makes this component a Client Component

// app/components/Services.js
import ServiceCard from './ServiceCard';

import { FaCode } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuFileSearch } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";



export default function Services() {
    // Array of services to be displayed
    const services = [
        {
            icon: FaCode,
            title: 'Web Development',
            description: "Customized web solutions tailored to your needs, whether it's building dynamic websites, web applications, or e-commerce platforms. From frontend design to backend development, I've got you covered.",
        },
        {
            icon: HiOutlineDesktopComputer,
            title: 'Responsive Design',
            description: "Building websites and applications that adapt seamlessly to different screen sizes and devices. With a focus on responsive design principles, your content will look great and perform optimally across desktops, tablets, and smartphones.",
        },
        {
            icon: HiOutlineShoppingBag,
            title: 'E-commerce Solutions',
            description: "Launch and grow your online store with powerful e-commerce solutions. From product listings and payment gateways to order management and customer support integrations, I'll help you build a robust and scalable e-commerce platform.",
        },
        {
            icon: LuFileSearch,
            title: 'Content Management Systems',
            description: "Streamline content creation, publishing, and management with a user-friendly CMS tailored to your needs. Whether you're blogging, updating product listings, or managing a news site, I'll implement the right CMS solution for efficient content management.",
        },
        {
            icon: IoSettingsOutline,
            title: 'Custom Web Applications',
            description: "We develop custom web applications that meet your specific business needs, From concept to deployment, we create tailored solutions that address your specific needs, whether it's a CRM system, e-commerce platform, or workflow automation tool.",
        },
        {
            icon: VscTools,
            title: 'Website Maintenance and Support',
            description: "Ensure your website remains secure, up-to-date, and running smoothly with ongoing maintenance and support services. From regular backups and security updates to troubleshooting and technical assistance, I'll provide reliable support to keep your website performing at its best.",
        },
    ];

    return (
        <section className="bg-gray-900 py-16 border-t border-t-teal-500/20">
            {/* py-10 text-white bg-gray-900 border-t sm:py-14 lg:py-20 border-t-teal-500/20 */}
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-center mb-10 text-gray-100">
                    Our <span className="bg-gradient-to-r from-teal-500 via-gray-300 to-pink-600 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className='text-gray-100 text-xl max-w-xl mx-auto mb-10'>Explore our range of digital services, including web development, design, API integration, and maintenance, to ensure online success. Let us help you create something remarkable.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
