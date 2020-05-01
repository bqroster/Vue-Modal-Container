<template>
    <div class="vue-bp-pckg-wrapper">
        <span>{{ getTitle }}</span>
    </div>
</template>

<script>

    export default {
        props: {
            title: {
                type: String,
                default: 'This is a simple BP Vue NPM Package'
            }
        },
        computed: {
            getTitle() {
                return this.title.trim().toLowerCase();
            }
        }
    }

</script>