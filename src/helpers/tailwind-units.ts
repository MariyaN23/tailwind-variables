export interface Unit {
    [key: number]: string
}

export const fontSizes: Unit = {
    //key in rem
    0.75: 'text-xs',
    0.875: 'text-sm',
    1: 'text-base',
    1.125: 'text-lg',
    1.25: 'text-xl',
    1.5: 'text-2xl',
    1.875: 'text-3xl',
    2.25: 'text-4xl',
    3: 'text-5xl',
    3.75: 'text-6xl',
    4.5: 'text-7xl',
    6: 'text-8xl',
    8: 'text-9xl',
}

export const breakpoints: Unit = {
    //key in px
    640: 'sm',
    768: 'md',
    1024: 'lg',
    1280: 'xl',
    1536: '2xl',
}

export const spacingValues: Unit = {
    //fixed list
    0: '0',
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
    14: '14',
    16: '16',
    20: '20',
    24: '24',
    28: '28',
    32: '32',
    36: '36',
    40: '40',
    44: '44',
    48: '48',
    52: '52',
    56: '56',
    60: '60',
    64: '64',
    72: '72',
    80: '80',
    96: '96',
}

export const borderRadius: Unit = {
    //key in px
    0: 'rounded-none',
    2: 'rounded-xs',
    4: 'rounded-sm',
    6: 'rounded-md',
    8: 'rounded-lg',
    12: 'rounded-xl',
    16: 'rounded-2xl',
    24: 'rounded-3xl',
    32: 'rounded-4xl',
    9999: 'rounded-full',
}

export const fontWeights: Unit = {
    100: 'font-thin',
    200: 'font-extralight',
    300: 'font-light',
    400: 'font-normal',
    500: 'font-medium',
    600: 'font-semibold',
    700: 'font-bold',
    800: 'font-extrabold',
    900: 'font-black',
}

export const maxWidth: Unit = {
    //key in px
    1: 'max-w-px',
    256: 'max-w-3xs',
    288: 'max-w-2xs',
    320: 'max-w-xs',
    384: 'max-w-sm',
    448: 'max-w-md',
    512: 'max-w-lg',
    576: 'max-w-xl',
    672: 'max-w-2xl',
    768: 'max-w-3xl',
    896: 'max-w-4xl',
    1024: 'max-w-5xl',
    1152: 'max-w-6xl',
    1280: 'max-w-7xl',
}
