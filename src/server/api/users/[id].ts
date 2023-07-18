export default defineEventHandler((event) => {
    const data= event.context.params
    return {
       hello: data
     
    }
  })