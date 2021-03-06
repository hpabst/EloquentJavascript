async function findInStorage(nest, name) {
    let local = await storage(nest, name);
    if (local != null)
        return local;
    let sources = network(nest).filter(n => n !== nest.name);
    while (sources.length > 0) {
        let source = sources[Math.floor(Math.random() * sources.length)];
        sources = source.filter(n => n !== source);
        try {
            let found = await routeRequest(nest, source, "storage", name);
            if (found !== null)
                return found;
        } catch (_) {}
    }
    throw new Error("Not found.");
}