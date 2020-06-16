export function Students() {
    /**
     * Para el mejor manejo de datos fueron agregados varios parametros, tales como isAdmin, pass,id
     * isAdmin es un booleano que le acredita al usuario permisos para crear, editar y eliminar cursos
     * id para distinguir cada usuario por un parametro unico
     * pass es una clave para poder acceder al sistema
     */
    let items = [
        {
            'name': 'Julio Rodriguez', 'mail': 'julio@emailna.co', 'age': '30','isAdmin': false,
             'pass': "123456789",
             'id': "1",
            'courses': [
                1, 2

            ]
        },
        {
            'name': 'Felix Tovar', 'mail': 'felix@emailna.co', 'age': '30','isAdmin': false,
            'pass': "123456789",
            'id': "2",
            'courses': [
                1, 4
            ]
        },
        {
            'name': 'Rosmy Rodríguez', 'mail': 'rosmy@emailna.co', 'age': '30','isAdmin': false,
            'pass': "123456789",
            'id': "3",
            'courses': [
                2, 5
            ]
        },
        {
            'name': 'Jean Contreras', 'mail': 'jean@emailna.co', 'age': '30', 'isAdmin': false,
            'pass': "123456789",
            'id': "4",
            'courses': [
                4, 5
            ]
        },
        {
            'name': 'Administrador', 'mail': 'admin@admin.com', 'age': '30', 'isAdmin': true,
            'pass': "123456789",
            'id': "5",
            'courses': [4, 5]
        }

    ];

    Object.defineProperty(this, 'items', {'get': () => items});
}
//esta linea fue agregada porque no estaba siendo exportada la lista de estudiantes
export default Students;
