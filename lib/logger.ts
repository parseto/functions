function logger (logObject: any) {
    console.log(`
LOG TIME : ${new Date()}

${JSON.stringify(logObject, null, 2)}
    
    `)
    return logObject
}


export default logger
