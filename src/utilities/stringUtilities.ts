import {random, sample} from 'lodash-es';
import {nouns} from '../constants/nouns';
import {adjectives} from '../constants/adjectives';

// Generate heroku like string for unique human readable id's
export function randomWordString(withNumber?: boolean): string {
    const nounAdjectiveString: string = `${sample(nouns)}-${sample(adjectives)}`;
    const randomNumberString: string = withNumber ? `-${random(1000, 9999)}` : '';

    return `${nounAdjectiveString}${randomNumberString}`;
}
