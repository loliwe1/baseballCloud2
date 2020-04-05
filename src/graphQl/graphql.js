export const network = {
    query: `query Profiles($input:FilterProfilesInput!)
    { profiles(input: $input)
        { profiles
            {
                id
                first_name
                last_name
                position
                position2
                school_year
                feet
                inches
                weight
                  age
                  events {
                      id}
                      school {
                          id
                          name
                        }
                        teams {
                            id
                            name
                        }
                        favorite
                    }
                    total_count
                }
            }`,
            variables: {input: {profiles_count: 10, offset: 0}},
};

export const leaderBoard = {
    query: `query LeaderboardBatting($input:FilterLeaderboardInput!)
    { leaderboard_batting(input: $input)
        { leaderboard_batting {
            batter_name
            exit_velocity
            launch_angle
            distance
            batter_datraks_id
            age
            school {
                id
                name
            }
            teams {
                id
                name
            }
            favorite
          }
      }
  }`,
  variables: {input: {type: "exit_velocity"}},
};

export const leaderBoardPitching = {
    query: `query LeaderboardPitching($input:FilterLeaderboardInput!)
    { leaderboard_pitching(input: $input)
        { leaderboard_pitching
            {
                pitcher_name
                pitch_type
                velocity
                spin_rate
                vertical_break
                horizontal_break
                pitcher_datraks_id
                age
                school {
                    id
                    name
                }
                teams {
                    id
                    name
                }
                favorite
            }
        }
    }`,
    variables: {input: {type: "pitch_velocity"}}
};

export const getProf = (id) => (
    {query: `query Profile($id:String!)
    { profile(id: $id)
        {
            id
            first_name
            last_name
            position
            position2
            school_year
            avatar
            throws_hand
            bats_hand
            biography
            feet
            inches
            weight
            age
            recent_events {
                id
                event_type
                event_name
                date
                is_pitcher
                data_rows_count
                recent_avatars {
                    id
                    first_name
                    last_name
                    avatar
                }
            }
            winsgspan
            grip_right
            grip_left
            wrist_to_elbow
            broad_jump
            grip_left
            act_score
            gpa_score
            sat_score
            batting_top_values {
                pitch_type
                distance
                launch_angle
                exit_velocity
            }
            pitching_top_values {
                velocity
                spin_rate
                pitch_type
            }
            pitcher_summary {
                velocity
                spin_rate
                horizontal_break
            }
            batter_summary {
                exit_velocity
                distance
                launch_angle
            }
            school {
                id
                name
            }
            teams {
                id
                name
            }
            facilities {
                id
                email
                u_name
            }
            favorite
            events_opened
            paid
        }
    }`,
    variables: {id},
  }

);

export const getProfEvent = (id) => (
    {
      query: `query ProfileEvents($input:FilterProfileEventsInput!)
        { profile_events(input: $input) {
            events {
                id
                date
                event_type
                event_name
            }
            total_count
        }
    }`,
    variables: {input: {profile_id: id, count: 10, offset: 0}},
    }
);

export const getPitchingSumm = (id) => ({
  query: `query PitchingSummary($id:ID!)
    { pitching_summary(id: $id) {
        top_values {
            id
            velocity
            spin_rate
            pitch_type
        }
        average_values{
            id
            velocity
            spin_rate
            pitch_type
        }
    }
  }`,
  variables: {id}
});


export const secondNetwork = {
    query: `query Profiles($input:FilterProfilesInput!)
    { profiles(input: $input)
        { profiles
            {
                id
                first_name
                last_name
                position
                position2
                school_year
                feet
                inches
                weight
                age
                events {
                    id
                }
                school {
                    id
                    name
                }
                teams {
                    id
                    name
                }
                favorite
            }
            total_count
        }
    }`,
    variables: {input: {profiles_count: 10, offset: 10}},
};

export const currentProfile = {
    query: `{current_profile ()
    {
        id
        first_name
        last_name
        position
        position2
        avatar
        throws_hand
        bats_hand
        biography
        school_year
        feet
        inches
        weight
        age
        school {
            id
            name
        }
        teams {
            id
            name
        }
        facilities {
            id
            email
            u_name
        }
      }
    }`,
};

export const favoriteProf = (id, favorite) => ({
    query: `mutation UpdateFavoriteProfile($form:UpdateFavoriteProfileInput!) {
        update_favorite_profile(input: $form) {
            favorite
        }
    }`,
    variables: {form: {profile_id: id, favorite: favorite}}
});


export const filtrNetwork = (input) => ({
    query: `query Profiles($input:FilterProfilesInput!)
    { profiles(input: $input)
        { profiles
            {
                id
                first_name
                last_name
                position
                position2
                school_year
                feet
                inches
                weight
                age
                events {
                    id
                }
                school {
                    id
                    name
                }
                teams {
                    id
                    name
                }
                favorite
            }
            total_count
        }
    }`,
    variables: {input: {...input}}
});

export const filtLeadBoardsBatt = (input) => ({
    query: `query LeaderboardBatting($input:FilterLeaderboardInput!)
    { leaderboard_batting(input: $input)
        { leaderboard_batting {
            batter_name
            exit_velocity
            launch_angle
            distance
            batter_datraks_id
            age
            school {
                id
                name
            }
            teams {
                id
                name
            }
            favorite
        }
      }
    }`,
    variables: {input: {...input}},
});

export const filtLeadBoardsPitch = (input) => ({
    query: `query LeaderboardPitching($input:FilterLeaderboardInput!)
    { leaderboard_pitching(input: $input)
        { leaderboard_pitching
            {
                pitcher_name
                pitch_type
                velocity
                spin_rate
                vertical_break
                horizontal_break
                pitcher_datraks_id
                age
                school {
                    id
                    name
                }
                teams {
                    id
                    name
                }
                favorite
            }
        }
    }`,
    variables: {input: {...input}},
});


export const playerName = (player_name, position) => ({
    query: `query ProfileNames($input:FilterProfileNamesInput!)
    { profile_names(input: $input) {
        profile_names {
            id
            position
            first_name
            last_name
            inches
            feet
            weight
            age
          }
       }
    }`,
    variables: {input: {player_name, position}}
})

export const battingSummary = (id) => ({
    query:`query BattingSummary($id:ID!)
    { batting_summary(id: $id) {
        top_values {
            id
            distance
            pitch_type
            launch_angle
            exit_velocity
        }
        average_values{
            id
            distance
            pitch_type
            launch_angle
            exit_velocity
        }
      }
    }`,
    variables: {id}
})

export const battingLog = (input) => ({
    query: `query BattingLog($input:FilterBattingLogInput!)
    { batting_log(input: $input) {
        batting_log {
            date
            pitcher_name
            pitcher_handedness
            pitch_type
            pitch_call
            exit_velocity
            launch_angle
            direction
            distance
            hit_spin_rate
            hang_time
            pitcher_datraks_id
         }
         total_count
       }
    }`,
    variables: {input: {...input}}
})

export const pitchingLog = (input) => ({
    query: `query PitchingLog($input:FilterPitchingLogInput!)
    { pitching_log(input: $input) {
        pitching_log {
            date
            pitch_type
            pitch_call
            velocity
            spin_rate
            spin_axis
            tilt
            release_height
            release_side
            extension
            vertical_break
            horizontal_break
            height_at_plate
            batter_name
            batter_datraks_id
            batter_handedness
        }
        total_count
      }
    }`,
    variables: {input: {...input}}
})