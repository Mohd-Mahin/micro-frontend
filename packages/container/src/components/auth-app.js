import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

export default (props) => {
    const { onSignIn } = props;
    const ref = useRef(null);
    const history = useHistory();


    useEffect(() => {
        const { onParentNavigate } = mount(ref.current,
            {
                onNavigate: ({ pathname: nextPathname }) => { // for child navigation to be detected in parent(Browser route) => onNavigate
                    const pathname = history.location;

                    if (pathname !== nextPathname) {
                        history.push(nextPathname);
                    }
                },
                initialPath: history.location.pathname,
                onSignIn
            });

        // for parent navigation to be detected in child(Hash route) => onParentNavigate => registering in child container
        history.listen(onParentNavigate);

    }, []);

    return <div ref={ref} />
}