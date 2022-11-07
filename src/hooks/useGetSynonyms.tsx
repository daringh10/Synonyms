import { Synonym } from "../model/Synonym";
import { useState } from "react";
import { fetchSynonyms } from "../../api/fetchSynonyms";

export const useGetSynonyms = () => {
    const [synonyms, setSynonyms] = useState<Synonym[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getSynonyms = async (word: string) => {
        setIsLoading(true);
        const synArray = await fetchSynonyms(word);
        setSynonyms(synArray);
        setIsLoading(false);

    };

    return {isLoading, synonyms, getSynonyms}; // Expose these
}
