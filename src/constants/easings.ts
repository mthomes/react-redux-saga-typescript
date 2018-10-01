export interface IEasing {
    EASE: number[];
    IN: number[];
    IN_BACK: number[];
    IN_CIRC: number[];
    IN_CUBIC: number[];
    IN_EXPO: number[];
    IN_OUT: number[];
    IN_OUT_BACK: number[];
    IN_OUT_CIRC: number[];
    IN_OUT_CUBIC: number[];
    IN_OUT_EXPO: number[];
    IN_OUT_QUAD: number[];
    IN_OUT_QUART: number[];
    IN_OUT_QUINT: number[];
    IN_OUT_SINE: number[];
    IN_QUAD: number[];
    IN_QUART: number[];
    IN_QUINT: number[];
    IN_SINE: number[];
    LINEAR: number[];
    OUT: number[];
    OUT_BACK: number[];
    OUT_CIRC: number[];
    OUT_CUBIC: number[];
    OUT_EXPO: number[];
    OUT_QUAD: number[];
    OUT_QUART: number[];
    OUT_QUINT: number[];
    OUT_SINE: number[];
}

export const EASING: IEasing = {
    EASE: [0.25, 0.1, 0.25, 1],
    IN: [0.42, 0, 1, 1],
    IN_BACK: [0.6, -0.28, 0.735, 0.045],
    IN_CIRC: [0.6, 0.04, 0.98, 0.335],
    IN_CUBIC: [0.55, 0.055, 0.675, 0.190],
    IN_EXPO: [0.95, 0.05, 0.795, 0.035],
    IN_OUT: [0.42, 0, 0.580, 1],
    IN_OUT_BACK: [0.68, -0.550, 0.265, 1.55],
    IN_OUT_CIRC: [0.785, 0.135, 0.150, 0.86],
    IN_OUT_CUBIC: [0.645, 0.045, 0.355, 1],
    IN_OUT_EXPO: [1, 0, 0, 1],
    IN_OUT_QUAD: [0.455, 0.03, 0.515, 0.955],
    IN_OUT_QUART: [0.77, 0, 0.175, 1],
    IN_OUT_QUINT: [0.86, 0, 0.07, 1],
    IN_OUT_SINE: [0.445, 0.05, 0.55, 0.95],
    IN_QUAD: [0.55, 0.085, 0.68, 0.53],
    IN_QUART: [0.895, 0.03, 0.685, 0.22],
    IN_QUINT: [0.755, 0.05, 0.855, 0.06],
    IN_SINE: [0.47, 0, 0.745, 0.715],
    LINEAR: [0.25, 0.25, 0.75, 0.75],
    OUT: [0, 0, 0.58, 1],
    OUT_BACK: [0.175, 0.885, 0.32, 1.275],
    OUT_CIRC: [0.075, 0.82, 0.165, 1],
    OUT_CUBIC: [0.215, 0.61, 0.355, 1],
    OUT_EXPO: [0.19, 1, 0.22, 1],
    OUT_QUAD: [0.25, 0.46, 0.45, 0.94],
    OUT_QUART: [0.165, 0.84, 0.44, 1],
    OUT_QUINT: [0.23, 1, 0.32, 1],
    OUT_SINE: [0.39, 0.575, 0.565, 1],
}
