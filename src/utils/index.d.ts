import { LayoutMenuDirection } from '../config';
import { AttrsType, MenuElement } from '../types';
/**
 * 阻止默认事件和冒泡
 * @param { Event } e 事件参数
 * @returns { void }
 */
export declare const preventDefault: (e: Event) => void;
/**
 * 过滤合法的 dom 属性
 * @param { object } opt 菜单的item
 * @returns { object }
 */
export declare const filterAttrs: (options: AttrsType, params: AttrsType & {
    [key: string]: any;
}) => AttrsType;
export declare const handleCamelCase: (arg: string) => string;
export declare const handleStyle: (params: string | {
    [key: string]: string;
}) => string;
export declare const layoutMenuPositionEffect: (base: HTMLElement | MouseEvent, menu: MenuElement, direction?: LayoutMenuDirection) => void;
export declare const getValue: (val: string | number) => string;
