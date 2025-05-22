function FindProxyForURL(url, host) {
    // Usar proxy solo para freepil.com, freeepik.es y sus subdominios
    if (
        dnsDomainIs(host, ".freepil.com") || 
        dnsDomainIs(host, ".freepik.es") ||
        shExpMatch(host, "*.freepil.com") ||
        shExpMatch(host, "*.freepik.es")
    ) {
        return "PROXY 102.129.178.6:4414"; // Proxy para los dominios especificados
    }

    // Conexión directa para todo lo demás
    return "DIRECT";
}