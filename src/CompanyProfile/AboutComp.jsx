import React from "react";
import { companyData } from "../../public/Data/Company";

const AboutComp = () => {
  const company = companyData;

  return (
    <div className="flex flex-col gap-5">
      {Object.keys(company).map(
        (key) =>
          key !== "Name" && (
            <div key={key}>
              <div className="text-xl mb-3 font-semibold">{key}</div>

              {key !== "website" && (
                <div className="text-sm text-mine-shaft-300 text-justify space-y-1">
                  {key !== "Specialties"
                    ? company[key]
                    : company[key].map((item, index) => (
                        <div key={index}>&bull; {item}</div>
                      ))}
                </div>
              )}

              {key === "website" && (
                <a
                  href={company[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 underline hover:text-blue-800 relative z-10 inline-block"
                >
                  {company[key]}
                </a>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default AboutComp;
