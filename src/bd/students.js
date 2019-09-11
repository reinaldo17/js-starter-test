export function Students() {
    'use strict';
    let items = [
        {
            'name': 'Julio Rodriguez', 'mail': 'julio@emailna.co', 'age': '30',
            'courses': [
                1, 2

            ]
        },
        {
            'name': 'Felix Tovar', 'mail': 'felix@emailna.co', 'age': '30',
            'courses': [
                1, 4
            ]
        },
        {
            'name': 'Rosmy Rodríguez', 'mail': 'rosmy@emailna.co', 'age': '30',
            'courses': [
                2, 5
            ]
        },
        {
            'name': 'Jean Contreras', 'mail': 'jean@emailna.co', 'age': '30',
            'courses': [4, 5]
        }

    ];

    Object.defineProperty(this, 'items', {'get': () => items});
}

