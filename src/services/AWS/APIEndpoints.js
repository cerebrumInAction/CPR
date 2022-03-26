export const APIEndpoints = {
  ARTIST: {
    name: "Artist",
    endpoint: process.env.REACT_APP_ARTIST_ENDPOINT,
  },
  RECOMENDATIONS: {
    name: "reacomendation",
    endpoint: process.env.REACT_APP_RECOMENDATIONS_ENDPOINT,
  },
};

export const APIPaths = {
  LOGIN_DATA: "/user/login",
  GET_INVITES: "/user/login/invites",
  CREATE_ARTIST: "/artists/profile/create",
  UPDATE_ARTIST: "/artists/profile/update",
  GET_RELATIONSHIPS: "/artists/relationships",
  GET_GENRES: "/artists/genres",
  GET_PRESIGNED_URL: (profileId) => `/artists/profile/${profileId}/presignedurl`,
  GET_ROLES: "/artists/roles",
  POST_INVITATION: "/artists/invitations",
  UPDATE_INVITATION_STATUS: "/artists/user/invitations/update",
  GET_ARTIST_PROFILES: "/artists/profiles/getprofilesforuser",
  GET_PROFILE_DETAILS: "/artists/profiles/fetchartistprofiledetails",
  POST_LAST_SESSION: "/user/lastvisited/update",
  GET_ARTISTS: "/user/artistprofiles/search",
  GET_ARTIST_PRFOILE_DETAILS: (profileId) => `/user/getartistprofiledetails/${profileId}`,
  POST_FOLLOWINGS: "/user/followings/update",
  GET_FOLLOWINGS: "/user/followings/fetch",
  CREATE_EVENT: "/artists/events/eventmodify",
  GET_ARTIST_PROFILE_EVENTS: "/artists/events/fetchartistprofileevents",
  GET_EVENT_DETAILS: "/artists/events/fetcheventdetails",
  GET_USER_DETAILS: (userId) => `/user/${userId}/getuserdetails`,
  UPDATE_FAN_PROFILE: "/user/updateuserdetails",
  DELETE_EVENT: "/artists/events/deleteevent",
  CREATE_DEPOSIT: "/user/events/createdeposits",
  UPDATE_DEPOSITS: "/user/events/updatedeposits",
  GET_USER_EVENT_DETAILS: (eventid) => `/user/geteventdetails/${eventid}`,
  GET_FAN_RESERVED_EVENTS: "/user/events/fetchreservedeventsforfan",
  GET_DEPOSITS_FOR_FAN: (userId, eventId) => `/user/events/${userId}/getdepositsforfan/${eventId}`,
  GET_VENUES: "/artists/venues/search/name",
  CREATE_TOUR: "/artists/tours/tourmodify",
  GET_VENUE_LOCATIONS: "/artists/events/searchvenuelocations",
  UPDATE_TOUR_EVENTS: "/artists/tours/events/modifylist",
  GET_TOUR_EVENT_DETAILS: "/artists/tours/events/fetch/all",
  GET_TOUR_VENUE_DETAILS: "/artists/tours/venues/fetch/fetchvenuedetails",
  GET_VENUES_FOR_CITY: "/artists/tours/venues/fetch/city",
  REQUEST_BOOKING: "/artists/tours/event/venue/booking/send",
  REMOVE_VENUE: "/artists/tours/event/venue/replace",
  GET_ARTIST_PROFILE_TOURS: "/artists/tours/fetchartistprofiletours",
  GET_ARTIST_TOUR_DETAILS: (tourid) => `/artists/events/gettourdetails/${tourid}`,
  GET_TOUR_DETAILS: "/artists/events/fetchtourdetails",
  DELETE_TOUR: "/artists/tours/deletetour",
  GET_TIMEZONE: "/artists/events/fetch/timezone",
  GET_CITY: "/artists/city/search/name",
  UPDATE_TOUR_EVENT_TIME: "/artists/events/updatetoureventtime",
  FETCH_INVITED_USERS: "/artists/users/fetchinvitedusers",
  GET_RECOMENDATIONS: "/tour-route",
  MAKE_PAYMENT: "/customer/payment/deposit",
  FETCH_ARTIST_EVENT_DEPOSITS: "/artists/events/fetcheventdepositsforartist",
  FETCH_BUDGET_INCOME: "/artists/events/fetcheventbudgetprojectedincome",
  UPDATE_BUDGET_INCOME: "/artists/events/updateeventbudgetprojectedincome",
  FETCH_BUDGET_EXPENSE: "/artists/events/fetcheventbudgetexpense",
  MODIFY_BUDGET_EXPENSE: "/artists/events/modifyeventbudgetexpense",
  UPDATE_VENUE: "/venues/updatevenue",
  FETCH_VENUE: "/venues/fetchmanagedvenues",
  FETCH_PERFORMANCE_CONTRACTS_LIST_FOR_VENUES: "/venues/fetchperformancecontractlistforvenues",
  FETCH_VENUES_BY_CITY: "/venues/fetchvenuesbycity",
  FETCH_VENUE_DETAILS: (venueId) => `/venues/getvenuedetails/${venueId}`,
  CREATE_PERFORMANCE_CONTRACT: "/artists/events/createperformancecontract",
  UPDATE_PERFORMANCE_CONTRACT_STATE: "/events/updateperformancecontractstate",
  FETCH_PERFORMANCE_CONTRACT_FOR_ARTIST: "/artists/events/fetchperformancecontractlistforartists",
};