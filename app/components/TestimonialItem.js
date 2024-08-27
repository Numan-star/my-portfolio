// app/components/TestimonialItem.js
export default function TestimonialItem({ name, role, testimonial }) {
    return (
      <div className="inline-block bg-gray-900 border border-teal-500/20 rounded-lg shadow-sm p-6 text-left mx-4 transition-transform duration-300 hover:border-teal-500 hover:shadow-lg hover:shadow-teal-500/50">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-100">{name}</h3>
          <p className="text-sm text-teal-400">{role}</p>
        </div>
        <p className="text-gray-100">{testimonial}</p>
      </div>
    );
  }
  