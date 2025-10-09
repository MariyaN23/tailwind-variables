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
    //key in rem
    0: 'rounded-none',
    0.125: 'rounded-xs',
    0.25: 'rounded-sm',
    0.375: 'rounded-md',
    0.5: 'rounded-lg',
    0.75: 'rounded-xl',
    1: 'rounded-2xl',
    1.5: 'rounded-3xl',
    2: 'rounded-4xl',
    624.938: 'rounded-full',
}
