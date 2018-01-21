import './stats.scss';

import { Observable } from 'rxjs/Observable';
import { Component, Vue } from 'vue-property-decorator';

import clubs from '../../data/clubs';
import PlayerRating from '../../model/player-rating.model';
import RatingsService from '../../services/ratings.service';

const ratingService = new RatingsService();
const ratingsObservable: Observable<
  PlayerRating[]
> = ratingService.getPlayerRatings();

@Component({
  template: require('./stats.html'),
  subscriptions: {
    playerRating$: ratingsObservable
  }
})
export class StatsComponent extends Vue {
  /**
   * @param  {string} teamName
   * @returns string
   */
  getClubImage(teamName: string): string {
    for (const c of clubs) {
      if (c.name === teamName) {
        return '../../assets/img/icon-club-' + c.code + '.svg';
      }
    }
  }
}
