import { useLoaderData } from "react-router-dom";
import SpotCard from "../../Components/SpotCard";

const TouristSpot = () => {
    const addSpot = useLoaderData()
    return (
        <>
            <div>
                <h1 className="md:text-5xl text-2xl font-bold text-center"> Southeast Asia</h1>
                <div className="grid md:grid-cols-3 my-5 px-5 gap-5">
                {
                    addSpot.map(spot => <SpotCard
                        key={addSpot._id}
                        spot={spot}>
                    </SpotCard>)
                }
                </div>
            </div>
        </>
    );
};

export default TouristSpot;