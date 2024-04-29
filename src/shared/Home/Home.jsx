import Address from "../../Components/Address";
import Banner from "../../Components/Banner";

const Home = () => {
    return (
        <div className="w-full md:my-10 md:px-10 font-roboto">
            <Banner></Banner>
            <Address></Address>
        </div>
    );
};

export default Home;