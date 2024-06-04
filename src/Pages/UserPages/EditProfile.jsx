import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const EditProfile = () => {
  const { user } = useAuth();
  const loadedUser = useLoaderData();
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value;
    const age = parseInt(form.age.value);
    const description = form.description.value;
    const img = form.img.value;
    if (!displayName || !age || !description || !img) {
      toast.error("Please Provide Product Information");
      return;
    }
    const userObj = {
      displayName,
      age,
      description,
      img,
    };
    const sure = window.confirm("Are you sure Update Product information?");
    if (sure) {
      fetch(`https://digitalfurnitureserver.vercel.app/users/${loadedUser?._id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(userObj),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("User Updated");
            navigate("/dashboard");
          }
        });
    }
  };
  return (
    <div>
      <div className="my-10">
        <div className="card shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleForm}>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={loadedUser?.email}
                className="input input-bordered"
                required
                readOnly
              />
            </div>

            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">DisplayName</span>
              </label>
              <input
                type="text"
                name="displayName"
                defaultValue={
                  loadedUser?.displayName || user?.displayName || ""
                }
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>

            {/* age */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your age (years)</span>
              </label>
              <input
                type="text"
                name="age"
                defaultValue={loadedUser?.age}
                placeholder="Your age"
                className="input input-bordered"
              />
            </div>
            {/* description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">About Yourself</span>
              </label>
              <textarea
                type="text"
                name="description"
                defaultValue={loadedUser?.description}
                placeholder="About Yourself"
                className="input h-20 input-bordered"
              />
            </div>
            {/* img */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Image</span>
              </label>
              <input
                type="text"
                name="img"
                defaultValue={loadedUser?.img}
                placeholder="Product Image Url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
