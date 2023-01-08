export interface NewsItem {
    title: string,
    content: string,
    id: number,
    createdAt: string,
    updatedAt: string
}

export interface Theme {
    id: number,
    name: THEMES,
    mainColor: string,
    secondColor: string,
    title: string,
    textColor: string
}

export enum THEMES {
    DARK='dark',
    LIGHT='light',
    BLUE='blue'
}

export interface PropsThemeButton{
    title: THEMES
}

