import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const DashboardHome = () => {
  const { user, passwordReset } = useAuth();
  const [disabled, setDisabled] = useState(false);
  const [userInDb, setUserInDb] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/users/${user?.email}`)
      .then((response) => response.json())
      .then((json) => setUserInDb(json));
  }, [user]);
  const handlePasswordReset = () => {
    const sure = window.confirm("Are You Sure? Change Your Password?");
    if (sure) {
      passwordReset(user?.email)
        .then(() => {
          setDisabled(true);
          toast.success("Password rest mail sent please Email");
        })
        .catch((error) => {
          toast.error(error.code + error.message);
        });
    }
  };
  return (
    <div className="flex justify-between">
      <div className="text-2xl font-semibold capitalize">
        {userInDb?.img && (
          <img className="h-[200px] w-[200px]" src={userInDb?.img} alt="" />
        )}

        <p>Email:- {userInDb?.email}</p>
        {userInDb?.displayName && <p>displayName:- {userInDb?.displayName}</p>}
        {userInDb?.age && <p>age:- {userInDb?.age} Years</p>}
        {userInDb?.role && <p>Role:- {userInDb?.role}</p>}
        {userInDb?.description && (
          <p>
            description:- <br /> {userInDb?.description}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Link
          to={`/dashboard/editProfile/${userInDb?._id}`}
          className="btn btn-primary"
        >
          Edit Profile
        </Link>
        <button
          disabled={disabled}
          onClick={handlePasswordReset}
          className="btn btn-primary"
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default DashboardHome;
