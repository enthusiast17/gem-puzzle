import { ButtonElement, ContentElement, TitleElement } from "../interfaces"

export const buttonElement = (state: ButtonElement): HTMLElement => {
    const button = document.createElement('button')
    button.className = state.className
    button.textContent = state.textContent
    button.addEventListener('click', state.eventListener)
    return button
}

export const contentElement = (state: ContentElement): HTMLElement => {
    const content = document.createElement('div')
    content.className = state.className
    state.elements.forEach((element) => content.append(element))
    return content
}

export const titleElement = (state: TitleElement): HTMLElement => {
    const title = document.createElement(state.type)
    title.className = state.className
    title.textContent = state.textContent
    return title
}