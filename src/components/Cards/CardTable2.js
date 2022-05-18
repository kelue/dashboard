import React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios';

// components

import TableDropdown from "../../components/Dropdowns/TableDropdown.js";

export default function CardTable({ color }) {
  const [clients, setclients] = useState("")

  useEffect(() => {
    axios.get('https://fakerapi.it/api/v1/companies?_quantity=1')
    .then(response => setclients(response.data.data))
  }, [])
  
  console.log(clients)
  
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-14 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
              <h3
                className={
                  "font-semibold text-lg" +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Clients
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center justify-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left" +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Full Name
                </th>
                <th
                  className={
                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Email
                </th>
                <th
                  className={
                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Phone Number
                </th>
                <th
                  className={
                    "px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Website
                </th>
                {/* <th
                  className={
                    "px-14 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Image
                </th> */}
                {/* <th
                  className={
                    "px-14 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th> */}
              </tr>
            </thead>
            <tbody>
                  {
                    clients ? clients.map((client, id) =>(
                      <tr key={id}>
                      <th className="border-t-0 px-14 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <img
                          src={client.image}
                          className="h-12 w-12 bg-white rounded-full border"
                          alt="..."
                        ></img>{"    "}
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                          }
                        >
                          {client.name}
                        </span>
                      </th>
                      <td className="border-t-0 px-14 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {client.email}
                      </td>
                      <td className="border-t-0 px-14 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <p
                          className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                          }
                        >
                          {client.phone}
                        </p>
                      </td>
                      <td className="border-t-0 px-14 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <p
                          className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                          }
                        >
                         {client.website}
                        </p>
                      </td>
                      {/* <td className="border-t-0 px-14 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      
                      </td> */}
                      {/* <td className="border-t-0 px-14 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <TableDropdown />
                      </td> */}
                    </tr>
                    )) : null
                  }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
