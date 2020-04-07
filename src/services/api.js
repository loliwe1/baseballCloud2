import * as axios from 'axios';

class Api {
    apiUrl = 'https://baseballcloud-back.herokuapp.com';

    setAuthorizationHeader = (response) => {
        axios.defaults.headers.common['access-token'] =  response.headers['access-token'];
        axios.defaults.headers.common['client'] =  response.headers['client'];
        axios.defaults.headers.common['uid'] =  response.data.data.uid;
        return response;
      }

    signUp = (data) => {
        return axios.post(`${this.apiUrl}/api/v1/auth`, data).then(this.setAuthorizationHeader);
      }

    signIn = (data) => {
        return axios.post(`${this.apiUrl}/api/v1/auth/sign_in`, data).then(this.setAuthorizationHeader);
    }

    persisSignIn = ({token, client, uid}) => (axios.get(`${this.apiUrl}/api/v1/auth/validate_token`, {
      headers: { 
        'access-token': token,
        client,
        uid,
      },
    }).then((response) => {
      this.setAuthorizationHeader(response);
      return response;
    }))

    getNetwork = () => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
      {
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
      })
    }

    getSecondNetwork = () => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
      {
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
    })
  }

    getLeaderBoard = () => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, {
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
      variables: { input: { type: 'exit_velocity' } },
      })
    }

    getLeaderBoardPitch = () => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, {
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
      variables: { input: { type: "pitch_velocity" } }
    })
  }

    getProfile = (id) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
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
  })
    }

    getProfileEvent = (id) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
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
        variables: { input: { profile_id: id, count: 10, offset: 0 } },
      })
    }
    getPitchingSummary = (id) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, {
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
      })
    }

    getSchools = () => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`,
      {
        query: `query Schools($search:String!)
          { schools(search: $search) {
            schools {
              id
              name
            }
          }
        }`,
        variables: {search: ""}
      })
    }


    getTeams = () => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
       { query: `query Teams($search:String!)
          { teams(search: $search) {
            teams {
              id
              name
            }
          }
        }`,
         variables: { search: '' },
        })
    }

    getFacilities = () => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
      {
        query: `query Facilities($search:String!)
        { facilities(search: $search) {
            facilities {
                id
                email
                u_name
            }
        }
        }`,
          variables: { search: '' },
      })
    }

    updateProfile = (
      {
        avatar = null,
        feet = null,
        inches = null,
        weight = null,
        age = null,
        school_year = null,
        biography = null,
        position = null,
        position2 = null,
        first_name = null,
        last_name = null,
        bats_hand = null,
        throws_hand = null,
        school = null,
        teams = null,
        facilities = null,
        id,
      },
      headers,
    ) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`,
      {
        query: `mutation UpdateProfile($form:UpdateProfileInput!)
    { update_profile (input:$form)
        { profile
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
                recent_events {
                    id
                    event_type
                    event_name
                    date
                    recent_avatars {
                        id
                        first_name
                        last_name
                        avatar
                    }
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
            }
          }
        }`,
  variables: {
    form: {
      avatar,
      feet,
      inches,
      weight,
      age,
      school_year,
      biography,
      position,
      position2,
      first_name,
      last_name,
      bats_hand,
      throws_hand,
      id,
      school,
      teams,
      facilities,
    },
  },
  headers,
      })
    }

    getCurrentProfile = () => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
      {
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
      })
    }

    changeFavorite = ({id, favorite}) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
      {
        query: `mutation UpdateFavoriteProfile($form:UpdateFavoriteProfileInput!) {
          update_favorite_profile(input: $form) {
              favorite
          }
      }`,
      variables: {form: {profile_id: id, favorite: !favorite}}
      });
    }

    filterNetwork = (input) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
      {
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
  }

    filterLeaderBoardsBatt = (input) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
      {
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
    variables: { input: { ...input } },
   });
  }

    filterLeaderBoardsPitch = (input) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
      {
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
      variables: { input: { ...input } },
    });
  }

    searchPlayer = ({player_name, position}) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
      {
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
  variables: { input: { player_name, position } },
      })
    }

    getSecondProfile = (data) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, data)
    }

    getBattingSummary = (id) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
      {
        query: `query BattingSummary($id:ID!)
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
      variables: { id },
      })
    }

    getBattingLog = (input) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
      {
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
  variables: { input: { ...input } },
      })
    }

    getPitchingLog = (input) => {
      return axios.post(`${this.apiUrl}/api/v1/graphql`, 
      {
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
  variables: { input: { ...input } },
      })
    }

}
export default new Api();