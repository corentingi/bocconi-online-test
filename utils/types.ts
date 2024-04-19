export interface Answer {
  uuid: string
  text: string
  correct?: boolean
}

export interface ImageFigure {
  legend?: string
  image_src: string
}

export interface TableFigure {
  legend: string
  data: string[][]
}

export interface TextFigure {
  legend?: string
  text: string
}

export interface Question {
  uuid: string
  area: string
  text: string
  figure?: ImageFigure | TableFigure | TextFigure
  answers: Answer[]
}
