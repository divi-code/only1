/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  HTMLAttributes,
  RefObject,
  BlockquoteHTMLAttributes,
  ImgHTMLAttributes,
  FC
} from 'react';
import { PaletteColor, Palette } from '@mui/material/styles';
// import { Color } from '@mui/material';

export type SubType<Base, Condition> = Pick<
  Base,
  {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
  }[keyof Base]
>;

export type SubPaletteColor = keyof SubType<Palette, PaletteColor>;

export interface PaletteColorVariant {
  light: React.CSSProperties['color'];
  main: React.CSSProperties['color'];
  dark: React.CSSProperties['color'];
}

export type PieColor =
  | 'primary'
  | 'secondary'
  // | 'success'
  | 'warning'
  | 'error'
  // | 'grey_dark'
  | 'grey';

export interface ImgProps
  extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  isJPG?: boolean;
}

export interface IconProps {
  name?: SVGIconName & string;
  className?: string;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'inherit';
  crop?: boolean;
  fontSize?: string;
}

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'tertiary';
  _type?: 'flat-button' | 'icon-button';
  cta?: boolean;
}

export interface AnchorProps
  extends Partial<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> {
  button?: boolean;
  cta?: boolean;
  variant?: 'text' | 'outlined' | 'contained' | 'contained-light';
  color?: 'primary' | 'secondary' | 'tertiary';
  _type?: 'flat-button' | 'icon-button';
  exact?: boolean;
  routeLink?: boolean;
}

export interface BoxProps
  extends Partial<
    DetailedHTMLProps<
      HTMLAttributes<HTMLElement> & BlockquoteHTMLAttributes<HTMLElement>,
      HTMLElement & HTMLParagraphElement & HTMLOListElement & HTMLUListElement & HTMLLIElement
    >
  > {
  as?: BoxAs;
  component?: FC<any>;
  _ref?: RefObject<
    HTMLElement & HTMLParagraphElement & HTMLOListElement & HTMLUListElement & HTMLLIElement
  >;
  dynamic?: boolean;
  'data-anim'?: TransitionAnimName;
}

export type TransitionAnimName =
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'fadeInUpBig'
  | 'fadeInDownBig'
  | 'fadeInLeftBig'
  | 'fadeInRightBig'
  | 'In'
  | 'InUp'
  | 'InDown'
  | 'InLeft'
  | 'InRight'
  | 'InUpBig'
  | 'InDownBig'
  | 'InLeftBig'
  | 'InRightBig'
  | 'scale'
  | 'scaleX'
  | 'scaleY';

export type SVGIconName =
  | 'more'
  | 'caret-down'
  | 'search'
  | 'notification'
  | 'logout'
  | 'only1-logo'
  | 'home'
  | 'people'
  | 'briefcase'
  | 'calendar'
  | 'graph'
  | 'settings';

export type SVGShapeName = '';

export type BoxAs =
  | 'strong'
  | 'address'
  | 'nav'
  | 'header'
  | 'main'
  | 'aside'
  | 'footer'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'span'
  | 'p'
  | 'ul'
  | 'ol'
  | 'li'
  | 'section'
  | 'i'
  | 'small'
  | 'blockquote';
