import Axios from 'axios';

const CHUCK_NORRIS_DB_URL: string = '//api.icndb.com/jokes/random/';

export default class QuoteService {
    public static async getNorris(): Promise<any> {
        return Axios.get(CHUCK_NORRIS_DB_URL);
    }
}
