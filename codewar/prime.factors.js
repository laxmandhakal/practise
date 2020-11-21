function sumOfDivided(lst) {
    a = [];
    unique = [];
    result = [];

    for (n of lst) {
        if (n < 0) n = -n;

        while (n % 2 == 0) {
            a.push(2);
            n = n / 2;
        }

        for (i = 3; i <= n ** (1 / 2); i = i + 2) {
            while (n % i == 0) {
                a.push(i);
                n = n / i;
            }
        }

        if (n > 2) a.push(n);
    }

    for (k of a) {
        if (unique.indexOf(k) == -1) unique.push(k);
    }
    unique.sort(function(a, b) {
        return a - b;
    });

    for (y of unique) {
        count = 0;

        for (i of lst) {
            if (i % y == 0) count = count + i;
        }
        result.push([y, count]);
    }
    return result;
}
sumOfDivided([
    178,
    98,
    165, -61,
    117,
    72, -79,
    131, -24, -77, -9,
    103,
    36,
    144,
    171,
    11, -33,
    26,
    22,
    151,
    179,
    123,
]);