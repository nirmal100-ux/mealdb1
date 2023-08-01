import { Route, Routes } from "react-router"
import RootLayOut from "./components/RootLayOut"
import HomePage from "./pages/HomePage"
import Details from "./pages/Details"
import About from "./components/About"
import Contact from "./components/Contact"
import Detail2 from "./pages/Detail2"
import Search from "./pages/Search"


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<HomePage />} />
          <Route path="meals/detail/:id" element={<Details />} />
          <Route path="meals/detail2/:ids" element={<Detail2 />} />
          <Route path="searchmeal/:search" element={<Search />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

        </Route>

      </Routes>

    </>
  )
}

export default App
