const useOptionsList = () => {
    const optionsList = [
        "All",
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania",
    ]
    const getOption = (id) => {
        return optionsList[id]
    }
    return {optionsList, getOption};
}
export default useOptionsList;