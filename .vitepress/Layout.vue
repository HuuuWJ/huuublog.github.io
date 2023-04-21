<template>
    <n-config-provider :theme="isDark? darkTheme: null  ">
        <n-layout style="height: 100vh; width: 100vw">
            <n-card>
                <div style="display: flex; align-items: end;justify-content: end;justify-items: right">
                    <n-switch v-model:value=" isDark ">
                        浅色
                    </n-switch>
                    <a v-for="item in vitePressData.theme.value.nav" :href="item.link">
                        {{ item.text }}
                    </a>
                </div>
            </n-card>
            <Content></Content>
        </n-layout>
    </n-config-provider>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue'
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { useData } from 'vitepress'
import { watch } from 'vue'
import theme from './theme'
// ()=> darkTheme = (theme == null ? darkTheme : null)
export default defineComponent({
    setup() {
        const vitePressData = useData()
        console.log(vitePressData)
        const isDark = ref(false)

        return {
            darkTheme,
            vitePressData,
            isDark,

        }
    }
})
</script>

<style scoped>

</style>