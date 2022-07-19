import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconSearch from '../../assets/image/ic_Search.png';
import logo from '../../assets/image/Logo_ML.png';
import styles from './Search.module.scss';

/**
 * Component builds the box search
 * 
 * @returns Render view box product search  
 */
const Search = () => {

    const [textValue, setTextValue] = useState('');
    let navigate = useNavigate();

    const handlerKeyPress = (event) => {
        if (event.key === 'Enter') handlerSubmit(event);
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        if (textValue) navigate(`/items/?search=${textValue}`);
    }

    return (
        <div className={styles.header_navbar}>
            <div className={styles.header_search}>

                <div>
                    <a href="/">
                        <img className={styles.logo} src={logo} alt="Mercado Libre" />
                    </a>
                </div>

                <div>
                    <input
                        type="text"
                        className={styles.text}
                        placeholder="Nunca dejes de buscar"
                        value={textValue}
                        onChange={(event) => setTextValue(event.target.value)}
                        onKeyPress={(event) => handlerKeyPress(event)}
                    >
                    </input>
                </div>

                <div>
                    <button
                        className={styles.button_search}
                        onClick={handlerSubmit}
                    >
                        <img src={iconSearch} alt="Mercado Libre" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search;