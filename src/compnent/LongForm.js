import React, { useReducer } from "react";

const LongForm = () => {
  const initialstate = {
    Firstname: "",
    Lastname: "",
    Email: "",
    term:""
  };
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "TOGGLE":
        return {
          ...state,
        term:!state.term
        };
      default:
        return state;
    }
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(state)
  };
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <form action="" onSubmit={submit}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
              <div>
                <form action=""></form>
                <div className="flex gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First name</span>
                    </label>
                    <input
                      onBlur={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                      type="text"
                      name="Firstname"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last name</span>
                    </label>
                    <input
                      onBlur={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                      type="text"
                      name="Lastname"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label"></label>
                  </div>
                </div>
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      onBlur={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                      type="text"
                      name="Email"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label"></label>
                  </div>
                  <div>
                    <label htmlFor="redio-3">male</label>
                    <input
                      onBlur={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                      type="radio"
                      name="radio-3"
                      className="radio radio-secondary gap-5 justify-center"
                    />
                    <input
                      type="radio"
                      name="radio-3"
                      className="radio radio-secondary"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    type="text"
                    name=""
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label"></label>
                </div>
                <select
                  name=""
                  className="select select-secondary w-full max-w-xs"
                >
                  <option disabled selected>
                    Pick your favorite language
                  </option>
                  <option>Java</option>
                  <option>Go</option>
                  <option>C</option>
                  <option>C#</option>
                  <option>C++</option>
                  <option>Rust</option>
                  <option>JavaScript</option>
                  <option>Python</option>
                </select>
   <input type="checkbox" name="term" onChange={(e)=>dispatch({type:"TOGGLE"})} className="toggle toggle-success"  />
                <div className="form-control mt-6">
             
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LongForm;
