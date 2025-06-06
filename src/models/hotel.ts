export interface Hotel {
  comment: string
  contents: string
  id: string
  images: string[]
  location: { directions: string; pointGeolocation: { x: number; y: number } }
  mainImageUrl: string
  name: string
  price: number
  starRating: number
  events?: {
    name: string
    promoEndTime?: string
    tagThemeStyle: {
      backgroundColor: string
      fontColor: string
    }
  },
  recommendHotels: string[]
  forms: ReservationForm[]
}

export interface HOTEL_2 {
  comment: string
  contents: string
  id: string
  city : string,
  images: string[]
  location: { directions: string; pointGeolocation: { x: number; y: number } }
  mainImageUrl: string
  name: string
  price: number
  starRating: number,
  cleanliness : number
  security : number,
  facilities : number
  recommand : boolean
  events?: {
    name: string
    promoEndTime?: string
    tagThemeStyle: {
      backgroundColor: string
      fontColor: string
    }
  },
  recommendHotels: string[]
  forms: ReservationForm[]
}

interface BaseForm {
  id: string
  label: string
  required: string
  helpMessage?: string
}

interface TextFieldForm extends BaseForm {
  type: 'TEXT_FIELD'
}

interface SelectFieldForm extends BaseForm {
  type: 'SELECT'
  options: Array<{ label: string; value: string }>
}

export type ReservationForm = TextFieldForm | SelectFieldForm

