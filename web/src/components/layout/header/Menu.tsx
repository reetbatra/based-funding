import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

function Menu() {
  return (
    <>
      <div className="container fixed z-10 bg-white p-4 pb-3 pt-8">
        <Navbar />
      </div>
    </>
  );
}

export default Menu;
