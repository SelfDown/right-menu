export declare const setCss: (node: HTMLElement, styles: string) => void;
export declare const getWidth: (node: HTMLElement) => number;
export declare const getHeight: (node: HTMLElement) => number;
export declare const getLeft: (node: HTMLElement) => number;
export declare const getRight: (node: HTMLElement) => number;
export declare const getTop: (node: HTMLElement) => number;
export declare const getBottom: (node: HTMLElement) => number;
export declare const getX: (node: HTMLElement) => number;
export declare const getY: (node: HTMLElement) => number;
/**
 * 获取元素在窗口中的几何属性
 * bottom = y + height = top + height
 * right = x + width = left + width
 * @param { HTMLElement | MouseEvent } node 元素
 * @returns { width, height, left, right, top, bottom, x, y }
 */
export declare const computeRectPosition: (node: HTMLElement | MouseEvent) => {
    x: number;
    y: number;
    width: number;
    height: number;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
};
