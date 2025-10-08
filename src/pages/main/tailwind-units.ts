export interface Unit {
    [key: number]: string
}

export const fontSizes: Unit = {
    //key in px
    12: 'text-xs',
    14: 'text-sm',
    16: 'text-base',
    18: 'text-lg',
    20: 'text-xl',
    24: 'text-2xl',
    30: 'text-3xl',
    36: 'text-4xl',
    48: 'text-5xl',
    60: 'text-6xl',
    72: 'text-7xl',
    96: 'text-8xl',
    128: 'text-8xl',
}

export const breakpoints: Unit = {
    //key in px
    640: 'sm',
    768: 'md',
    1024: 'lg',
    1280: 'xl',
    1536: '2xl',
}

export const widthValues: Unit = {
    //key in rem
    0: 'w-0',
    0.125: 'w-0.5',
    0.25: 'w-1',
    0.375: 'w-1.5',
    0.5: 'w-2',
    0.625: 'w-2.5',
    0.75: 'w-3',
    0.875: 'w-3.5',
    1: 'w-4',
    1.25: 'w-5',
    1.5: 'w-6',
    1.75: 'w-7',
    2: 'w-8',
    2.25: 'w-9',
    2.5: 'w-10',
    2.75: 'w-11',
    3: 'w-12',
    3.5: 'w-14',
    4: 'w-16',
    5: 'w-20',
    6: 'w-24',
    7: 'w-28',
    8: 'w-32',
    9: 'w-36',
    10: 'w-40',
    11: 'w-44',
    12: 'w-48',
    13: 'w-52',
    14: 'w-56',
    15: 'w-60',
    16: 'w-64',
    18: 'w-72',
    20: 'w-80',
    24: 'w-96',
}
