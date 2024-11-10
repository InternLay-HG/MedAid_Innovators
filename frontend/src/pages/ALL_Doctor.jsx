import Footer from "./HomeComponents/Footer";
import Header from "./HomeComponents/Header";
import AllDoctorBody from "./AllDoctorComponents/AllDoctorBody";
import AllDoctors from "./AllDoctorComponents/allDoctor";

const All_Doctor = () => {
    return (
      <> 
          <Header></Header>
          {/* <AllDoctorBody></AllDoctorBody> */}
          <AllDoctors></AllDoctors>
          <Footer></Footer>
      </>
    );
};

export default All_Doctor;