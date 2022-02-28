const llista = require("./dades.js")

function ordenar_per_nom(llista){  
    const sortByKey = (clave, orden = 'asc') => {
        const clasificar = orden === 'asc' ? 1 : -1
        return (a, b) => {
            const A = (typeof a[clave] === 'string') ? a[clave].toUpperCase() : a[clave];
            const B = (typeof b[clave] === 'string') ? b[clave].toUpperCase() : b[clave];
            if ( A < B ){
                return clasificar * -1
            }else if ( A > B ) {
                return clasificar * 1
            } else {
                return 0
            }
        }
    }
    //asc o desc
    //console.log(llista.sort(sortByKey('alumne', 'asc')))
    return llista.sort(sortByKey('alumne', 'asc'))
}
  
function ordenar_per_naiximent(llista){ 
    const sortByKey = (clave, orden = 'asc') => {
        const clasificar = orden === 'asc' ? 1 : -1
        return (a, b) => {
            const A = (typeof a[clave] === 'date') ? new Date(a[clave]) : new Date(a[clave]);
            const B = (typeof b[clave] === 'date') ? new Date(b[clave]) : new Date(b[clave]);
            if ( A < B ){
                return clasificar * -1
            }else if ( A > B ) {
                return clasificar * 1
            } else {
                return 0
            }
        }
    }
    //asc o desc
    //console.log(llista.sort(sortByKey('data_naiximent', 'asc')))
    return llista.sort(sortByKey('data_naiximent', 'asc'))
}

module.exports={ordenar_per_nom,ordenar_per_naiximent}

//ordenar_per_nom(llista)
//ordenar_per_naiximent(llista)