import React from "react";

const Member = ({ member }) => {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-blue-500 via-blue-300 to-yellow-500 p-1 shadow-xl">
      <div className="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
        <div className=" text-center">
          <img
            src={member.image}
            className=" w-56 h-56 rounded-full object-cover mb-5 mx-auto"
            alt=""
          />
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {member.name}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            adipisci.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Member;
