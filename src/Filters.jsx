import React from 'react';
import { useEffect } from 'react';

const Filters = ({ popular, setFilter, active, setActive }) => {
    useEffect(() => {
        if (active === 0) {
            setFilter(popular);
        } else {
            const filter = popular.filter((movie) =>
                movie.genre_ids.includes(active),
            );
            setFilter(filter);
        }

    }, [active]);
    return (
        <div className="container-1">
            <button onClick={() => setActive(0)} className={active === 0 ? 'active' : ""}>All</button>
            <button onClick={() => setActive(35)} className={active === 35 ? 'active' : ""}>Comedy</button>
            <button onClick={() => setActive(878)} className={active === 878 ? 'active' : ""}>Science-Fiction</button>
            <button onClick={() => setActive(53)} className={active === 53 ? 'active' : ""}>Thriller</button>
            <button onClick={() => setActive(80)} className={active === 80 ? 'active' : ""}>Crime</button>
        </div>
    );
}

export default React.memo(Filters);