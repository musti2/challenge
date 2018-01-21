import * as _ from 'lodash';

import Player from './player.model';
import PlayerRatingDetail from './player-rating-detail.model';
import Team from './team.model';

class PlayerRating {
  position: string;
  player: Player;
  team: Team;
  detailedRatings: PlayerRatingDetail[];

  /**
   * @returns string
   */
  get fullName(): string {
    return `${this.player.playerName.givenName} ${
      this.player.playerName.surname
    }`;
  }
  /**
   * @returns string
   */
  get teamName(): string {
    return this.team.teamName;
  }

  /**
   * @returns RatingDetail
   */
  get overallRating(): PlayerRatingDetail {
    return _.find(
      this.detailedRatings,
      (r: PlayerRatingDetail) => r.ratingType === 'OVERALL'
    );
  }

  constructor(rating) {
    this.position = rating.position.toLowerCase();
    this.player = rating.player;
    this.team = rating.team;
    this.detailedRatings = rating.detailedRatings;
  }
}

export default PlayerRating;
