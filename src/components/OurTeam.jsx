import React from "react";

const team = [
  "/images/team-1.webp",
  "/images/team-2.webp",
  "/images/team-3.webp",
];

function OurTeam() {
  return (
    <div className="bg-[#0a0908] text-white text-center px-10 py-20">
      <h1 className="text-4xl">Meet Our Team</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {team.map((item, i) => (
          <div key={i} className="m-10">
            <img src={item} className="w-[450px]  " />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
