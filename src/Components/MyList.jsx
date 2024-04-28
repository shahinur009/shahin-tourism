import { useEffect, useState } from "react";
import useAuth from "../Provider/useAuth";
import SpotCard from "./SpotCard";


const MyListsx = () => {
    const { user } = useAuth() || {};
    let [myList, setMyList] = useState([]);
    useEffect(() => {
        console.log(user)
        fetch(`http://localhost:5000/mylist/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyList(data)
            })
    }, [user]);
    return (
        <>
            <div>
                <h1 className="md:text-5xl text-2xl font-bold text-center"> My List</h1>
                <div className="grid md:grid-cols-3 my-5 px-5 gap-5">
                    {
                        myList?.map(spot => <SpotCard
                            key={spot._id}
                            spot={spot}>
                        </SpotCard>)
                    }
                </div>
            </div>
        </>
    )
};

export default MyListsx;