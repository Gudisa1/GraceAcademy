import React from 'react';

const LocationSection = () => {
  return (
    <section className="bg-gray-100 mt-5">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Visit Our Location
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We welcome you to visit us at Grace Academy and experience our
            commitment to excellence in education.
          </p>
        </div>

        {/* Map and Details */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden">
              {/* <iframe
                src="https://maps.app.goo.gl/Zcog3KmjQaH9Gn3z6"
                width="100%"
                height="480"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                title="Grace Academy Location"
              ></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.79356216355!2d38.77904907558648!3d8.991134691068684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85006a295aaf%3A0x644ae54b636802a4!2zQm9sZSBKYXBhbiB8IOGLqOGLiOGMo-GJtuGJvSDhjZPhiK3hiq0gfCB8IFlvdXRoIFBhcmsgfCBQQUFSS0lJIERBUkdBR0dPT1RB!5e0!3m2!1sen!2sus!4v1737360708836!5m2!1sen!2sus"
                width="100%"
                height="480"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                title="Grace Academy Location"
              ></iframe>
            </div>

            {/* Details Section */}
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Our Address
                  </h3>
                  <p className="mt-1 text-gray-600">Addis Ababa, Bole Japan</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">
                    Monday - Friday: 9am - 5pm
                  </p>
                  <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                  <p className="mt-1 text-gray-600">Sunday: Closed</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-600">
                    Email: graceacademyet@gmail.com
                  </p>
                  <p className="mt-1 text-gray-600">Phone: +251 968331095</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
