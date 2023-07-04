import React from 'react'

const Map = ({myUsers,kuchBhi, myName,setMyUsers}) => {
    console.log(myUsers, "HEREE")
    // console.log(typeof props)
    return (
        <div>
            {kuchBhi && kuchBhi.map((str) => (
                <div key={str}>
                    <h2>{str}</h2>
                </div>
            ))}

            <button onClick={() => setMyUsers([...myUsers, "Awdiz"])}>Add user</button>
            {myName && myName}

        </div>
    )
}

export default Map