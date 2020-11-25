import React, { useState } from "react";
import Loader from 'react-loader-spinner';


const useFullPageLoader = () => {
    const [loading, setLoading] = useState(false);

    return [
        loading ? <Loader type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        /> : null,
        () => setLoading(true), //Show loader
        () => setLoading(false) //Hide Loader
    ];
};

export default useFullPageLoader;