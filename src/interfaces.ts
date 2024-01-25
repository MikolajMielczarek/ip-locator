export interface UserData {
    abbreviation: string,
    client_ip: string,
    datetime: string,
    day_of_week: number,
    day_of_year: number,
    dst: boolean,
    dst_from: null,
    dst_offset: number,
    dst_until: null,
    raw_offset: number,
    timezone: string,
    unixtime: number,
    utc_datetime: string,
    utc_offset: string,
    week_number: number,
}

export interface LocationData {
    ip: string,
    type: string,
    continent_code: string,
    continent_name: string,
    country_code: string,
    country_name: string,
    region_code: string,
    region_name: string,
    city: string,
    zip: string,
    latitude: number,
    longitude: number,
    location: {
      geoname_id: number,
      capital: string,
      languages: [],
      country_flag: string,
      country_flag_emoji: string,
      country_flag_emoji_unicode: string,
      calling_code: string,
      is_eu: boolean,
    },
    error: { code: undefined , info: undefined},
    success: undefined,
  }

export interface IPState {
    ip: string,
    list: string[],
}

export interface SearchInformation {
    continent_code: string,
    continent_name: string,
    country_code: string,
    country_name: string,
    city: string,
    zip: string,
    latitude: number,
    longitude: number,
    error: { code: string , info: string},
}

interface UserInformation {
    ip: string,
    continent_code: string,
    continent_name: string,
    country_code: string,
    country_name: string,
    city: string,
    zip: string,
    latitude: number,
    longitude: number,
    error: { code: string , info: string},
}

export interface StackStateUser {
    userInformation: UserInformation
    isLoading: boolean
    error: string
}

export interface IPStateUser {
    ip: string,
    stackUrl: string,
    isLoading: boolean
    error: string
}