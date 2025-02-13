import React, { LazyExoticComponent } from "react";

export type TRoute = {
    index: boolean;
    name: string;
    href: string;
    Component: LazyExoticComponent<React.FC<any>>;
}