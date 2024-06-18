import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState("");
  const location = useLocation();
  const from = location?.state || "/";
  const { user, createUser, error, setError } = useAuth();
  if (user) {
    return <Navigate to={from}></Navigate>;
  }

  const handleImgUpload = async (e) => {
    const imgFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imgFile);
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=2b8e612910de513b98a70f8ee1891574`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();
    setImg(result.data.url);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (password === confirmPassword) {
      createUser(email, password)
        .then((res) => {
          const userInfo = {
            displayName,
            photoURL: img,
          };
          updateProfile( res.user,userInfo)
            .then(() => {
              // Profile updated!
              navigate(from, { replace: true });
            })
            .catch((error) => {
              // An error occurred
              console.log(error);
            });
        })
        .catch((err) => {
          setError(err.code);
        });
    }
  };
  return (
    <div className="hero h-[700px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Image</span>
              </label>
              <input
                type="file"
                onChange={handleImgUpload}
                className="input"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="displayName"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label flex">
                <span className="label-text">Already Register?</span>
                <Link to="/login">Please Login</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
