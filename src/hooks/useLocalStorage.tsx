
function useLocalStorage() {
    const setLocalStorage = (key: string, value: string) => {
        localStorage.setItem(key, value)
    }

    const getLocalStorage = (key: string) => {
        return localStorage.getItem(key)
    }

    return { setLocalStorage, getLocalStorage }
}

export default useLocalStorage