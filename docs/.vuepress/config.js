module.exports = {
    base: '/English/',
    dest: 'dist',
    title: '英语',
    description: '掌握英语',
    themeConfig: {
        logo: '/English.png',
        displayAllHeaders: false,
        editLinks: false,
        docsDir: 'docs',
        // header组件的菜单栏配置
        nav: [
            {
                text: 'GPA',
                link: '/c00-prepare/'
            },
            {
                text: '新概念 1',
                link: '/c01-newConceptEnglish-1/'
            },
            {
                text: '语法',
                link: '/c05-grammar/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/jsliweijun/English'
            }
        ],
        // 左侧菜单栏配置
        sidebar: {
            '/c00-prepare/': [''],
            '/c01-newConceptEnglish-1/': ['', 's01-1-2'],
            '/c05-grammar/': ['']
        }
    }
};
