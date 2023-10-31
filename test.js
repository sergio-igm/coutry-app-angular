const av = 75;
const ah = 1.715;
const humanoudHeigthToVolumen = h => (av ** (1 / 3) * (h / ah)) ** 3;
const volumenToHumanoudHeigthTo = v => (av ** (1 / 3) * (v / ah)) ** 3;

// f(n) = ((75 ** (1 / 3)) * (n / 1.715)) ** 3;
