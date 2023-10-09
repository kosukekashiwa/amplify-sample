/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame437OverridesProps = {
    Frame437?: PrimitiveOverrideProps<FlexProps>;
    "Star 1"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ViewProps>;
    "Arrow 1"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 1"?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Frame437Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Frame437OverridesProps | undefined | null;
}>;
export default function Frame437(props: Frame437Props): React.ReactElement;
