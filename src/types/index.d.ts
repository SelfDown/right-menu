import { LayoutMenuDirection } from '../config';
export type HrType = {
    type: 'hr';
};
export type LiType = {
    type: 'li';
    text: string;
    disabled?: boolean;
    callback: EventListener;
};
export interface AttrsType {
    class?: string;
    style?: string | {
        [key: string]: string;
    };
}
export type ItemType = AttrsType & ElementType;
export type UlType = {
    type: 'ul';
    text: string;
    disabled?: boolean;
    children: ItemType[];
};
export type ElementType = HrType | LiType | UlType;
type GetKeysType<T> = T extends ElementType ? keyof T : never;
type ElementKeysType = GetKeysType<ElementType>;
export type ConfigType = {
    el: string | HTMLElement;
    mode?: 'context-menu' | 'nav-menu';
    theme?: string;
    minWidth?: string | number;
    maxWidth?: string | number;
    include?: string[] | RegExp;
    exclude?: string[] | RegExp;
    defaultProps?: {
        [key in ElementKeysType]?: string;
    };
    beforeInit?: Function;
    afterInit?: Function;
    beforeShow?: Function;
    afterShow?: Function;
    beforeHide?: Function;
    afterHide?: Function;
};
export type OptionsType = ItemType[] | ((e: Event, config: ConfigType) => ItemType[] | Promise<ItemType[]>);
export interface MenuElement extends HTMLElement {
    direction?: LayoutMenuDirection;
}
export {};
