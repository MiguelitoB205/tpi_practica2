import { createContext, useEffect, useReducer, useState} from "react";

export const ContextGlobal = createContext(undefined);

const getFavsFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];

}
const saveFavsInStorage = (favs) => {
    localStorage.setItem("favs", JSON.stringify(favs));
}

const initialState = { isDark: false, favs: getFavsFromStorage()};

const reducer = (state, action) => {
    switch(action.type) {
        case "add_fav":
            const newState = { ...state, favs: [...state.favs, action.payload]};
            saveFavsInStorage(newState.favs);
            alert("Favorite added");
            return newState;

            case "remove_fav":
                const filteredFavs = state.filter(
                    (item) => item.id !== action.payload.id
                );
                saveFavsInStorage(filteredFavs);
                return filteredFavs;
            case "toggle_theme":
                console.log(state);
                const newThemeState = { ...state, isDark: !state.isDark };
                return newThemeState;
            default:
                return state;
    }
}

const ContextProvider = ({children})=> {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [albumes, setAlbumes] = useState([]);

    const getAlbumes = async () => {
        const res = await fetch("http://localhost:8080/album")
        const data = await res.json();
        setAlbumes(data);
    };
    useEffect(()=> {
        getAlbumes();
    }, []);

    return (
        <ContextGlobal.Provider value={{ albumes, dispatch, state}}>
            {children}
        </ContextGlobal.Provider>
    )
}

export default ContextProvider;