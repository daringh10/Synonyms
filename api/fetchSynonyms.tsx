
const API_URL = `https://api.datamuse.com`

export const fetchSynonyms = async (word: string) => {
    const res = await fetch(
      `${API_URL}/words?rel_syn=${word}`
    );
    const synArray = await res.json();
    return synArray;
  }