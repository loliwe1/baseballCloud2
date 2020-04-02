export const requestSchool = () => ({
        query: `query Schools($search:String!)
          { schools(search: $search) {
              schools {
                  id
                  name
              }
          }
        }`,
        variables: {search: ""}
});


export const requestTeams = () => ({
    query: `query Teams($search:String!)
    { teams(search: $search) {
        teams {
            id
            name
        }
    }
}`,
variables: {search: ""},
});

export const requestFacilities = () => ({
    query: `query Facilities($search:String!)
        { facilities(search: $search) {
            facilities {
                id
                email
                u_name
            }
        }
        }`,
        variables: {search: ""},
});

export const updateProf = ({
    avatar=null,
    feet=null,
    inches=null,
    weight=null,
    age=null,
    school_year=null,
    biography=null,
    position=null,
    position2=null,
    first_name=null,
    last_name=null,
    bats_hand=null,
    throws_hand=null,
    school=null,
    teams=null,
    facilities=null,
    id,
}, headers ) => ({
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
                
            }
        },
        headers
});
