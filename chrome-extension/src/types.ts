import { NumberValue } from "d3";

export type dataType = string | boolean | { [key: string]: any };

export type manifestObj = {
    name: string;
    max?: number;
    widthSet?: number;
    level: null | string;
    children: null | manifestObj[];
    x: number;
    y: number;
};

export type nodeObj = {
    parent: null | nodeObj;
    children?: nodeObj[];
    x: number;
    y: number;
    descendants(): { name: string }[];
};

export type listObj = {
    name: string;
    y: number;
    x: number;
    parent: null | listObj;
};

export type circleObj = {
    name: string;
    level: number;
    data: null | circleObj;
    _children: circleObj[];
}

export type parseObj = {
    name: string;
    max?: number;
    widthSet?: number;
    level: null | string;
    children: null | parseObj[];
}

export type windowObj = { remixManifest: { routes: manifestObj } };

export type windowObjUnderscore = { __remixManifest: { routes: manifestObj } };
