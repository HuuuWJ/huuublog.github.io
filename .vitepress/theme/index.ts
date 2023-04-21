// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import Counter from '../../components/Counter.vue'
import Naive from 'naive-ui'
import Layout from '../Layout.vue'
export default {
    ...Theme,
    Layout: () => {
        return h(Theme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
        // return h(Layout)
    },
    enhanceApp({ app, router, siteData }) {
        app.component('Counter', Counter)
        // app.component('NButton', NButton)

        app.use(Naive)
        // app.use(Counter)
        // ...
    }
}
