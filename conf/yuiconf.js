YUI_config = {
    useBrowserConsole: true,
    filter: 'min',
    logExclude: {
        'xstorm-controller-security': true,
    },
    debug: true,
    groups:{ 
        xstorm: {
                
        	filter:'debug',
            combine: false,
            ext: false,
            base: 'build/',
            patterns: {
                'labr-': {}
            },
            logInclude: {
            }
        }
        
    },
    lang: 'es-VE',
};

