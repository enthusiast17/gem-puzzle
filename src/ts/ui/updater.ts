export const updateText = (className: string, text: string) => {
    const element = document.querySelector(`.${className}`)
    if (!element || !('textContent' in element)) return
    element.textContent = text
}