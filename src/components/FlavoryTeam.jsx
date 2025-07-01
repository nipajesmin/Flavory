import React from 'react';

const employees = [
  {
    name: "John",
    role: "Chef",
    image: "/src/assets/chef.jpg"
  },
  {
    name: "Rahim",
    role: "waiter",
    image: "/src/assets/waiter1.jpg"
  },
  {
    name: "Kabir",
    role: "waiter",
    image: "/src/assets/waiter2.jpg"
  },
  {
    name: "Sakib",
    role: "Senior Waiter",
    image: "/src/assets/waiter3.jpg"
  }
];

const FlavoryTeam = () => {
  return (
    <section className="py-6">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-black">Meet the Flavory Team</h3>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Passionate people building tasty experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-11/12 mx-auto">
        {employees.map((emp, idx) => (
          <div key={idx} className="text-center">
            <img
              src={emp.image}
              alt={emp.name}
              className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-amber-700 mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">{emp.name}</h4>
            <p className="text-amber-700 font-medium">{emp.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlavoryTeam;

