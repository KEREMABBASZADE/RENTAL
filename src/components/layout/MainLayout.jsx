// import { useState } from "react";
// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import FilterSidebar from "../FilterSidebar";

// function MainLayout() {
//   const [showFilter, setShowFilter] = useState(false);
//   const [search, setSearch] = useState("");
//   const [filters, setFilters] = useState({
//     type: [],
//     seats: [],
//     maxPrice: 300,
//   });

//   const location = useLocation();
//   const navigate = useNavigate();
//   const isCarsPage = location.pathname === "/cars";

//   const handleFilterClick = () => {
//     if (!isCarsPage) {
//       navigate("/cars");
//     }
//     setShowFilter(true);
//   };

//   return (
//     <>
//       <Navbar
//         onFilterClick={handleFilterClick}
//         search={search}
//         onSearch={setSearch}
//       />

//       <div
//         className={`layout__body ${showFilter && isCarsPage ? "layout__body--shifted" : ""}`}
//       >
//         {showFilter && isCarsPage && (
//           <FilterSidebar
//             onClose={() => setShowFilter(false)}
//             filters={filters}
//             onChange={setFilters}
//           />
//         )}
//         <div className="layout__content">
//           <Outlet context={{ filters, search }} />
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default MainLayout;
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FilterSidebar from "../FilterSidebar";

function MainLayout() {
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    type: [],
    seats: [],
    maxPrice: 300,
  });

  const location = useLocation();
  const navigate = useNavigate();
  const isCarsPage = location.pathname === "/cars";

  const handleFilterClick = () => {
    if (!isCarsPage) {
      navigate("/cars");
    }
    setShowFilter(true);
  };

  const handleClose = () => setShowFilter(false);

  // isCarsPage deyilsə sidebar-ı bağla
  const isOpen = showFilter && isCarsPage;

  return (
    <>
      <Navbar
        onFilterClick={handleFilterClick}
        search={search}
        onSearch={setSearch}
      />

      {/* Mobile overlay */}
      {isOpen && <div className="sidebar__overlay" onClick={handleClose} />}

      <div className={`layout__body ${isOpen ? "layout__body--shifted" : ""}`}>
        {/*
          Desktop: şərtli render (köhnə məntiq)
          Mobile:  həmişə DOM-da, .open class ilə açılır (CSS transition işləsin)
        */}
        <FilterSidebar
          isOpen={isOpen}
          onClose={handleClose}
          filters={filters}
          onChange={setFilters}
        />

        <div className="layout__content">
          <Outlet context={{ filters, search }} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MainLayout;
