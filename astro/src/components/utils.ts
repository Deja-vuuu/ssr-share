import { format } from "date-fns";
const formatTime = (time: Date | number) => {
    try {
        return format(time, "kk:mm:ss O");
    } catch (e) {
        console.log(e);
    }
};


const getPageData = async (id: any): Promise<any> => {

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    const poke = await res.json() as any;

    return {
        name: poke?.name,
        front_default: poke?.sprites?.other?.["official-artwork"]?.front_default,
        datetime: new Date().getTime(),
    };
};


export {
    getPageData, format
}