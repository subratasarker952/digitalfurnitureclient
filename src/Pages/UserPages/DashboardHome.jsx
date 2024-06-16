import { useEffect, useState } from "react";

const DashboardHome = () => {
  const [states, setStates] = useState({});
  useEffect(() => {
    fetch(`https://digitalfurnitureserver.vercel.app/states`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `barer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => setStates(json));
  }, [states]);

  return (
    
    <div className="">
      <div className="my-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          <div className="h-[200px] rounded-lg p-5 shadow-lg bg-white"><p className="text-3xl text-center"> Total BLog:- {states.blogs}</p></div>
          <div className="h-[200px] rounded-lg p-5 shadow-lg bg-white"><p className="text-3xl text-center"> Total User:- {states.users}</p></div>
          <div className="h-[200px] rounded-lg p-5 shadow-lg bg-white"><p className="text-3xl text-center"> Total Product:- {states.products}</p></div>
          <div className="h-[200px] rounded-lg p-5 shadow-lg bg-white"><p className="text-3xl text-center"> Total Review:- {states.reviews}</p></div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default DashboardHome;
