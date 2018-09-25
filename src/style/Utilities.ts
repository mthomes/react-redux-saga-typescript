import {BASE_FONT_SIZE} from './Vars';

export function fontSize(size: number): string {
    return `font-size: ${size / BASE_FONT_SIZE}rem`;
}
