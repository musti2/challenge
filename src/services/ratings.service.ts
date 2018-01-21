import 'rxjs/add/observable/fromPromise';

import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs/Observable';

import PlayerRating from '../model/player-rating.model';
import { Logger } from '../util/log';

/**
 * Service for ratings.json
 */
export default class RatingsService {
  protected logger: Logger;

  getPlayerRatings(): Observable<PlayerRating[]> {
    return Observable.fromPromise(
      axios
        .get(`${process.env.BASE_URL}/data/ratings.json`)
        .then((response: AxiosResponse) =>
          response.data.playerRatings.map(rating => new PlayerRating(rating))
        )
        .catch(e => {
          this.logger.info(e);
        })
    );
  }
}
