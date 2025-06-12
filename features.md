Integrar un api externa.

2 posibles formas:

- API nativo de javascript => fetch
- Lib gestora de protocolo http => axios

hooks de react

useState => const [libros, setLibros] = useState<string>('Harry Potter') => setLibros('Domy')
useEffect => hook de react que se ejecuta con la llamada del componente que lo contiene => OnMount , OnRender useEffect(()=>{
const handle = async () => {

    }

},['Array de dependencias para indicar cuando debe vovler a ejecutar la funcion'])

//memoizaciones
useCallback => memoiza funciones

const [loading, setLoading] = useState<boolean>(false)

const hadleCambiarNombre = useCallback(async ()=>{
.... lo mismo la otra funcion
},[setLoading])

const handleCambiarNombre = async () => {
try {
setLoading(true)
await patch('/algo')
}catch (e) {
console.log("Error => ",e)
}finally {
setLoading(false)
}
}

useMemo => meiozar componetes o datos

const dataGestionInventarios = [{a: 1, b:2, c:3}, ..... ] //50 mil posiciones

const handleCambiarNombre = () => {
.....
}

cosnt dataGestionInventariosMemo = useMemo(() => {
return [{a: 1, b:2, c:3}, ..... ] //50 mil posiciones
},[handleCambiarNombre])

race condition => dos o mas procesos en paralelo y uno de ellos termine su ejecucion antes que el otro del cual depende.

prop drilling
a un componente pasarle propiedas para que se puedan usar en el mismo
