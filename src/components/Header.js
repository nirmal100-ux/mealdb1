import { useFormik } from "formik";
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import {
  Button,
  Input,
} from "@material-tailwind/react";
const Header = () => {
  const nav = useNavigate();

  const formik = useFormik({
    initialValues: {
      query: ''
    },
    onSubmit: (val, { resetForm }) => {
      //  nav(`/searchmeal/${val.query}`);
      resetForm();
    }
  });

  const [show, setShow] = useState(false);

  return (
    <header className="bg-black  text-white flex justify-between px-7 py-2 items-baseline pt-5">
      <div>
        <NavLink to='/' replace> <img src="https://themealdb.com/images/logo-small.png" alt="" />
        </NavLink>
      </div>

      {show && <nav className=" msm:flex hidden flex-col space-y-2 ">
        <NavLink className="font-bold" to='/'>Home</NavLink>
        <NavLink className="font-bold" to='/about'>About</NavLink>
        <NavLink className="font-bold" to='/contact'>Contact</NavLink>
      </nav>
      }
      <button onClick={() => setShow(!show)}>
        {show ? <i className="fa-solid fa-xmark hidden msm:flex"></i> : <i className="fa-solid fa-bars hidden msm:flex"></i>}
      </button>
      <nav className="msm:hidden space-x-5 flex items-center  ">
        <NavLink className="font-bold" to='/'>Home</NavLink>
        <NavLink className="font-bold" to='/about'>About</NavLink>
        <NavLink className="font-bold" to='/contact'>Contact</NavLink>

        <form onSubmit={formik.handleSubmit}>

          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              name='query'
              onChange={formik.handleChange}
              value={formik.values.query}
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              type="submit"
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
        </form>
      </nav>
    </header>

  )
}
export default Header


