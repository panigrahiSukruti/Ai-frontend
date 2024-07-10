import React, { useEffect } from "react";
import { fetchFollowers } from "../../store/followers/followerActions";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Followers = () => {

    const { username } = useParams();
    const dispatch = useDispatch();
    const { data: followersData, loading: followersloading, error: followersError } = useSelector((state) => state.followers);
    const { login } = followersData;
    console.log("followersData.login", followersData);

    useEffect(() => {
        dispatch(fetchFollowers(username));
    }, [username])


    return (
        <div className='main-container'>
            <h2 className="follower-title">Followers</h2>

            {followersData.map((followersData, index) => (
                <div >
                    <Link to={`/${followersData.login}`} className='follower-container'>
                        <img src={followersData.avatar_url} alt='follower-avatar' className="circular-image-follower" />
                        <p className="card-description">{followersData.login}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Followers