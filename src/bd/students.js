export function Students() {
    'use strict';
    let items = [
        {
            'name': 'Julio Rodriguez', 'mail': 'julio@emailna.co', 'age': '30',
            'courses': [
                'javascript 1',
                'javascrip 2'
            ]
        },
        {
            'name': 'Felix Tovar', 'mail': 'felix@emailna.co', 'age': '30',
            'courses': [
                'javascript 1',
                'javascript 2'
            ]
        },
        {
            'name': 'Rosmy Rodríguez', 'mail': 'rosmy@emailna.co', 'age': '30',
            'courses': [
                'Design Patterns',
                'Advanced PHP Topics'
            ]
        },
        {
            'name': 'Jean Contreras', 'mail': 'jean@emailna.co', 'age': '30',
            'courses': [
                'UX experts',
                'noSQL'
            ]
        }

    ];

    Object.defineProperty(this, 'items', {'get': () => items});
}

