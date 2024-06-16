import React, { useState, useEffect } from 'react';
import { getTypeIconSrc } from '../utils/pokemon-helper';

// import { results } from '../data/type.json';
import { apiFetch } from '../utils/api-fetch';

const TypesBar = ({ toggleType }) => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        const { results } = await apiFetch('/type');
        const tipos = results
        .filter(item => item.name !== 'unknown' &&
             item.name !== 'shadow')
        setTypes(tipos)
    }

    return (
        <nav className='types-bar'>
            {
                types.map(({ name }) => {
                    const typeImg = getTypeIconSrc(name);

                    return (
                        <a
                            key={name}
                            className={name}
                            onClick={() => toggleType(name)}
                        >
                            <img src={typeImg} alt={name} />
                        </a>
                    );
                })
            }
        </nav>
    );
};

export default TypesBar;