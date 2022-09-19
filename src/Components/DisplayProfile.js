import React from 'react'

function DisplayProfile({ data }) {

    return (
        <div className='container'>

            <div className="card p-3">
                <div className="d-flex align-items-center">
                    <div className="image"> 
                    <img src={data.avatar_url}className="rounded" width="155" alt=''/> 
                    </div>
                    <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0">{data.login}</h4><span>{data.bio}</span>
                        <div className="p-2 mt-2 bg-danger d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column"> <span className="rating">Name</span> <span className="number1">{data.name}</span> </div>
                            <div className="d-flex flex-column"> <span className="articles">Repo</span> <span className="number2">{data.public_repos}</span> </div>
                            <div className="d-flex flex-column"> <span className="rating">Gists</span> <span className="number3">{data.public_gists}</span> </div>
                            <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number4">{data.followers}</span> </div>
                            <div className="d-flex flex-column"> <span className="rating">following</span> <span className="number5">{data.following}</span> </div>
                            <div className="d-flex flex-column"> <span className="rating">Created at</span> <span className="number6" >{data.created_at}</span> </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DisplayProfile
