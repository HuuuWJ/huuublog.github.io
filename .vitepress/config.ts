import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex'

const customElements = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mi',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'mscarries',
    'msgroup',
    'mstack',
    'mlongdiv',
    'msline',
    'mstack',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'math',
    'mi',
    'mn',
    'mo',
    'ms',
    'mspace',
    'mtext',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'msqrt',
    'mstyle',
    'mmultiscripts',
    'mover',
    'mprescripts',
    'msub',
    'msubsup',
    'msup',
    'munder',
    'munderover',
    'none',
    'maligngroup',
    'malignmark',
    'mtable',
    'mtd',
    'mtr',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'msrow',
    'mstack',
    'maction',
    'semantics',
    'annotation',
    'annotation-xml'
]
// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: 'https://huuublog.github.io/',
    title: '个人',
    markdown: {
        config: (md) => {
            md.use(markdownItKatex)
        }
    },
    // 由于vitepress编译生成静态html文件时，无法识别插件生成的特殊标签，故需在编译时进行处理，将特殊标签定位自定义标签，防止编译报错
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.indexOf(tag) != -1
            }
        }
    },
    head: [
        [ 'link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css',
            crossorigin: ''
        } ]
    ],
    description: 'A VitePress Site',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            { text: '文章', link: '/MainDescription' }
        ],

        sidebar: [
            {
                text:'语言学习',collapsed:true,
                items:[
                    { text: 'Java',collapsed:true,
                        items: [
                            { text: '学习历程', link: '/Java/Java-fst'},
                            { text: '详细章节', link: '/Java/Java-sec'},
                            { text: '注意事项', link: '/Java/Java-notice' }
                        ]
                    },
                    {text:'Rust',collapsed:true,
                        items:[
                            { text: '学习历程', link: '/Rust/Rust-fst'},
                            { text: '详细章节', link: '/Rust/Rust-sec'},
                            { text: '注意事项', link: '/' }
                        ]
                    }
                ],
            },
            {
                text: '前端',collapsed:true,
                items: [
                    { text: 'Vue', link: '/vue' },
                    { text: 'markdown', link: '/markdown-examples' },
                ]
            },
            {
                text: '后端',collapsed:true,
                items: [
                    { text: '待开发', link: '/MainDescription' },
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            // { icon: 'youtube', link: '#' },
        ]
    }
})
