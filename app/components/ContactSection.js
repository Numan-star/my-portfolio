import ContactForm from './ContactForm';
import { FaQuestionCircle, FaRegCommentDots, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
    return (
        <section className="bg-gray-900 py-16 border-t border-t-teal-500/20">
            <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-100">Contact Us</h2>
            <p className='text-gray-100 text-xl max-w-xl mx-auto mb-10'>We'd love to talk about how we can help you.</p>
            </div>

            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-2 py-0">
                {/* Left Side: Info Cards */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-6 mb-8 lg:mb-0">
                    {/* Info Card 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                        <div className="flex items-center mb-4">
                            <FaQuestionCircle className="text-teal-500 text-3xl mr-4" />
                            <h3 className="text-white font-bold text-lg">Knowledgebase</h3>
                        </div>
                        <p className="text-gray-400">We're here to help with any questions or code.</p>
                        <a href="#" className="text-teal-500 mt-4 inline-block">Contact support →</a>
                    </div>

                    {/* Info Card 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                        <div className="flex items-center mb-4">
                            <FaRegCommentDots className="text-teal-500 text-3xl mr-4" />
                            <h3 className="text-white font-bold text-lg">FAQ</h3>
                        </div>
                        <p className="text-gray-400">Search our FAQ for answers to anything you might ask.</p>
                        <a href="#" className="text-teal-500 mt-4 inline-block">Visit FAQ →</a>
                    </div>

                    {/* Info Card 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-teal-500 text-3xl mr-4" />
                            <h3 className="text-white font-bold text-lg">Contact us by Email</h3>
                        </div>
                        <p className="text-gray-400">If you wish to write us an email instead please use</p>
                        <a href="mailto:contact@developermithu.com" className="text-teal-500 mt-4 inline-block">contact@developermithu.com</a>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="w-full lg:w-1/2 mt-0">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
