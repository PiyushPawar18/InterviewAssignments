import React from 'react';
// import { Linkedin } from 'lucide-react';

const OfficeCard = ({ city, address, phone }) => (
  <div className="space-y-1">
    <h3 className="text-2xl font-semibold text-gray-900 mb-7">{city}</h3>
    <div className="text-sm text-gray-600 space-y-0.5">
      {address.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
    {phone.map((number, index) => (
      <p key={index} className="text-sm text-gray-600">{number}</p>
    ))}
  </div>
);

export default function FooterSection() {
  const indiaOffices = [
    {
      city: "Mumbai",
      address: [
        "902, 'A' Wing, Times Square,",
        "Andheri-Kurla Road, Marol,",
        "Andheri (East), Mumbai 400 059"
      ],
      phone: ["+91 22-6222-6222"]
    },
    {
      city: "Ahmedabad",
      address: [
        "D21 The Address, True Value",
        "West Gate, SG highway,",
        "Ahmedabad 380 009"
      ],
      phone: ["+91 7940227900"]
    },
    {
      city: "Bengaluru",
      address: [
        "205, 2nd floor,",
        "Connection point H.A.L Airport",
        "Exit Road, Bangalore 560 017"
      ],
      phone: ["+91 80-4112-5590"]
    },
    {
      city: "Chennai",
      address: [
        "Flat no.A1, 1st floor,",
        "No 24 Vembuli Amman koil Street,",
        "Palavanthangal Chennai- 600 114"
      ],
      phone: ["+91-44-22241462/ 1464"]
    },
    {
      city: "Delhi",
      address: [
        "Penta Freight Pvt. Ltd. Khasra No.",
        "10/1/10/2, 11/5/1, No. 4, Samalkha,",
        "Old Delhi – Gurgaon Road, Opposite",
        "Primary School, New Delhi – 110 037"
      ],
      phone: ["+91 11-4078-2222"]
    },
    {
      city: "Hyderabad",
      address: [
        "G-27 & 28, Cargo Satellite Building,",
        "Rajiv Gandhi International Airport,",
        "Shamshabad 501 218, Telangana, India"
      ],
      phone: ["+91 40-2400-4048"]
    },
    {
      city: "Kolkata",
      address: [
        "131, Jangalpur Road, near airport,",
        "Gate No. 3, Motilal Colony, P.O Rajbari,",
        "Kolkata 700 081, West Bengal"
      ],
      phone: ["+91 33-2514-7089"]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[75rem] mx-auto">
        {/* India Offices Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Our <span className="text-orange-500">India</span> Offices
              </h2>
              <p className="text-sm text-black leading-relaxed">
                Penta Freight delivers seamless logistics across India, with branches in key cities for your convenience.
              </p>
            </div>
            
            {/* First row of offices */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {indiaOffices.slice(0, 3).map((office, index) => (
                <OfficeCard key={index} {...office} />
              ))}
            </div>
          </div>

          {/* Second row of offices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {indiaOffices.slice(3).map((office, index) => (
              <OfficeCard key={index + 3} {...office} />
            ))}
          </div>
        </div>

        {/* USA Office Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Our <span className="text-orange-500">USA</span> Office
              </h2>
              <p className="text-sm text-black leading-relaxed">
                Penta Freight has expanded its operations globally, beginning with the USA, to offer continuous support across continents.
              </p>
            </div>
            
            <div className="md:col-span-3">
              <div className="max-w-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-7">Chicago</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Penta Freight Pvt.Ltd 5100 Newport Dr.</p>
                  <p>Sute 4, Rolling Meadows, IL 60008 USA</p>
                  <p className="mt-2">+040 234 6559 / +224 434 2154</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              © 2026 Penta Freight. All Rights Reserved Developed by Nipralo
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}